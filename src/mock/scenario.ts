


export interface Scenario{

    id:string;
    title: string;
    description: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced" | "Any";
    icon: string;

}



export const scenarios : Scenario[] = [

    {
        id: "Job-interview",
        title: "Job Interview",
        description: "Pratice answering interview questions",
        difficulty: "Intermediate",
        icon: "💼"
    },
    {
        id: "coffee-shop",
        title: "Coffee Shop",
        description: "Order drinks and food naturally",
        difficulty: "Beginner",
        icon: "☕"
    },
     {
        id: "airport",
        title: "Airport",
        description: "Travel conversations.",
        difficulty: "Intermediate",
        icon: "✈️",
    },
    {
        id: "hotel",
        title: "Hotel",
        description: "Practice hotel check-in and requests.",
        difficulty: "Beginner",
        icon: "🏨",
    },
    {
        id: "shopping",
        title: "Shopping",
        description: "Ask about prices and products.",
        difficulty: "Beginner",
        icon: "🛒",
    },
    {
        id: "custom",
        title: "Custom Topic",
        description: "Practice any topic you choose.",
        difficulty: "Any",
        icon: "❤️",
    },
]