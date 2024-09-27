import { create } from 'zustand'
import { IPostStore } from '../types/types';

export const usePostStore = create<IPostStore>((set) => ({
  post: null,
  setPost: (post) => set(() => ({ post })),
}));