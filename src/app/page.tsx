// app/page.tsx
'use client';

import { fetchUsers } from '@/lib/getUsers';
import UserCard from '@/components/UserCard';
import { useEffect, useState } from 'react';
import { useSearch } from '@/hooks/useSearch';
import SearchFilterBar from '@/components/SearchFilterBar';

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const {
    query,
    setQuery,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredUsers,
  } = useSearch(users);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <main className="p-4">
      <SearchFilterBar
        query={query}
        setQuery={setQuery}
        departmentFilter={departmentFilter}
        setDepartmentFilter={setDepartmentFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
