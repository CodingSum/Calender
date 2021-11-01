const date = new Date();

const renderCalender = () =>{
    
date.setDate(1);
console.log(date.getDay());
const monthDays = document.querySelector('.days');
const lastDay = new Date(date.getFullYear(),date.getMonth() +1,0).getDate();
const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();


const month = date.getMonth();
console.log(lastDay);

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),date.getMonth(),0).getDay();
console.log(lastDayIndex);
const nextDays = 7 - lastDayIndex +3;

const months = [
    "january",
    "February",
    "march",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "november",
    "December",
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector('.date p').innerHTML = new Date().toDateString();

let days = "";


// all the loops
for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    
}

for (let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
    days += `<div class="today">${i}</div>`;    

    }else{
    days += `<div>${i}</div>`;  
    }  
}


for (let y = 1; y <= nextDays; y++){
    days += `<div class="next-date">${y}</div>`;
    monthDays.innerHTML = days;   

}
}

// addEventListener
const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
 date.setMonth(date.getMonth() - 1);
 renderCalender();
});

const Next = document.querySelector('.next');

Next.addEventListener('click', () => {
 date.setMonth(date.getMonth() + 1);
 renderCalender();
});

renderCalender();