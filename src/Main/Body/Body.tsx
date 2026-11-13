import { Loading } from "./Loading/Loading";
import { Error } from "./Error/Error";
import styles from "./Body.module.css";
import type { Movie } from "@/types/Movie.ts";
import type { Dispatch, DispatchWithoutAction } from "react";
import { Empty } from "./Empty/Empty.tsx";
import { Movies } from "@/Main/Body/Movies/Movies.tsx";
import classNames from "classnames";

interface Props {
  isPending: boolean;
  isError: boolean;
  movies: Movie[];
  onRetry: DispatchWithoutAction;
  genres: Movie.Genre[];
  genre: Movie.Genre;
  onPickGenre: Dispatch<Movie.Genre>;
  withShowMoreBtn: Boolean;
  onShowMore: DispatchWithoutAction;
}
export const Body = (props: Props) => {
  const {
    isPending,
    isError,
    movies,
    onRetry,
    genres,
    genre,
    onPickGenre,
    withShowMoreBtn,
    onShowMore,
  } = props;

  return (
    <section
      className={styles.results}
      aria-labelledby="results-title"
      aria-busy={isPending}
    >
      <div className={styles.resultsHeader}>
        <h2 id="results-title">
          {isPending ? "Finding your story…" : "Search results"}
        </h2>
        {!isPending && !isError && movies && (
          <span>
            {movies.length} {movies.length === 1 ? "result" : "results"}
          </span>
        )}
      </div>
      {genres.length > 0 && (
        <div className={styles.genres} role="group" aria-label="Genres">
          {genres.map((currGenre) => (
            <button
              key={currGenre}
              type="button"
              className={classNames(styles.genreBadge, {
                [styles.genreBadgeActive]: currGenre === genre,
              })}
              aria-pressed={currGenre === genre}
              onClick={() => onPickGenre(currGenre)}
            >
              {currGenre}
            </button>
          ))}
        </div>
      )}
      {isPending ? (
        <Loading />
      ) : isError ? (
        <Error onRetry={onRetry} />
      ) : movies?.length ? (
        <Movies
          movies={movies}
          onShowMore={onShowMore}
          withShowMoreBtn={withShowMoreBtn}
        />
      ) : (
        <Empty />
      )}
    </section>
  );
};
