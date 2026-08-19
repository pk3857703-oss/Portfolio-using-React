import React, { useState } from "react";
import { Circle, FileCode2, Hand, Trophy } from "lucide-react";

const CHOICES = [
  { key: "rock", icon: Circle, label: "Rock" },
  { key: "paper", icon: FileCode2, label: "Paper" },
  { key: "scissors", icon: Hand, label: "Scissors" },
];
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };

export default function RpsMockup() {
  const [score, setScore] = useState({ you: 2, cpu: 1 });
  const [pick, setPick] = useState(null);

  const play = (key) => {
    setPick(key);
    const cpuChoice = CHOICES[Math.floor(Math.random() * 3)].key;
    setScore((s) => {
      if (cpuChoice === key) return s;
      const youWin = beats[key] === cpuChoice;
      return youWin ? { ...s, you: s.you + 1 } : { ...s, cpu: s.cpu + 1 };
    });
  };

  return (
    <div className="rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] text-muted-foreground">You {score.you} — {score.cpu} CPU</span>
        <Trophy size={14} className="text-highlight" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {CHOICES.map((c) => (
          <button
            key={c.key}
            onClick={() => play(c.key)}
            className={`rounded-md py-3 flex flex-col items-center gap-1.5 border border-border transition-transform active:scale-95 ${
              pick === c.key ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
            }`}
          >
            <c.icon size={18} />
            <span className={`text-[10px] ${pick === c.key ? "text-primary-foreground" : "text-muted-foreground"}`}>{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
