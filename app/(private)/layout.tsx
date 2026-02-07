import Sidebar03 from "@/components/sidebar-03";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Sidebar03>
      <div className="bg-sidebar h-full m-2 ml-0 border shadow-md rounded-lg">{children}</div>
    </Sidebar03>
  );
}
