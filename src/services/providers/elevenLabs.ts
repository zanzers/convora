

async function textToSpeech(text: string): Promise<void> {

    const response = await fetch("/api/elevenLabs", {
        method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text}),
    });

    if(!response.ok){
        throw new Error("failed to generate speech.");
    }
    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    
    return new Promise((resolve, reject) =>{
        audio.onended = () => {
            URL.revokeObjectURL(audioUrl);
            resolve();
        };

        audio.onerror = () => {
            URL.revokeObjectURL(audioUrl);
            reject(new Error("Failed to play audio."));
        };
        audio.play().catch(reject);
    })
}

export default textToSpeech
