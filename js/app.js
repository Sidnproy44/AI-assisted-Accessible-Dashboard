import { loadChart } from "./charts.js"
import { generateInsight, askAI } from "./ai.js"
import { startVoice } from "./voice.js"
import { runAudit } from "./accessibility.js"
import { savePreference, getPreference } from "./storage.js"

let salesData=[120,190,300,250,400,380]

loadChart(salesData)

document.getElementById("aiInsight").innerText=
generateInsight(salesData)


document.getElementById("themeToggle").onclick=()=>{

document.body.classList.toggle("dark")

savePreference(
"theme",
document.body.classList.contains("dark")
)

}


let savedTheme=getPreference("theme")

if(savedTheme==="true"){

document.body.classList.add("dark")

}


document.getElementById("voiceBtn").onclick=()=>{

startVoice()

}


document.getElementById("scanBtn").onclick=()=>{

runAudit()

}


fetch("./components/chat.html")
.then(res=>res.text())
.then(html=>{

document.getElementById("chatContainer").innerHTML=html

document.getElementById("sendChat").onclick=()=>{

let input=document.getElementById("chatInput")

let response=askAI(input.value,salesData)

let box=document.getElementById("chatMessages")

box.innerHTML+=`<p><b>You:</b> ${input.value}</p>`
box.innerHTML+=`<p><b>AI:</b> ${response}</p>`

input.value=""

}

})