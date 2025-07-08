import { create } from 'zustand';
import axios from 'axios';

interface Character {
  episode: string[];
  location: { name: string; };
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string; 
}

interface CharacterState {
  characters: Character[];
  loading: boolean;
  fetchCharacters: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  loading: false,
  fetchCharacters: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character', );
      set({ characters: response.data.results });
    } catch (error) {
      console.error('Error al obtener personajes:', error);
    } finally {
      set({ loading: false });
    }
  },
}));