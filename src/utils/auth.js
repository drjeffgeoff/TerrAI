import bcrypt from 'bcryptjs';

// Session management
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const TOKEN_KEY = 'terramoist_auth_token';
const USER_KEY = 'terramoist_user';

// Role-based permissions
export const ROLES = {
  ADMIN: 'admin',
  FARMER: 'farmer',
  TECHNICIAN: 'technician',
  VIEWER: 'viewer'
};

export const PERMISSIONS = {
  [ROLES.ADMIN]: [
    'view_dashboard', 'manage_users', 'manage_farms', 'manage_sensors',
    'control_irrigation', 'view_reports', 'manage_alerts', 'system_settings'
  ],
  [ROLES.FARMER]: [
    'view_dashboard', 'view_farms', 'control_irrigation', 'view_reports',
    'view_sensors', 'manage_alerts'
  ],
  [ROLES.TECHNICIAN]: [
    'view_dashboard', 'view_farms', 'manage_sensors', 'view_reports',
    'view_alerts', 'control_irrigation'
  ],
  [ROLES.VIEWER]: [
    'view_dashboard', 'view_farms', 'view_reports', 'view_sensors'
  ]
};

export const checkPermission = (userRole, permission) => {
  const userPermissions = PERMISSIONS[userRole] || [];
  return userPermissions.includes(permission);
};

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (user) => {
  const token = btoa(JSON.stringify({
    userId: user.id,
    email: user.email,
    role: user.role,
    exp: Date.now() + SESSION_DURATION
  }));
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return token;
};

export const verifyToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;
  
  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp && decoded.exp > Date.now()) {
      return decoded;
    }
  } catch (error) {
    console.error('Token verification failed:', error);
  }
  
  logout();
  return null;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  window.location.href = '/login';
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem(USER_KEY);
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

export const isAuthenticated = () => {
  return !!verifyToken();
};