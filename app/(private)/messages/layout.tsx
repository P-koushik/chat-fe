import MessagesList from "@/app/components/message-list";

export default function MessagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full grid grid-cols-[1fr_4fr] min-h-0 overflow-hidden">
      <MessagesList />
      {children}
    </div>
  );
}
