"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Logo } from "@/components/sidebar-03/logo";
import type { Route } from "./nav-main";
import DashboardNavigation from "@/components/sidebar-03/nav-main";
import { NavUser } from "./nav-user";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChatIcon } from "@hugeicons/core-free-icons";

const dashboardRoutes: Route[] = [
  {
    id: "messages",
    title: "Messages",
    icon: <HugeiconsIcon icon={ChatIcon} />,
    link: "/messages",
  },
];

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader
        className={cn(
          "flex md:pt-3.5",
          isCollapsed
            ? "flex-row items-center justify-between gap-y-4 md:flex-col md:items-start md:justify-start"
            : "flex-row items-center justify-between",
        )}
      >
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          {!isCollapsed && <span className="font-semibold text-black dark:text-white">Acme</span>}
        </a>

        <motion.div
          key={isCollapsed ? "header-collapsed" : "header-expanded"}
          className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-row md:flex-col-reverse" : "flex-row",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SidebarTrigger />
        </motion.div>
      </SidebarHeader>
      <SidebarContent className="gap-4 px-2 py-4">
        <DashboardNavigation routes={dashboardRoutes} />
      </SidebarContent>
      <SidebarFooter className="px-2 pb-4">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
