import VoicePreview from "@/components/voiceRecord/voicePreview";
import { speechToText } from "@/services/speectText/speechToText";
import { startRecording, stopRecording } from "@/services/voice/voiceRecorder";
import { MessageCircle, Mic, Send, X } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";


type CoachMode = "menu" | "chat" | "voice" | "preview";

interface InputControllerProps {
    mode: CoachMode;
    setMode: Dispatch<SetStateAction<CoachMode>>;
    setMessage: Dispatch<SetStateAction<string>>;
    message: string;
    sendMessage: (content: string) => Promise<void>;
    audioBlob: Blob | null;
    setAudioBlob: Dispatch<SetStateAction<Blob | null >>;
}

export default function InputController({ mode, setMode, setMessage, message, sendMessage, audioBlob, setAudioBlob }: InputControllerProps) {

    const [isRecording, setRecording] = useState(false);

    useEffect(() => {
        console.log("Mode changed:", mode);
    }, [mode]);





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
                onClick={ async () => {
                    await startRecording();
                    setRecording(true);
                    setMode("voice")
                }}
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
        {mode === "voice" && (audioBlob ? ( renderPreview()) : (
            <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
                

                <Mic
                    className={`${isRecording ? "animate-pulse text-blue-500" : "text-blue-500"}`}
                size={18}
                />

                <span className="text-white">
                    {isRecording ? "Recording..." : "Ready"}
                </span>

            </div>

            <div className="flex items-center gap-2">

                <button
                    onClick={async () => {

                        const blob = await stopRecording();

                        const transcript = await speechToText(blob);
                        console.log("transcript By: ",transcript);

                        setAudioBlob(blob);
                        setRecording(false);                      
                        
                    }} 
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600">
                Stop
                </button>

                <button
                onClick={ async () => {

                    if(isRecording){
                        await stopRecording();
                        setRecording(false)
                    }
                    setMode("menu")
                }}
                className="rounded-lg p-2 text-white transition hover:bg-white/20"
                >
                <X size={18} />
                </button>

            </div>

            </div>
        ) 
    )}


        

        </div>

    </div>
    );


    
    function renderPreview(){
    
        if(!audioBlob) return null;

        return (

            <VoicePreview 
                audioBlob={audioBlob}
                onDelete={() => {
                    setAudioBlob(null);
                    setMode("menu");
                }}
                onSend={() =>{
                    console.log(audioBlob);
                }}
                />
        );
    }
}

//  setMode("menu");