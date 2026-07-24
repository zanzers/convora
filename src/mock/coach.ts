import { COACHSTRING } from "@/constant/textString";

export interface Coach{
    id: string;
    name: string;
    role: string;
    image: string;
    greeting: string;
    description: string;
}

export const coach: Coach = {

    id: COACHSTRING.coachXiianger.id,
    name: COACHSTRING.coachXiianger.name,
    role: COACHSTRING.coachXiianger.role,
    image: COACHSTRING.coachXiianger.image,
    greeting: COACHSTRING.coachXiianger.greeting,
    description: COACHSTRING.coachXiianger.description


}




