export async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const data = await res.json();

  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];
  return data.users.map((user: any) => ({
    ...user,
    rating: Math.floor(Math.random() * 5) + 1,
    department: departments[Math.floor(Math.random() * departments.length)],
  }));
}
