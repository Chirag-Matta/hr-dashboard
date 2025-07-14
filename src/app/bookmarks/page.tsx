// app/bookmarks/page.tsx
'use client';

import { useBookmarkStore } from '@/store/bookmarkStore';
import UserCard from '@/components/UserCard';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarkStore();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">📌 Bookmarked Employees</h1>
      {bookmarks.length === 0 ? (
        <p className="text-gray-600">No bookmarks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarks.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}
