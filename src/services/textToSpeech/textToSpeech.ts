export async function textToSpeech(text: string): Promise<void> {

    const speak = () => {

        const voices = speechSynthesis.getVoices();

        
        const voice =
            voices.find(v => v.name.includes("Google UK English Female")) ??
            voices.find(v => v.name.includes("Google US English")) ??
            voices.find(v => v.lang.startsWith("en")) ??
            voices[0];


        console.log("Selected:", voice);

        const utterance = new SpeechSynthesisUtterance(text);

        if (voice) {
            utterance.voice = voice;
        }

        utterance.lang = "en-US";
        utterance.rate = 0.95;
        utterance.pitch = 1.05;

        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    };

    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = speak;
    } else {
        speak();
    }
}