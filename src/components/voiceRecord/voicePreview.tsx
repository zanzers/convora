import { LoaderCircle, Pause, Play, Send, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";


interface voicePreviewProps{
    isSending: boolean;
    audioBlob: Blob;
    onDelete(): void;
    onSend(audio: Blob): Promise <void>;
}

function voicePreview({isSending, audioBlob, onDelete, onSend} :voicePreviewProps) {
  
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);



    const audioRef= useRef<HTMLAudioElement | null> (null);

    useEffect(() => {

        console.log("VoicePreview Mounted");

        const url = URL.createObjectURL(audioBlob);
        console.log("URL:", url);

        const audio = new Audio(url);
        audioRef.current = audio;

        audio.onloadedmetadata = () => {
            console.log("Metadata loaded");
            setDuration(audio.duration);
        }
        
        audio.ontimeupdate = () => {
            setCurrentTime(audio.currentTime);
        }
        audio.onended = () => {
            console.log("Ended");
            setPlaying(false);
            setCurrentTime(0);
        };


        return () => {
            console.log("Cleanup");
            audio.pause();
            URL.revokeObjectURL(url);
        };
    }, [audioBlob]);
 

    return (

        <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

                <button
                    onClick={toggleAudio} 
                    className="rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700">
                    
                    {playing ? <Pause size={16}/> : <Play size={16}/>}
                </button>

                
                <div className="flex flex-col">
                    <span className="text-white text-sm">
                        Recording..
                    </span>

                    <input 
                        type="range" 
                        min={0}
                        max={duration}
                        value={currentTime}
                        readOnly
                        className="w-52"
                        />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onDelete} 
                    className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                        <Trash2 size={16}/>
                </button>

                <button
                    disabled={isSending}
                    onClick={() => onSend(audioBlob)} 
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-red-700">
                        {isSending ? (<LoaderCircle className="animate-spin" size={16}/>): <Send size={16}/>}
                </button>


            </div>
        </div>
    
  )

  function toggleAudio(){
    if(!audioRef.current) return;

    if(playing){
        audioRef.current.pause();
        setPlaying(false);
    }else{
        audioRef.current.play();
        setPlaying(true);
    }
  }
}

export default voicePreview
