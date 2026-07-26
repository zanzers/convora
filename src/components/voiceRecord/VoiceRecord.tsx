import { useState } from "react";
import { Mic,  Square, X} from "lucide-react";
import { startRecording, stopRecording } from "@/services/voice/voiceRecorder";


interface voiceRecorderProps{
    onRecorded(audio: Blob): void;
    onCancel(): void;
}


function VoiceRecord({onRecorded, onCancel}: voiceRecorderProps) {
 
  const [recording, setRecording ] = useState(false);

  async function handleStart(){
    await startRecording();
    setRecording(true);
  }

  async function handleStop(){
    const blob = await stopRecording();

    setRecording(false);
    onRecorded(blob);
  }

  return(
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Mic 
                
                className={recording ? "animate-pulse" : "text-blue-500"}
                
                />

                <span className="text-white">
                    {recording ? "Recording..." : "Ready"}
                </span>
        </div>

        <div className="flex gap-2">

            {!recording && (
                <button
                    onClick={handleStart}
                    className="rounded-xl bg-blue-600 px-4 py-2 text-white"
                >
                    Record

                </button>
            )}

            {recording && (
                <button
                    onClick={handleStop}
                    className="rounded-xl bg-red-600 px-4 py-2 text-white"
                >

                    <Square size={16} />

                </button>
            )}

            <button
                onClick={onCancel}
                className="rouded-lg p-2 text-white hover:bg-white/20"
            >
                <X size={16} />

            </button>
        </div>
    </div>
  )





  
  
   
}

export default VoiceRecord
