


import { useState } from "react";
import type { Message } from "@/types/conversationModel";
import {setToAI} from "@/services/aiService";

export function useConversation(){

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function sendMessage(content: string){
        setLoading(true);

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            createAt: new Date(),
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        const reply = await setToAI(updatedMessages);
        
        console.log("Gemini Reply:", reply);

        const assistantMessages: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: reply,
            createAt: new Date(),
        }

        setMessages([
            ...updatedMessages,
            assistantMessages
        ]);

        console.log([
            ...updatedMessages,
            assistantMessages
        ])

        setLoading(false);
    }


    return {
        messages,
        loading,
        sendMessage,
        
    };
}