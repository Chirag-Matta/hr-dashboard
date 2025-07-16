interface DummyUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  username?: string;
  age?: number;
  gender?: string;
  birthDate?: string;
  address?: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
}

interface User extends DummyUser {
  rating: number;
  department: string;
}
interface DummyAPIResponse {
  users: DummyUser[];
  total: number;
  skip: number;
  limit: number;
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const data: DummyAPIResponse = await res.json();

  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];
  return data.users.map((user: DummyUser): User => ({
    ...user,
    age: user.age ?? 25, 
    rating: Math.floor(Math.random() * 5) + 1,
    department: departments[Math.floor(Math.random() * departments.length)],
  }));
}