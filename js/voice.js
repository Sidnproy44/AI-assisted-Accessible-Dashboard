export function startVoice(){

const recognition=new webkitSpeechRecognition()

recognition.continuous=true

recognition.onresult=function(event){

let command=
event.results[event.results.length-1][0].transcript

command=command.toLowerCase()

if(command.includes("dark mode")){

document.body.classList.toggle("dark")

}

if(command.includes("scan accessibility")){

alert("Accessibility scan triggered")

}

}

recognition.start()

}