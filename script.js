let advicePara = document.querySelector("p");
let refreshButton = document.querySelector(".refresh");
let adviceApiURL = 'https://api.adviceslip.com/advice';
let adviceNum = document.querySelector("#advice-num");
let leftQoute = document.querySelector("#left-qoute");
let rightQoute = document.querySelector("#right-qoute");

async function generateAdvice() {
    try {
        let adviceResponse = await fetch(adviceApiURL);
        console.log(adviceResponse);
        let advice = await adviceResponse.json();
        advicePara.innerText = leftQoute.innerText + advice.slip.advice + rightQoute.innerText;
        adviceNum.innerText = advice.slip.id;
    }
    catch (e) {
        console.error("Encountered an Error: \n", e);
    }
}

generateAdvice();

refreshButton.addEventListener('click', generateAdvice);


