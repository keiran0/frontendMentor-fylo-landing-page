

document.getElementsByClassName("button-bottom")[0].addEventListener("click", function() {
    var input_validity = document.getElementsByClassName("email-input")[0].validity.valid;
    if (input_validity == false) {
        document.querySelector(".error").classList.remove("hidden");
    }
    if (input_validity == true) {
        document.querySelector(".error").classList.add("hidden");
    }
})

