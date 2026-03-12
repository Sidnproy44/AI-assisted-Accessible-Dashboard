export function loadChart(data){

const ctx = document.getElementById("salesChart")

new Chart(ctx,{

type:"bar",

data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{
label:"Sales",
data:data,
backgroundColor:"#3b82f6"
}]

},

options:{
responsive:true
}

})

}