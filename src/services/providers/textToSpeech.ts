export async function textToSpeech(text: string): Promise<void> {

    const speak = () => {

        const preferredNames = [
            "Google UK English Female",
            "Microsoft Zira - English (United States)",
            "Samantha",
            "Victoria",
            "Susan",
            "Jenny",
            "Aria",
            "Emma",
        ];

        const voices = speechSynthesis.getVoices();
        let voice: SpeechSynthesisVoice | undefined;

        for (const name of preferredNames) {
            voice = voices.find(v => v.name.includes(name));
            if (voice) break;
        }

        if (!voice) {
            voice =
                voices.find(v => v.lang === "en-US") ??
                voices.find(v => v.lang === "en_US") ??
                voices.find(v => v.lang.startsWith("en"));
        }

        console.log("Selected Voice:", voice?.name);

        const utterance = new SpeechSynthesisUtterance(text);

        if (voice) {
            utterance.voice = voice;
        }

        utterance.lang = "en-US";
        utterance.rate = 0.95;
        utterance.pitch = 1.05;

        console.log("Speaking:", speechSynthesis.speaking);
        console.log("Pending:", speechSynthesis.pending);
        console.log("Paused:", speechSynthesis.paused);

        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        setTimeout(() => {
            speechSynthesis.speak(utterance);
        }, 150);
    };

    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.onvoiceschanged = null;
            speak();
        };
    } else {
        speak();
    }
}