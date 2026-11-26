import { useQuery } from "@tanstack/react-query";
import type { Movie } from "@/types/Movie.ts";

export const useShows = (params: {search: string, page: number, genre: string}) => {
  params.search = params.search.trim();
  const queryKey = ["shows", params];
  const queryFn = async ({ signal }) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}shows?q=${encodeURIComponent(params.search)}&page=${encodeURIComponent(params.page)}&genre=${encodeURIComponent(params.genre)}`,
      { signal },
    );
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
  };
  return useQuery<{data: Movie[], hasMore: boolean, genres: string[]}>({
    queryFn,
    queryKey,
    enabled: params.search.length > 0,
  });
};
