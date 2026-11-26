import {useShows} from "./useShows.ts";
import {useMemo, useState} from "react";
import {useDebounce} from "use-debounce";

export const usePresenter = () => {
  const [page, setPage] = useState(0);
  const onShowMore = () => {
    setPage((page) => page + 1);
  };
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const {
    data: {data = [], hasMore, genres = []} = {},
    isError,
    isLoading,
    isFetching,
    refetch,
  } = useShows({ search: debouncedSearch, page, genre });
  const handleRetry = () => void refetch();
  const hasSearch = search.trim().length > 0;
  const isPending =
    hasSearch && (search !== debouncedSearch || isLoading || isFetching);

  const onPickGenre = (newGenre: string) => {
    if (genre === newGenre) setGenre("");
    else setGenre(newGenre);
    setPage(0);
  };
  const onSearch = (search: string) => {
    setSearch(search);
    setGenre("");
    setPage(0);
  };

  const filteredData = useMemo(() => {
    let filteredData = data;
    // if (genre) {
    //   filteredData = data.filter((movie) => movie.show.genres.includes(genre));
    // }
    // const filteredByPagination = filteredData.slice(0, 3 * (page + 1));
    return filteredData;
  }, [data, genre, page]);

  return {
    hasMore,
    hasSearch,
    search,
    onSearch,
    filteredData,
    genre,
    onPickGenre,
    genres,
    isError,
    isPending,
    handleRetry,
    onShowMore,
  };
};
