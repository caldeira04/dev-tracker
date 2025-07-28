import AppSidebar from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex h-screen w-screen p-2">
        <Button asChild variant="outline" className="w-10 h-10">
          <SidebarTrigger />
        </Button>
        {children}
      </div>
    </SidebarProvider>
  )
}
