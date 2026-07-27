


export async function speechToText(
    audioBlob: Blob
): Promise<string> {

    console.log("Starting Speech-to-Text...");
    console.log(" Audio Blob: ", audioBlob);


    const formData = new FormData();
    formData.append("file", audioBlob, "recording.webm");
    formData.append("model", "whisper-large-v3");

    console.log("📤 Sending audio to Groq Whisper...");
   
    const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },

        body: formData,
    });

    console.log("📥 Response received.");

    if(!response.ok){
        console.error("Whisper Request Failed:", response.status);

        throw new Error(
            `Speech-to-Text failed (${response.status})`
        );

    }

    const data = await response.json();


    console.log("Transcript: ", data.text);

    return data.text;
}