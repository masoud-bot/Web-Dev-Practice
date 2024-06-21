const monthName = document.getElementById('month-name');

const dayName = document.getElementById('day-name');
const dayNumber = document.getElementById('day-number');
const year = document.getElementById('year');

const date = new Date();

const  month = date.getMonth();

monthName.innerHTML = date.toLocaleString('english', {month: 'long'})

dayName.innerHTML = date.toLocaleString('english', {weekday: 'long'})

dayNumber.innerHTML = date.getDate();

year.innerHTML = date.getFullYear();