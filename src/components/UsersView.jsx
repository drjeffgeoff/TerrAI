import { useState } from 'react';
import { Users, Plus, Search, Pencil } from 'lucide-react';

const initialUsers = [
  { id: 1, name: 'Jane Cooper', email: 'jane@terramoist.ai', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Samuel Lee', email: 'samuel@terramoist.ai', role: 'Technician', status: 'Active' },
  { id: 3, name: 'Aisha Malik', email: 'aisha@terramoist.ai', role: 'Manager', status: 'Pending' },
];

const UsersView = () => {
  const [users] = useState(initialUsers);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage team members, roles, and access controls across your organization.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 transition-all">
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-3xl border border-primary-300 p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Active Users</h2>
              <p className="text-sm text-gray-700 font-medium">Review team permissions and account status.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="search" placeholder="Search users" className="w-full rounded-full border border-primary-300 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-200" />
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-primary-300">
            <table className="min-w-full divide-y divide-primary-200 text-left">
              <thead className="bg-primary-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-700">Name</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-700">Email</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-700">Role</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-700">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-100 bg-white">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{user.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">{user.role}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      <button className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                        <Pencil className="w-4 h-4" /> Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;
