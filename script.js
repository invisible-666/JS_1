function saveInfo() {
    let input = document.querySelectorAll("input");
    let inputValues = [];
    for (let i = 0; i < input.length; i++) {
        inputValues.push(input[i].value);
     }
    console.log(inputValues);
}

let button = document.querySelector("#submitBtn");
button.addEventListener("click", saveInfo);