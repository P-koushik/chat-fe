export default function MessagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-full min-h-0 flex-1 overflow-hidden">{children}</div>;
}
