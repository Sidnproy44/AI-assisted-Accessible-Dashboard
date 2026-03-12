export function generateInsight(data){

let max=Math.max(...data)
let min=Math.min(...data)

let growth=((data[data.length-1]-data[0])/data[0]*100).toFixed(1)

let trend="stable"

if(data[data.length-1] > data[0]) trend="increasing"
if(data[data.length-1] < data[0]) trend="decreasing"

return `
Sales trend is ${trend}.
Highest sales reached ${max}.
Lowest sales were ${min}.
Overall growth is ${growth}%.
`

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