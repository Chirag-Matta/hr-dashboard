'use client';

import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export default function CreateUserModal() {
  const { addUser } = useUserStore();
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    department: '',
    rating: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, age, department, rating } = form;
    if (!firstName || !lastName || !email || !age || !department || !rating) {
      setError('All fields are required');
      return;
    }

    const newUser = {
      id: Date.now(), // temp ID
      firstName,
      lastName,
      email,
      age: Number(age),
      department,
      rating: Number(rating),
    };

    addUser(newUser);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      department: '',
      rating: '',
    });
    setError('');
    setShow(false);
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Create User
      </button>

      {show && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold">Create New User</h2>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                  className="border rounded px-3 py-1 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                  className="border rounded px-3 py-1 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="col-span-2 border rounded px-3 py-1"
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
                  className="border rounded px-3 py-1 bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <select
                name="department"
                value={form.department}
                onChange={handleChange}
                className="border rounded px-3 py-1"
              >
                <option value="">Select Department</option>
                <option>HR</option>
                <option>Engineering</option>
                <option>Sales</option>
                <option>Marketing</option>
              </select>
              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="col-span-2 border rounded px-3 py-1"
              >
                <option value="">Select Rating</option>
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r} ⭐
                  </option>
                ))}
              </select>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShow(false)}
                className="text-gray-600 border px-3 py-1 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-1 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
