import { useState } from "react";
import { FileText, MessagesSquare, Settings } from "lucide-react";

import { coach } from "@/mock/coach";
import inputController from "./conversationUtils/conversationUtils";

function CoachStage() {

  const [mode, setMode] = useState<"menu" | "chat" | "voice">("menu");
  const [message, setMessage] = useState("");

  return (
    <section className="relative flex h-[calc(100vh-80px)] overflow-hidden rounded-3xl bg-slate-900">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-950" />

      {/* Top Actions */}
      <div className="absolute right-6 top-6 z-20 flex gap-2">

        <button
          className="rounded-xl bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
          title="Conversation"
        >
          <MessagesSquare size={20} />
        </button>

        <button
          className="rounded-xl bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
          title="Feedback"
        >
          <FileText size={20} />
        </button>

        <button
          className="rounded-xl bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
          title="Settings"
        >
          <Settings size={20} />
        </button>

      </div>

      {/* Coach */}
      <div className="absolute inset-0 flex items-end justify-center">

        <img
          src={coach.image}
          alt={coach.name}
          className="max-h-[90%] object-contain select-none pointer-events-none"
        />

      </div>


      {/* Bottom Floating Controls */}
      {inputController(mode, setMode, setMessage, message)}

    </section>
  );
}

export default CoachStage;



