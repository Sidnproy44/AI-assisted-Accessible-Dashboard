export function startVoice(){

const recognition=new webkitSpeechRecognition()

recognition.onresult=function(event){

let command=event.results[0][0].transcript

if(command.includes("dark")){
document.body.classList.toggle("dark")
}

}

recognition.start()

}