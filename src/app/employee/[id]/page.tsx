import { fetchUsers } from '@/lib/getUsers';
import { notFound } from 'next/navigation';

// Update the type definition for Next.js 15
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EmployeePage({ params }: PageProps) {
  // Await the params Promise
  const { id } = await params;
  
  const users = await fetchUsers();
  const user = users.find((u) => u.id.toString() === id);

  if (!user) return notFound();

  const bio = `I am ${user.firstName}, working in the ${user.department} department with a passion for growth and impact.`;
  const history = Array.from({ length: 6 }, (_, i) => ({
    year: 2018 + i,
    score: Math.floor(Math.random() * 5) + 1,
  }));

  const badgeColor =
    user.rating >= 4
      ? 'bg-green-500'
      : user.rating >= 2
      ? 'bg-yellow-500'
      : 'bg-red-500';

  return (
    <main className="p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow rounded-xl space-y-4">
      <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>

      <div className="text-sm space-y-1">
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
        <p><strong>Department:</strong> {user.department}</p>
      </div>

      <div className="pt-4">
        <h2 className="font-semibold text-lg">Bio</h2>
        <p className="text-gray-700 dark:text-gray-300">{bio}</p>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-1">Performance Rating</h2>
        <div className="flex items-center gap-2">
          <div className={`text-white px-3 py-1 rounded ${badgeColor}`}>
            {user.rating} ⭐
          </div>
          <span>{'⭐️'.repeat(user.rating)}</span>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg mb-2">Past Performance</h2>
        <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
          {history.map((item) => (
            <li key={item.year}>
              {item.year}: {item.score} ⭐
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}