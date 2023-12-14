// "use strict";


function confettiFunction() {

    const end = Date.now() + 2000;

    // go Buckeyes!
    const colors = ["#bb0000", "#ffffff"];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });

        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();



}










let suffelButton = document.querySelector(".suffle-button");

let leftDiv = document.querySelectorAll("#left-div>*");

let rightDiv = document.querySelectorAll("#right-div>*");

let number = 0


let secondSum = 0;
let firstSum = 0;
let finalScore = 100

let firstPersonScore = document.querySelector(".first-person-score")
let secondPersonScore = document.querySelector(".second-person-score")




// make not interact for user in initail
document.querySelector("#main").style.pointerEvents = "none"

let allInputs = document.querySelectorAll("form#form-to-play label input")
// fetching the name from form and filling to game for player name
document.querySelector("form#form-to-play").addEventListener("submit", function (e) {
    // var nameRegex = /^[a-zA-Z\-'. ]+$/;
    // Assuming this code is inside an event handler function, and the event parameter is 'e'
    allInputs.forEach(function (eachInput) {
        if (eachInput.value.trim().length < 5 || eachInput.value.trim().length > 30 || /\d/.test(eachInput.value.trim())) {
            e.preventDefault(); // Prevent form submission if conditions are not met
        } else {
            document.querySelectorAll(".first-player").forEach(function (each) {
                each.textContent = allInputs[0].value.trim();
            });

            document.querySelectorAll(".second-player").forEach(function (each) {
                each.textContent = allInputs[1].value.trim();
            });
        }
    });

    e.preventDefault()


    document.querySelector("form").style.display = "none"


    document.querySelector("#main").style.pointerEvents = "initial"







    suffelButton.addEventListener("click", function () {


        number++;

        let firstPersonScore = document.querySelector(".first-person-score")
        let secondPersonScore = document.querySelector(".second-person-score")

        const firstRandomNumber = Math.floor(Math.random() * 6 + 1);
        const secondRandomNumber = Math.floor(Math.random() * 6 + 1);


        leftDiv.forEach(function (e) {

            // console.log(e)
            let keyValue = Number(e.getAttribute("key"))

            if (keyValue === firstRandomNumber) {
                e.style.zIndex = number
            }

        })

        rightDiv.forEach(function (e) {

            // console.log(e)
            let keyValue = Number(e.getAttribute("key"))

            if (keyValue === secondRandomNumber) {
                e.style.zIndex = number
            }

        })
        firstSum += firstRandomNumber
        secondSum += secondRandomNumber



        firstPersonScore.textContent = firstSum
        secondPersonScore.textContent = secondSum

        if (firstSum >= finalScore) {
            document.querySelector("#got-points").textContent = firstSum
            document.querySelector("#winner-player").textContent = allInputs[0].value.trim();


            confettiFunction()
            firstSum = 0
            secondSum = 0
            // firstPersonScore.textContent = 0
            // secondPersonScore.textContent = 0
            document.querySelector("#winner-div").style.display = "flex"
        }
        else if (secondSum >= 100) {
            document.querySelector("#got-points").textContent = secondSum
            document.querySelector("#winner-player").textContent = allInputs[1].value.trim();

            confettiFunction()
            firstSum = 0
            secondSum = 0

            document.querySelector("#winner-div").style.display = "flex"
            // firstPersonScore.textContent = 0
            // secondPersonScore.textContent = 0
        }
        else if (firstSum == finalScore || secondSum == finalScore) {
            document.querySelector("#got-points").textContent = "Equal"
            confettiFunction()

            firstSum = 0
            secondSum = 0
            document.querySelector("#winner-div").style.display = "flex"

            // firstPersonScore.textContent = 0
            // secondPersonScore.textContent = 0
        }




    })

})




suffelButton.addEventListener("click", function () {


    number++;



    const firstRandomNumber = Math.floor(Math.random() * 6 + 1);
    const secondRandomNumber = Math.floor(Math.random() * 6 + 1);


    leftDiv.forEach(function (e) {

        // console.log(e)
        let keyValue = Number(e.getAttribute("key"))

        if (keyValue === firstRandomNumber) {
            e.style.zIndex = number
        }

    })

    rightDiv.forEach(function (e) {

        // console.log(e)
        let keyValue = Number(e.getAttribute("key"))

        if (keyValue === secondRandomNumber) {
            e.style.zIndex = number
        }

    })
    firstSum += firstRandomNumber
    secondSum += secondRandomNumber



    firstPersonScore.textContent = firstSum
    secondPersonScore.textContent = secondSum

    if (firstSum >= finalScore) {
        document.querySelector("#got-points").textContent = firstSum
        document.querySelector("#winner-player").textContent = "You"


        confettiFunction()
        firstSum = 0
        secondSum = 0
        // firstPersonScore.textContent = 0
        // secondPersonScore.textContent = 0
        document.querySelector("#winner-div").style.display = "flex"
    }
    else if (secondSum >= 100) {
        document.querySelector("#got-points").textContent = secondSum
        document.querySelector("#winner-player").textContent = "Computer"

        confettiFunction()
        firstSum = 0
        secondSum = 0

        document.querySelector("#winner-div").style.display = "flex"
        // firstPersonScore.textContent = 0
        // secondPersonScore.textContent = 0
    }
    else if (firstSum == finalScore || secondSum == finalScore) {
        document.querySelector("#got-points").textContent = "Equal"
        confettiFunction()

        firstSum = 0
        secondSum = 0
        document.querySelector("#winner-div").style.display = "flex"

        // firstPersonScore.textContent = 0
        // secondPersonScore.textContent = 0
    }




})







document.querySelector(".form-close-button").addEventListener("click", function (e) {
    document.querySelector("form").style.display = "none"
    document.querySelector("#main").style.pointerEvents = "initial"


});
document.querySelector(".winner-cancel-button").addEventListener("click", function (e) {
    document.querySelector("#winner-div").style.display = "none"
    firstPersonScore.textContent = 0
    secondPersonScore.textContent = 0



});













