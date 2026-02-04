"use client";

import { FormEvent, useState } from "react";

type SearchBarProps = {
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSearch: (query: string) => void;
};

export default function SearchBar({
  className = "",
  defaultValue = "",
  placeholder = "Search...",
  buttonLabel = "Search",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query.trim());
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
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <button
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
