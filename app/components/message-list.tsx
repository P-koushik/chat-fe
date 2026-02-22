"use client";

import { useAllConversationsQuery } from "@/hooks/api/conversation";
import SearchBar from "./search-bar";

export default function MessagesList() {
  const userId = "69763d728f07dddf3c57b8ce"; // Replace with actual user ID from auth context or props
  const { data, isLoading, isError, error } = useAllConversationsQuery(userId);

  const conversations = data?.data ?? [];

  return (
    <div className="p-2">
      <SearchBar />
      {isLoading && <p>Loading conversations...</p>}
      {isError && <p>{(error as Error)?.message ?? "Failed to load conversations."}</p>}
      {!isLoading && !isError && conversations.length === 0 && <p>No conversations found.</p>}
      {!isLoading &&
        !isError &&
        conversations.map((conversation) => (
          <div key={conversation._id} className="py-1">
            {conversation._id}
          </div>
        ))}
    </div>
  );
}
