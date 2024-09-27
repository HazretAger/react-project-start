import { create } from 'zustand'
import { IUseUserStore } from '../types/types';

export const useUserStore = create<IUseUserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));
