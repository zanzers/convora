import type { Message } from "@/types/conversationModel";
import { clientModel } from "./config/clientModel";
import type { ScenarioModel } from "@/mock/scenarioModel";
import createPrompt from "@/features/prompts/createPrompt";
import { Xiianger } from "./AI/xiiangerAI";


const client = clientModel;

export async function setToAI(messages: Message[], scenario: ScenarioModel): Promise<string> {


    const systemPropmt = createPrompt(scenario)

    try {
        const response = await client.chat.completions.create({
            model: "inclusionai/ling-3.0-flash:free",

            messages: [
                {
                    role: "system",
                    content: systemPropmt,
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