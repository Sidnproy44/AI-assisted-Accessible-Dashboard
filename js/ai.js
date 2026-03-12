export function generateInsight(data){

let max=Math.max(...data)
let min=Math.min(...data)

let growth=((data.at(-1)-data[0])/data[0]*100).toFixed(1)

let trend="stable"

if(data.at(-1) > data[0]) trend="increasing"
if(data.at(-1) < data[0]) trend="decreasing"

return `
Trend: ${trend}
Highest: ${max}
Lowest: ${min}
Growth: ${growth}%
`

}

export function askAI(question,data){

question = question.toLowerCase()

if(question.includes("sales"))
return "Sales peak occurred in May."

if(question.includes("trend"))
return "The overall trend is increasing."

if(question.includes("growth"))
return "Sales growth from Jan to Jun is strong."

return "I cannot answer that from the dataset."

}