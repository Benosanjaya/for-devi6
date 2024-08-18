const text =
  "Setelah kamu ninggalin aku.         aku ga pernah lagi baik baik aja tanpa kamu, hidup aku ga ada spesialnya sama sekali, engga ada lagi bahagia semenjak kamu pergi, aku bingung harus nyembuhin gimana lagi, entahlah aku gatau kenapa aku begini, entah karena aku yang terlalu cinta sama kamu atau rasa yang kamu kasih disini terlau hebat, aku gatau, yang jelas kamu masih jadi alesan buat aku ga berhenti cinta sama kamu walaupun kita udah seasing ini dan udah ga sama sama lagi .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();