import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/sidebar-03/app-sidebar";

export default function Sidebar03({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="relative flex h-dvh w-full overflow-hidden">
        <DashboardSidebar />
        <SidebarInset className="flex min-h-0 flex-col overflow-hidden">
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
