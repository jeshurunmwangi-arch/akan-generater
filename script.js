const dateInput = document.getElementById("date");
const genderInput = document.getElementById("gender");
const generateNameButton = document.getElementById("generateNameButton");

function getDayOfWeek() {
  const value = dateInput.value;
  const dateParts = value.split("/");
  const DD = Number(dateParts[0]);
  const MM = Number(dateParts[1]);
  const YYYY = dateParts[2];
  const CC = Number(YYYY.substring(0, 1));
  const YY = Number(YYYY.substring(2));

  if(MM > 12 || MM < 1){
    return -1;
  }

  let d = (4 * CC - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;

  // d = (d + 7) % 7;

  console.log(d);
  console.log(DD, MM, CC, YY);

  return d.toFixed(0);
}

function getAkanName(dayOfWeek) {
  const gender = genderInput.value;

  const maleNames = [
    "KWasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  if (gender === "male") {
    return maleNames[dayOfWeek];
  } else if (gender === "female") {
    return femaleNames[dayOfWeek];
  } else {
    return "Invalid gender";
  }
}

generateNameButton.addEventListener("click", function () {
  const dayOfWeek = getDayOfWeek();

  if(dayOfWeek < 0){
     document.getElementById("result").innerHTML = "Invalid Date" ;
     return;
  }
  const akanName = getAkanName(dayOfWeek);
  document.getElementById("result").innerHTML = akanName ; 

});
