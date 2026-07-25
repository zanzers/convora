export interface ScenarioModel{

    id:string;
    title: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Any";
    icon: string;

    AIrole: string;
    objective: string;
    openingMessage: string;


}



export const scenarios: ScenarioModel[] = [

    {
        id: "job-interview",
        title: "Job Interview",
        description: "Practice answering common interview questions.",
        difficulty: "Intermediate",
        icon: "💼",

        AIrole: "Professional Hiring Manager",

        objective:
            "Conduct a realistic general job interview to help the user practice speaking English with confidence.",

        openingMessage: 
            `Good morning. I'm Xiianger, and I'll be conducting your interview today.

            Let's begin.

            Could you please introduce yourself?`
    },

    {
        id: "coffee-shop",
        title: "Coffee Shop",
        description: "Order drinks and food naturally.",
        difficulty: "Beginner",
        icon: "☕",

        AIrole: "Friendly Barista",

        objective:
            "Help the user practice ordering food and drinks in English.",

        openingMessage:
            "Hi! Welcome to our coffee shop. What can I get started for you today?"
    },

    {
        id: "airport",
        title: "Airport",
        description: "Travel conversations.",
        difficulty: "Intermediate",
        icon: "✈️",

        AIrole: "Airport Check-in Officer",

        objective:
            "Help the user practice common airport conversations.",

        openingMessage:
             "Good afternoon. May I see your passport and ticket, please?"
    },

    {
        id: "hotel",
        title: "Hotel",
        description: "Practice hotel check-in and requests.",
        difficulty: "Beginner",
        icon: "🏨",

        AIrole: "Hotel Receptionist",

        objective:
            "Help the user practice checking into a hotel and making simple requests.",

        
        openingMessage:
             "Welcome to our hotel! Do you have a reservation with us today?"
    },

    {
        id: "shopping",
        title: "Shopping",
        description: "Ask about prices and products.",
        difficulty: "Beginner",
        icon: "🛒",

        AIrole: "Store Assistant",

        objective:
            "Help the user practice shopping conversations in English.",

       
        openingMessage:
            "Hello! Welcome. Is there anything you're looking for today?"  
    },

    {
        id: "custom",
        title: "Custom Topic",
        description: "Practice any topic you choose.",
        difficulty: "Any",
        icon: "❤️",

        AIrole: "English Conversation Coach",

        objective:
            "Have a natural conversation about any topic chosen by the user.",

        
        openingMessage:
             "Hi! What would you like to practice talking about today?"
    },

];