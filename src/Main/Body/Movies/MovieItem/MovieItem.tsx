import styles from "./MovieItem.module.css";
import type { Movie } from "@/types/Movie.ts";

interface Props {
  show: Movie["show"];
}
export const MovieItem = ({ show }: Props) => {
  return (
    <article className={styles.movie} key={show.id}>
      <a
        className={styles.movieLink}
        href={show.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.poster}>
          <span className={styles.noPoster}>
            Poster still behind the scenes
          </span>
          {show.image?.medium && (
            <img
              src={show.image.medium}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
          {show.rating?.average != null && (
            <span
              className={styles.rating}
              aria-label={`Rated ${show.rating.average} out of 10`}
            >
              ★ {show.rating.average.toFixed(1)}
            </span>
          )}
        </div>
        <div className={styles.movieBody}>
          <h3>{show.name}</h3>
          <p>
            {[show.premiered?.slice(0, 4), show.language]
              .filter(Boolean)
              .join(" · ") || "Details coming soon"}
          </p>
          <span className={styles.genres}>
            {show.genres.slice(0, 2).join(" / ") || "Genre unavailable"}
          </span>
          <span className={styles.details}>More on TVmaze ↗</span>
        </div>
      </a>
    </article>
  );
};
