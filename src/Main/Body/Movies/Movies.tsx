import type { Movie } from "@/types/Movie.ts";
import type { DispatchWithoutAction } from "react";
import { MovieItem } from "./MovieItem/MovieItem.tsx";
import { Button } from "@/components/Button/Button.tsx";
import styles from "./Movies.module.css";

interface Props {
  movies: Movie[];
  onShowMore: DispatchWithoutAction;
  hasMore: Boolean;
}
export const Movies = ({ movies, onShowMore, hasMore }: Props) => {
  return (
    <div>
      <div className={styles.grid}>
        {movies.map(({ show }) => (
          <MovieItem show={show} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.showMore}>
          <Button onClick={onShowMore}>Show more</Button>
        </div>
      )}
    </div>
  );
};
