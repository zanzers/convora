import OpenAI from "openai";
import { OPENAI_API_KEY } from "./ai";


export const clientModel = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    dangerouslyAllowBrowser: true,
});
