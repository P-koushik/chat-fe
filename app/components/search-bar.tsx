"use client";

import { SyntheticEvent, useState } from "react";

type SearchBarProps = {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  buttonLabel?: string;
};

export default function SearchBar({
  className = "",
  defaultValue = "",
  placeholder = "Search...",
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-full items-center gap-2 ${className}`}>
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background p-2 text-sm placeholder:text-muted-foreground focus-visible:ring-ring"
      />
    </form>
  );
}
