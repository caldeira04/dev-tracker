import { Label } from "@/components/ui/label";
import { Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex items-center justify-center h-10 w-10 bg-primary rounded-sm">
        <Code className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Label className="text-2xl font-bold text-center">Dev Tracker</Label>
        <Label className="text-sm text-muted-foreground text-center">
          Track your development progress
        </Label>
      </div>
    </div>
  );
}
