var date = new Date();
const month = date.getMonth();
const day = date.getDay(); 
const dte = date.getDate();

let mth = [ 
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
] 

let dy = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

document.getElementById("mth").innerHTML = mth[ month ];
document.getElementById("dy").innerHTML = dy[ day ];
document.getElementById("dt").innerHTML = dte ;
setInterval(() => {
    var date = new Date();
    const hour = date.getHours() ;
    const min = date.getMinutes();
    const sec = date.getSeconds();
    document.getElementById("tm").innerHTML =`${hour}:${min}:${sec}`;     
}, 1000); 


document.getElementsByClassNames("task").addEventListener("onclick" , function tasksInHandFunction(){
    const taskListObject = document.getElementByClassName("task").innerHTML="";
});   



