

let mediaRecorder: MediaRecorder | null = null;



let audioChunks: Blob[] = [];

export async function startRecording(){

    const stream = await navigator.mediaDevices.getUserMedia({
        audio: true
    });

    mediaRecorder = new MediaRecorder(stream);

    audioChunks=[];
    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };

    mediaRecorder.start();
    console.log("Recording stareted");
}

export function stopRecording(): Promise<Blob> {
    return new Promise((resolve) => {

        if(!mediaRecorder){
            throw new Error("Recorder has not been started.");
        }

        mediaRecorder.onstop = () => {

            const audioblob = new Blob(audioChunks, {
                type: "audio/webm",
            });

            console.log(audioblob);
            console.log(audioblob.size);
            console.log(audioblob.type);
            console.log("Recorder Finished.");
            resolve(audioblob);
        };
        mediaRecorder.stop();
    });
}

