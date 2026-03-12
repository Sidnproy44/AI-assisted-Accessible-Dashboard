import { loadChart } from "./charts.js"
import { generateInsight, askAI } from "./ai.js"
import { startVoice } from "./voice.js"
import { runAudit } from "./accessibility.js"
import { savePreference, getPreference } from "./storage.js"

document.addEventListener("DOMContentLoaded", async () => {

let res = await fetch("./data/metrics.json")
let data = await res.json()

let salesData = data.sales
let usersData = data.users

// Update cards
document.getElementById("salesValue").innerText =
salesData.reduce((a,b)=>a+b)

document.getElementById("usersValue").innerText =
usersData[usersData.length-1]

// Growth
let growth = ((salesData.at(-1)-salesData[0])/salesData[0]*100).toFixed(1)

document.getElementById("growthValue").innerText = growth+"%"

// Chart
loadChart(salesData)

// AI insight
document.getElementById("aiInsight").innerText =
generateInsight(salesData)

// Dark mode
document.getElementById("themeToggle").onclick = () => {

document.body.classList.toggle("dark")

savePreference(
"theme",
document.body.classList.contains("dark")
)

}

let savedTheme = getPreference("theme")

if(savedTheme==="true"){
document.body.classList.add("dark")
}

// Voice
document.getElementById("voiceBtn").onclick = startVoice

// Accessibility
document.getElementById("scanBtn").onclick = runAudit

// Sidebar buttons
document.querySelectorAll(".nav-btn").forEach(btn=>{
btn.onclick = () => alert(btn.innerText + " clicked")
})

// Chat UI
let html = await fetch("./components/chat.html")
.then(res=>res.text())

document.getElementById("chatContainer").innerHTML = html

document.getElementById("sendChat").onclick = () => {

let input = document.getElementById("chatInput")
let box = document.getElementById("chatMessages")

let response = askAI(input.value, salesData)

box.innerHTML += `<p><b>You:</b> ${input.value}</p>`
box.innerHTML += `<p><b>AI:</b> ${response}</p>`

input.value=""

}

})