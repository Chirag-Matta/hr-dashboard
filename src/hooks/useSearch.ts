// hooks/useSearch.ts
import { useState, useMemo } from 'react';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  rating: number;
};

export function useSearch(users: User[]) {
  const [query, setQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);

  const filtered = useMemo(() => {
    return users.filter((user) => {
      const matchesQuery =
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.department.toLowerCase().includes(query.toLowerCase());

      const matchesDepartment =
        departmentFilter.length === 0 || departmentFilter.includes(user.department);

      const matchesRating =
        ratingFilter.length === 0 || ratingFilter.includes(user.rating);

      return matchesQuery && matchesDepartment && matchesRating;
    });
  }, [query, departmentFilter, ratingFilter, users]);

  return {
    query,
    setQuery,
    departmentFilter,
    setDepartmentFilter,
    ratingFilter,
    setRatingFilter,
    filteredUsers: filtered,
  };
}