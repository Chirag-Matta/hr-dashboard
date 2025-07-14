// store/bookmarkStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  rating: number;
};

type BookmarkStore = {
  bookmarks: User[];
  addBookmark: (user: User) => void;
  removeBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
};

export const useBookmarkStore = create(
  persist<BookmarkStore>(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (user) => {
        if (!get().isBookmarked(user.id)) {
          set((state) => ({ bookmarks: [...state.bookmarks, user] }));
        }
      },
      removeBookmark: (id) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((user) => user.id !== id),
        }));
      },
      isBookmarked: (id) => {
        return get().bookmarks.some((user) => user.id === id);
      },
    }),
    {
      name: 'hr-bookmarks', // saves to localStorage
    }
  )
);
