// components/UserCard.tsx
'use client';

import React from 'react';
import { useBookmarkStore } from '@/store/bookmarkStore';

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

  return (
    <div className="bg-white shadow p-4 rounded-xl flex flex-col gap-2 dark:bg-gray-800">
      <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
      <p>Age: {user.age}</p>
      <p>Department: {user.department}</p>
      <div>
        Rating: {'⭐️'.repeat(user.rating)}
      </div>
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
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
  );
}
