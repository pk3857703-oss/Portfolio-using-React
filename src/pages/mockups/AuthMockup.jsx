import React, { useState } from "react";
import { ShieldCheck, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthMockup() {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-lg p-4 bg-background">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck size={16} className="text-primary" />
        <span className="font-mono text-[11px] text-muted-foreground">Sign in to continue</span>
      </div>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 rounded-md px-2.5 py-2 bg-card border border-border">
          <Mail size={13} className="text-muted-foreground" />
          <span className="text-xs text-muted-foreground">you@example.com</span>
        </div>
        <div className="flex items-center gap-2 rounded-md px-2.5 py-2 bg-card border border-border">
          <Lock size={13} className="text-muted-foreground" />
          <span className="text-xs flex-1 text-muted-foreground">{show ? "hunter2024" : "••••••••••"}</span>
          <button onClick={() => setShow((s) => !s)} aria-label="Toggle password visibility">
            {show ? <EyeOff size={13} className="text-muted-foreground" /> : <Eye size={13} className="text-muted-foreground" />}
          </button>
        </div>
        <div className="w-full rounded-md py-2 text-center text-xs font-medium bg-primary text-primary-foreground">Log in</div>
        <p className="text-center font-mono text-[10px] text-muted-foreground">JWT · bcrypt · protected routes</p>
      </div>
    </div>
  );
}
