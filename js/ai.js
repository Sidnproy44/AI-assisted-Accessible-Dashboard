function generateInsight(data){

let max=Math.max(...data)

let avg=data.reduce((a,b)=>a+b)/data.length

if(max>350){

return "Sales are rising quickly with strong peak demand."

}

if(avg>200){

return "Sales show steady growth across the months."

}

return "Sales performance is relatively low."

}


function askAI(question,data){

question=question.toLowerCase()

if(question.includes("sales")){

return "Sales peaked in May with highest performance."

}

if(question.includes("trend")){

return "Overall trend shows steady increase."

}

return "I cannot find that insight in the dataset."

}