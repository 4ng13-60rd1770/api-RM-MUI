import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: number[]; 
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id: number) => {
        const { favorites } = get();
        const isFav = favorites.includes(id);
        const updatedFavorites = isFav
          ? favorites.filter(favId => favId !== id)
          : [...favorites, id];
        set({ favorites: updatedFavorites });
      },
      isFavorite: (id: number) => {
        return get().favorites.includes(id);
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);
