import { create } from 'zustand'
import { IPostStore } from '../types/types';

export const usePostStore = create<IPostStore>((set) => ({
  user: null,
  setPost: (user) => set(() => ({ user })),
}));