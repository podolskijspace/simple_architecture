import { Input } from "@/components/Input/Input.tsx";
import styles from "./Search.module.css";
import type { Dispatch } from "react";

interface Props {
  search: string;
  onSearch: Dispatch<string>;
}
export const Search = ({ search, onSearch }: Props) => {
  return (
    <section className={styles.card} aria-labelledby="search-title">
      <h1 className={styles.title} id="search-title">
        Find a film. Stay for the story.
      </h1>
      <p className={styles.subtitle}>
        One search brings you closer to a great evening.
      </p>
      <Input
        label="Movie or TV show title"
        type="search"
        name="search"
        placeholder="For example, Interstellar"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </section>
  );
};
