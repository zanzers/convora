async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method not Allowed", { status: 405 });
    }

    const text = await req.json();

    const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${process.env.ELEVENLABS_VOICE_ID}`,
        {
            method: "POST",
            headers: {
                "xi-api-key": process.env.VITE_ELEVENLABS_API_KEY!,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                text,
                model_id: "eleven_multilingual_v2"
            })
        }
    );

    if(!response.ok){
        return new Response("ElevenLabs Error", {
            status: response.status,
        });
    }

    const audio = await response.arrayBuffer();
    return new Response(audio, {
        headers: {
            "content-Type": "audio/mpeg",
        }
    })


}

export default handler
