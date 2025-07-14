// components/SearchFilterBar.tsx
'use client';

type Props = {
  query: string;
  setQuery: (q: string) => void;
  departmentFilter: string[];
  setDepartmentFilter: (deps: string[]) => void;
  ratingFilter: number[];
  setRatingFilter: (r: number[]) => void;
};

const allDepartments = ['HR', 'Engineering', 'Sales', 'Marketing'];
const allRatings = [1, 2, 3, 4, 5];

export default function SearchFilterBar({
  query,
  setQuery,
  departmentFilter,
  setDepartmentFilter,
  ratingFilter,
  setRatingFilter,
}: Props) {
  const toggleItem = <T,>(item: T, list: T[], setList: (newList: T[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, email, or department"
        className="border rounded px-4 py-2 w-full sm:w-1/3"
      />

      <div className="flex flex-wrap gap-2 items-center">
        {allDepartments.map((dep) => (
          <button
            key={dep}
            onClick={() => toggleItem(dep, departmentFilter, setDepartmentFilter)}
            className={`px-3 py-1 rounded border ${
              departmentFilter.includes(dep) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {dep}
          </button>
        ))}
        {allRatings.map((rate) => (
          <button
            key={rate}
            onClick={() => toggleItem(rate, ratingFilter, setRatingFilter)}
            className={`px-2 py-1 rounded border ${
              ratingFilter.includes(rate) ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
          >
            {rate}⭐
          </button>
        ))}
      </div>
    </div>
  );
}
