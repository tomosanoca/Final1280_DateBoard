 // Function to get the current time in 12-hour format
function getCurrentTime12() {
  const now = new Date();
  const curhours = now.getHours() % 12 || 12;
  document.getElementById("hours").innerHTML = curhours;
  console.log(curhours);
  const curminutes = now.getMinutes();
  document.getElementById("minutes").innerHTML = curminutes;
  console.log(curminutes);
  const curseconds = now.getSeconds();
  document.getElementById("seconds").innerHTML = curseconds.toString().padStart(2, '0');
  console.log(curseconds);
  const curampm = now.getHours() >= 12 ? 'PM' : 'AM';
  document.getElementById("session").innerHTML = curampm;
  console.log(curampm);
  return `${curhours}:${curminutes}:${curseconds} ${curampm}`;
}


// Function to get the current time in 24-hour format
function getCurrentTime24() {
  const now = new Date();
  const curhours = now.getHours();
  document.getElementById("hours").innerHTML = curhours;
  console.log(curhours);
  const curminutes = now.getMinutes();
  document.getElementById("minutes").innerHTML = curminutes;
  console.log(curminutes);
  const curseconds = now.getSeconds();
  document.getElementById("seconds").innerHTML = curseconds.toString().padStart(2, '0');
  console.log(curseconds);
  document.getElementById("session").innerHTML = "";
  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDate() {
  const now = new Date();
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  const month = monthNames[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  document.getElementById("date").innerHTML = month + " " + date + " , " + year;
  console.log(month + " " + date + " ," + year);
  const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  document.getElementById("day").innerHTML = dayOfWeek;
  console.log(dayOfWeek);
  return `${dayOfWeek}, ${month} ${date}, ${year}`;
}

  // Display current time and update every second
function updateClockAndDate() {

  const hoursDisplay = document.getElementById('hours');
  const minutesDisplay = document.getElementById('minutes');
  const secondsDisplay = document.getElementById('seconds');
  //const timeDisplay = document.getElementById('timeDisplay');
  //const dateDisplay = document.getElementById('dateDisplay');
  const toggleButton = document.getElementById('toggle-btn');
  let is12HourFormat = true;

  function updateTimeAndDate() {
    const currentTime = is12HourFormat ? getCurrentTime12() : getCurrentTime24();
    const currentDate = getCurrentDate();
    /*if(is12HourFormat){
      getCurrentTime12();
    }else{
      getCurrentTime24();
    }
    */

    //hoursDisplay.textContent = `Current Time: ${curhours}`;
    //timeDisplay.textContent = `Current Time: ${currentTime}`;
    //dateDisplay.textContent = `Current Date: ${currentDate}`;
  }

  updateTimeAndDate();
  setInterval(updateTimeAndDate, 1000);

   // Toggle button click event
  toggleButton.addEventListener('click', function() {
    is12HourFormat = !is12HourFormat;
    updateTimeAndDate();
    if(is12HourFormat){
      document.getElementById('toggle-btn').innerHTML = "24-hr"
    }else{
      document.getElementById('toggle-btn').innerHTML = "12-hr"
    }

  });
}

updateClockAndDate();
 