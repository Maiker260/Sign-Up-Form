const userPassword = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#user_confirm_password");
const submitBtn = document.querySelector("#submit_btn");
const wrongPasswordMsg = document.querySelector(".wrong_password");

function validatePassword() {

    if (userPassword.value != confirmPassword.value) {

        userPassword.classList.add("do_not_match");
        confirmPassword.classList.add("do_not_match");
        wrongPasswordMsg.hidden = false;
        submitBtn.disabled = true;
        submitBtn.style.opacity = (0.4);

    } else {

        userPassword.classList.remove("do_not_match");
        confirmPassword.classList.remove("do_not_match");
        wrongPasswordMsg.hidden = true;
        submitBtn.disabled = false;
        submitBtn.style.opacity = (1);

    }
}

