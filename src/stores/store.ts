// store.ts
import { create } from "zustand";

interface AppState {
  isApplicationMenuOpen: boolean;
  setApplicationMenuOpen: (value: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isApplicationMenuOpen: false,
  setApplicationMenuOpen: (value) => set({ isApplicationMenuOpen: value }),
}));
