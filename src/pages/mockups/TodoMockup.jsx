import React, { useState } from "react";
import { Plus, CheckSquare, Circle, Trash2 } from "lucide-react";

const INITIAL = [
  { t: "Design landing page", done: true },
  { t: "Connect MongoDB Atlas", done: true },
  { t: "Write auth middleware", done: false },
  { t: "Deploy to Render", done: false },
];

export default function TodoMockup() {
  const [items, setItems] = useState(INITIAL);
  const toggle = (i) => setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, done: !it.done } : it)));
  const remove = (i) => setItems((prev) => prev.filter((_, idx) => idx !== i));
  const doneCount = items.filter((i) => i.done).length;

  return (
    <div className="rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[11px] text-muted-foreground">My Tasks · {doneCount}/{items.length}</span>
        <div className="w-6 h-6 rounded-md flex items-center justify-center bg-primary text-primary-foreground">
          <Plus size={14} />
        </div>
      </div>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={it.t} className="flex items-center gap-2 rounded-md px-2.5 py-2 bg-card border border-border">
            <button onClick={() => toggle(i)} aria-label="Toggle task">
              {it.done ? <CheckSquare size={15} className="text-primary" /> : <Circle size={15} className="text-muted-foreground" />}
            </button>
            <span className={`text-xs flex-1 truncate ${it.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{it.t}</span>
            <button onClick={() => remove(i)} aria-label="Delete task">
              <Trash2 size={12} className="text-muted-foreground hover:text-red-400 transition-colors" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
