import Sidebar03 from "@/components/sidebar-03";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sidebar03>{children}</Sidebar03>;
}
