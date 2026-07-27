export async function textToSpeech(text: string): Promise<void> {

    const speak = () => {

        const voices = speechSynthesis.getVoices();

        console.log(voices);

        const voice = voices.find(v => v.name.includes("Zira"));

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