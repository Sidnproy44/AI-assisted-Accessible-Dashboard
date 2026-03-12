export function runAudit(){

let images=document.querySelectorAll("img")

let issues=[]

images.forEach(img=>{

if(!img.alt){

issues.push("Image missing alt text")

}

})

if(issues.length>0){

alert("Accessibility issues found")

}else{

alert("Accessibility check passed")

}

}