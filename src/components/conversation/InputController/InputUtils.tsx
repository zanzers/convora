import { speechToText } from "@/services/speechToText/speechToText";




interface HandleVoiceSendProps{
    blob: Blob;
    sendMessage: (content: string) => Promise<void>;
    setAudioBlob: (blob: Blob | null) => void;
    setMode: (mode: "menu" | "chat" | "voice") => void;
    setIsSending: (sending: boolean) => void;
}



export async function handleVoiceSend({blob, sendMessage, setAudioBlob, setMode, setIsSending} : HandleVoiceSendProps){

        setIsSending(true);

        try{

            const transcript = await speechToText(blob);
            console.log("Sending Transcript: ", transcript);
    
            await sendMessage(transcript);
            setAudioBlob(null);
    
            setMode("menu");
        }finally{
            setIsSending(false);
        }

}
    


 