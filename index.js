let releaseDate = new Date("2022-04-19 09:00:10 pm");

let dayH = document.querySelector("#days");
let dayH_bottom = document.querySelector("#days-bottom");
let hourH = document.querySelector("#hours");
let hourH_bottom = document.querySelector("#hours-bottom");
let minuteH = document.querySelector("#minutes");
let minuteH_bottom = document.querySelector("#minutes-bottom");
let secondH = document.querySelector("#seconds");
let secondH_bottom = document.querySelector("#seconds-bottom");


function updateTimer() {
  let today = new Date();
  let diffDate = releaseDate - today;
  let total_seconds_left = Math.floor(diffDate / 1000);

  let day_left = Math.floor(total_seconds_left / 60 / 60 / 24);
  total_seconds_left -= day_left * 24 * 60 * 60;

  let hours_left = Math.floor(total_seconds_left / 60 / 60);
  total_seconds_left -= hours_left * 60 * 60;

  // The largest round integer less than or equal to the result of time divided being by 60.  
  let minutes_left = Math.floor(total_seconds_left / 60);
  total_seconds_left -= minutes_left * 60;

  let seconds_left = total_seconds_left;
  
  dayH.innerHTML = preceedZero(day_left, 2);
  dayH_bottom.innerHTML = preceedZero(day_left, 2);

  hourH.innerHTML = preceedZero(hours_left, 2);
  hourH_bottom.innerHTML = preceedZero(hours_left, 2);

  minuteH.innerHTML = preceedZero(minutes_left, 2);
  minuteH_bottom.innerHTML = preceedZero(minutes_left, 2);

  secondH.innerHTML = preceedZero(seconds_left, 2);
  secondH_bottom.innerHTML = preceedZero(seconds_left, 2);

}
let x = setInterval(updateTimer, 200);


function preceedZero(number, upto) {
  let place = 10;
  const MAX = Math.pow(10, upto);
  let str = "";
  while (place < MAX) {
    str += (number < place) ? "0" : "";
    place *= 10;
  }
  return str + number;
}