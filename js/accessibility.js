export function runAudit(){

let images = document.querySelectorAll("img")
let buttons = document.querySelectorAll("button")

let issues=[]

images.forEach(img=>{
if(!img.alt)
issues.push("Image missing alt text")
})

buttons.forEach(btn=>{
if(btn.innerText.trim()==="")
issues.push("Button missing label")
})

if(issues.length)
alert("Issues:\n"+issues.join("\n"))
else
alert("Accessibility check passed")

}