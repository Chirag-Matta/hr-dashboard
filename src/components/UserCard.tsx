'use client';

import React, { useState } from 'react';
import { useBookmarkStore } from '@/store/bookmarkStore';
import Modal from '@/components/ui/Modal';
import { useRouter } from 'next/navigation';


type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
};

export default function UserCard({ user }: { user: User }) {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarkStore();
  const bookmarked = isBookmarked(user.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();


  return (
    <>
      <div className="bg-white shadow p-4 rounded-xl flex flex-col gap-2 dark:bg-gray-800">
        <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
        <p>Age: {user.age}</p>
        <p>Department: {user.department}</p>
        <div>
          Rating: {'⭐️'.repeat(user.rating)}
        </div>
        <div className="flex gap-2 mt-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            View
          </button>
          {bookmarked ? (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => removeBookmark(user.id)}
            >
              Remove Bookmark
            </button>
          ) : (
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded"
              onClick={() => addBookmark(user)}
            >
              Bookmark
            </button>
          )}
          <button className="bg-green-600 text-white px-3 py-1 rounded">Promote</button>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="User Details">
        <div className="text-sm space-y-2">
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Rating:</strong> {'⭐️'.repeat(user.rating)}</p>
          <p><strong>Bio:</strong> Enthusiastic team player with a drive for excellence. (mocked)</p>
          <p><strong>Phone:</strong> +91 98765 43210 (mocked)</p>
          <p><strong>Address:</strong> 123 Main Street, Tech City (mocked)</p>
        </div>
      </Modal>
    </>
  );
  <button
  className="bg-blue-500 text-white px-3 py-1 rounded"
  onClick={() => router.push(`/employee/${user.id}`)}
>
  View
</button>
}


