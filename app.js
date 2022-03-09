function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("advice_id").innerHTML = data.slip.id;
            document.getElementById("advice_text").innerHTML = data.slip.advice;
        });

}