const handMinutes = document.querySelector('.hand-minutes');
const handHour = document.querySelector('.hand-hour');
const handSeconds = document.querySelector('.hand-seconds');

let degreesMinutes;
let degreesHour;
let degreesSeconds;

const clock = () => {
 const time = new Date();
 // console.log(time.toLocaleString());
 // console.log(time.toLocaleDateString());
 const seconds = time.getSeconds(); 
 const minutes = time.getMinutes(); 
 const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();

//  document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
 
 degreesMinutes = minutes*6;
 degreesHour = hours*30;
 degreesSeconds = seconds*6;

 handMinutes.style.transform = `rotate(${degreesMinutes}deg)`;
 handHour.style.transform = `rotate(${degreesHour}deg)`;
 handSeconds.style.transform = `rotate(${degreesSeconds}deg)`;

}

setInterval(clock, 1000);

