import OpenAI from "openai";
import type { Message } from "@/types/conversationModel";
import { OPENAI_API_KEY } from "@/services/config/ai";
import { Xiianger } from "@/constant/textString";

const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    dangerouslyAllowBrowser: true,
});

const SYSTEM_PROMPT = Xiianger.prompt;

export async function setToAI(messages: Message[]): Promise<string> {
    try {
        const response = await client.chat.completions.create({
            model: "inclusionai/ling-3.0-flash:free",

            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT,
                },

                ...messages.map((message) => ({
                    role: message.role,
                    content: message.content,
                })),
            ],
        });

        return (
            response.choices[0].message.content ??
            Xiianger.error
        );

    } catch (error) {
        console.error(error);
        return Xiianger.sorry;
    }
}