import * as React from "react";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Organizations",
      url: "#",
      items: [
        {
          title: "Codevita 2023",
          url: "#",
        },
        {
          title: "Summer camp intern 2024",
          url: "#",
        },
      ],
    },
    {
      title: "Accessability",
      url: "#",
      items: [
        {
          title: "Create Hiring",
          url: "#",
          isActive: true,
        },
        {
          title: "Schedules",
          url: "#",
        },
        {
          title: "Insights",
          url: "#",
        },
        {
          title: "Attended Interviews",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="#" className="px-2 py-4 flex items-center gap-2">
          <Image src={"/logo.svg"} alt="logo" width={80} height={40} />
          <Badge variant="secondary">Beta</Badge>
        </Link>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter className="px-4">
        <Button>Start hiring</Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
