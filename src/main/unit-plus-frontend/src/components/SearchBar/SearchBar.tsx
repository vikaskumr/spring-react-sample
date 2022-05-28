import { memo } from "react";

import TextField from "@mui/material/TextField";

import { useSearchEffects } from "./SearchBar.effects";
import { Box } from "@mui/material";
import { useStyles } from "./SearchBar.styles";

export interface SearchProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  debounceTime?: number;
}

export const SearchBar = (props: SearchProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={props.searchQuery}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.setSearchQuery(e.target.value)
        }
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};
