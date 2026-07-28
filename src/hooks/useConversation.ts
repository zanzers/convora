import { useState, useEffect } from "react";
import type { Message } from "@/types/conversationModel";
import {setToAI} from "@/services/aiService";
import type { ScenarioModel } from "@/mock/scenarioModel";
import textToSpeech from "@/services/providers/elevenLabs";

export function useConversation(scenario: ScenarioModel){

    useEffect(() => {
        const openingMessage: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: scenario.openingMessage,
            createAt: new Date(),
        };
    

        console.log("Xiianger", openingMessage);
        setMessages([openingMessage]);
        textToSpeech(openingMessage.content);
    }, [scenario]);



    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    async function sendMessage(content: string){

        if(!content.trim()) return;
        setLoading(true);

        try {
            const userMessage: Message = {
                id: crypto.randomUUID(),
                role: "user",
                content,
                createAt: new Date(),
            };
    
            const updatedMessages = [...messages, userMessage];
            setMessages(updatedMessages);
    
            const reply = await setToAI(updatedMessages, scenario);
            
                
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

            console.log("🔊 About to speak:", reply);
            await textToSpeech(reply);
            console.log("Finished Speaking");

             console.log([
            ...updatedMessages,
            assistantMessages

            ])

       } finally {
            setLoading(false);
        
       }
    }


    return {
        messages,
        loading,
        sendMessage,
        
    };
}




