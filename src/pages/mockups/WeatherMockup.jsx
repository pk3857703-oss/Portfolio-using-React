import React from "react";
import { CloudSun, Sun, CloudRain, Wind } from "lucide-react";

const DAYS = [
  { d: "Mon", icon: Sun, t: "31°" },
  { d: "Tue", icon: CloudSun, t: "28°" },
  { d: "Wed", icon: CloudRain, t: "24°" },
  { d: "Thu", icon: Wind, t: "27°" },
];

export default function WeatherMockup() {
  return (
    <div className="rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[11px] text-muted-foreground">Kanpur, IN</p>
          <p className="text-3xl font-semibold">29°C</p>
          <p className="text-xs text-muted-foreground">Partly cloudy</p>
        </div>
        <CloudSun size={44} strokeWidth={1.5} className="text-highlight" />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4">
        {DAYS.map((d) => (
          <div key={d.d} className="rounded-md py-2 flex flex-col items-center gap-1 bg-card border border-border">
            <span className="font-mono text-[10px] text-muted-foreground">{d.d}</span>
            <d.icon size={16} className="text-primary" />
            <span className="text-[11px]">{d.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
