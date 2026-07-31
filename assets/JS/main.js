document.addEventListener("DOMContentLoaded", function () {
    let page = window.location.pathname.split("/").pop();

    let links = document.querySelectorAll(".nav-link");

    links.forEach(function (link) {
        if (link.getAttribute("href") == page) {
            link.classList.add("active", "custom-active");
        } else {
            link.classList.remove("active", "custom-active");
        }
    });
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
const Form = document.forms["subscribe-form"];

Form.addEventListener("submit", validateForm);

function validateForm(event) {

    event.preventDefault();

    const name = Form["Name"].value.trim();
    const email = Form["Email"].value.trim();

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    if (name === "") {
        Form["Name"].style.border = "1px solid red";
        isValid = false;
    }
    else if (!namePattern.test(name)) {
        Form["Name"].style.border = "1px solid red";
        isValid = false;
    }
    else {
        Form["Name"].style.border = "";
    }

    if (email === "") {
        Form["Email"].style.border = "1px solid red";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        Form["Email"].style.border = "1px solid red";
        isValid = false;
    }
    else {
        Form["Email"].style.border = "";
    }

    if (isValid) {

        Swal.fire({
            title: "Subscribed Successfully!",
            text: "Thank you for subscribing.",
            icon: "success",
            confirmButtonColor: "#3B5D50"
        });
        Form["Name"].style.border = "";
        Form["Email"].style.border = "";

        Form.reset();
    }

}