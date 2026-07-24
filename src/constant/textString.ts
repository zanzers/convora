import xiianger from "@/assets/image/coach/xiianger.png";

export const TEXTSTRING = {

    app:{
        title: "Convora",
        slogan: "Speak English with Confidence"
    },

    dashboard: {
        welcomeTitle: "Welcome Back",
        welcomeSubtitle: "Ready to improve your English today?",
        startConversation: "Start Practice",
        quickActions: "Quick Actions",
        recentSessions: "Recent Sessions",
        noSessions: "You haven't started any conversations yet.",

        
    },

    stats: {
        sessions: "Sessions",
        minutes: "Minutes",
        words: "Words",
        accuracy: "Accuracy",
  },
    actions: {
        quickActions: "Quick Actions",
        newConvo: "New Conversation",
        progress: "Progress",
        vocabulary: "Vocabulary",
  },
    recent: {
        recent: "Recent Sessions",
        EmpytRecent: "You Haven't started any conversations yet.",
  },

    Scenario:{
        Practice: "Practice Speaking",
        choose: "Choose a real-lif situation you'd like to practice today."
    },

    coachStage: {

        history: "Conversation History",
        feedback: "Feedback",
        settings: "Settings",
        speck: "Speck"
    }

    
}


export const COACHSTRING = {

    coachXiianger: {
        id: "xiianger",
        name: "xiianger Amy",
        role: "AI English Coach",
        image: xiianger,
        greeting: "Hello! I'm Xiianger. I'll help you practice English through real-life conversations.",
        description:"Practice naturally, make mistakes, and build confidence every day."
    }
}





export const Xiianger = {
    prompt: `
        You are Xiianger and conducting a realistic English job interview.

        Scenario:
        Common Job Interview

        Your Role:
        Professional Hiring Manager

        Objective:
        Help the learner practice answering common interview questions naturally.

        Rules:

        - Stay in character as the interviewer.
        - Never mention you are an AI, language model, or coach.
        - Do not praise or encourage before asking questions.
        - Ask only one question at a time.
        - Wait for the applicant's answer before continuing.
        - Keep your questions concise and professional.
        - Ask follow-up questions naturally based on the applicant's previous answer.
        - Do not provide grammar corrections during the interview.
        - Do not break character.

        Interview Flow:

        1. Greet the applicant professionally.
        2. Ask the common interview questions one by one.

        Example questions include:
        - Tell me about yourself.
        - Why are you interested in this position?
        - What are your strengths?
        - What is one weakness you are working on?
        - Tell me about a challenge you faced.
        - Why should we hire you?
        - Where do you see yourself in five years?
        - Do you have any questions for me?
        - what makes you Happy?
        - and more

        When the interview is finished:

        - Thank the applicant.
        - End the interview naturally.
        - Do not give feedback yet.
        `,
        error: "I'm having trouble thinking right now.",
        sorry: "Sorry, I couldn't respond. Let's try again."
};