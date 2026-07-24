import { useConversation } from "@/hooks/useConversation";
import { MessageCircle, Mic, Send, X } from "lucide-react";
import { type Dispatch, type SetStateAction } from "react";

type CoachMode = "menu" | "chat" | "voice";

interface InputControllerProps {
    mode: CoachMode;
    setMode: Dispatch<SetStateAction<CoachMode>>;
    setMessage: Dispatch<SetStateAction<string>>;
    message: string;
}

export default function InputController({ mode, setMode, setMessage, message }: InputControllerProps) {
    const { sendMessage } = useConversation();

    return (
    <div className="absolute bottom-8 left-1/2 z-20 w-full max-w-xl -translate-x-1/2 px-6">

        {/* Floating Action Bar */}
        <div
        className={`
            bg-white/15
            backdrop-blur-xl
            shadow-xl
            transition-all
            duration-300
            ${
            mode === "menu"
                ? "w-56 rounded-full"
                : "w-100 rounded-2xl"
            }
            mx-auto p-3
        `}
        >

        {/* ================= MENU ================= */}
        {mode === "menu" && (
            <div className="flex justify-center gap-6">

            <button
                onClick={() => setMode("voice")}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            >
                <Mic size={19} />
            </button>

            <button
                onClick={() => setMode("chat")}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-slate-100"
            >
                <MessageCircle size={19} />
            </button>

            </div>
        )}


        {/* ================= CHAT ================= */}
        {mode === "chat" && (
            <div className="flex items-center gap-3">

            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your answer..."
                className="flex-1 bg-transparent px-2 text-white placeholder:text-white/70 outline-none"
            />

            <button
                onClick={() => {
                    setMode("menu")
                    sendMessage(message);
                    setMessage("");
                }} 
                className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700">
                <Send size={18} />
            </button>

            <button
                onClick={() => {
                setMode("menu");
                setMessage("");
                }}
                className="rounded-lg p-2 text-white transition hover:bg-white/20"
            >
                <X size={18} />
            </button>

            </div>
        )}


        {/* ================= VOICE ================= */}
        {mode === "voice" && (
            <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

                <Mic
                className="animate-pulse text-blue-500"
                size={18}
                />

                <span className="text-white">
                Listening...
                </span>

            </div>

            <div className="flex items-center gap-2">

                <button
                    onClick={() => {
                        setMode("menu");
                    }} 
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                Stop
                </button>

                <button
                onClick={() => setMode("menu")}
                className="rounded-lg p-2 text-white transition hover:bg-white/20"
                >
                <X size={18} />
                </button>

            </div>

            </div>
        )}

        </div>

    </div>
    );
}
