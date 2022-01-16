setInterval(setClock, 1000);

function setRotation(el, rot) {
  el.style.setProperty("--rotation", rot * 360);
}

function setClock() {
  const hourHand = document.querySelector("#hourHand");
  const minuteHand = document.querySelector("#minuteHand");
  const secondHand = document.querySelector("#secondHand");

  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondsRatio);
}

setClock();
