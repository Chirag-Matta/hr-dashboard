import { create } from 'zustand';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  setInitialUsers: (initial: User[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  setInitialUsers: (initial) => set({ users: initial }),
}));

