import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}


interface UseGamesParams {
  search?: string;
  ordering?: string;
  genre?: string;
  platform?: string;
}

const useGames = (params: UseGamesParams = {}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const queryParams: any = {};
    if (params.search) queryParams.search = params.search;
    if (params.ordering) queryParams.ordering = params.ordering;
    if (params.genre) queryParams.genres = params.genre;
    if (params.platform) queryParams.platforms = params.platform;

  console.log("RAWG queryParams:", queryParams);
  console.log("ordering:", queryParams.ordering);
  console.log("search:", queryParams.search);
  console.log("genre:", queryParams.genres);
  console.log("platform:", queryParams.platforms);
    apiClient
      .get<FetchGamesResponse>("/games", { params: queryParams, signal: controller.signal })
      .then((res) => {
        console.log("RAWG API results:", res.data.results.map(g => ({ name: g.name, metacritic: g.metacritic }))); // Hiển thị tên và điểm metacritic
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      });

    return () => controller.abort();
  }, [params.search, params.ordering, params.genre, params.platform]);

  return { games, error, loading };
};

export default useGames;
