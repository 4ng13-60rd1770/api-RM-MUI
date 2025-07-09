import { useState, useEffect } from "react";
import axios from "axios";

export const useEpisodes = (episodeUrls: string[]) => {
  const [episodes, setEpisodes] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!episodeUrls || episodeUrls.length === 0) {
      setEpisodes([]);
      return;
    }

    const fetchEpisodes = async () => {
      try {
        setLoading(true);

        if (episodeUrls.length === 1) {
          const res = await axios.get(episodeUrls[0]);
          setEpisodes([res.data]);
        } else {
          const ids = episodeUrls.map((url) => url.split("/").pop()).join(",");
          const res = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`);
          setEpisodes(Array.isArray(res.data) ? res.data : [res.data]);
        }

      } catch (error) {
        console.error("Error al obtener episodios", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, [episodeUrls]);

  return { episodes, loading };
};
