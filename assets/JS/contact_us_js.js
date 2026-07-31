
const myForm = document.forms["send-message-form"];
myForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const fname = myForm["First_name"].value.trim();
  const lname = myForm["Last_name"].value.trim();
  const phone = myForm["Phone_number"].value.trim();
  const email = myForm["Email"].value.trim();
  const message = myForm["Message"].value.trim();

  const namePattern = /^[A-Za-z]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\+1 \d{3} \d{4} \d{4}$/;

  const fname_error = document.getElementById("fnameError");
  const lname_error = document.getElementById("lnameError");
  const phone_error = document.getElementById("phoneError");
  const email_error = document.getElementById("emailError");
  const message_error = document.getElementById("messageError");

  fname_error.style.visibility = "hidden";
  lname_error.style.visibility = "hidden";
  phone_error.style.visibility = "hidden";
  email_error.style.visibility = "hidden";
  message_error.style.visibility = "hidden";

  let isValid = true;

  if (fname === "") {
    fname_error.style.visibility = "visible";
    fname_error.innerHTML = "First name can not be empty";
    fname_error.style.color = "red";
    myForm["First_name"].style.border = "1px solid red";
    isValid = false;
  } else if (!namePattern.test(fname)) {
    fname_error.style.visibility = "visible";
    fname_error.innerHTML = "First name can not contain numbers";
    fname_error.style.color = "red";
    myForm["First_name"].style.border = "1px solid red";

    isValid = false;
  }


  if (lname === "") {
    lname_error.style.visibility = "visible";
    lname_error.innerHTML = "Last name can not be empty";
    lname_error.style.color = "red";
    myForm["Last_name"].style.border = "1px solid red";

    isValid = false;
  } else if (!namePattern.test(lname)) {
    lname_error.style.visibility = "visible";
    lname_error.innerHTML = "Last name can not contain numbers";
    lname_error.style.color = "red";
    myForm["Last_name"].style.border = "1px solid red";

    isValid = false;
  }





  if (phone === "") {
    phone_error.style.visibility = "visible";
    phone_error.innerHTML = "Phone number can not be empty";
    phone_error.style.color = "red";
    myForm["Phone_number"].style.border = "1px solid red";

    isValid = false;
  } else if (!phonePattern.test(phone)) {
    phone_error.style.visibility = "visible";
    phone_error.innerHTML = "Phone number must be as the example";
    phone_error.style.color = "red";
    myForm["Phone_number"].style.border = "1px solid red"

    isValid = false;
  }



  if (email === "") {
    email_error.style.visibility = "visible";
    email_error.innerHTML = "Email address can not be empty";
    email_error.style.color = "red";
    myForm["Email"].style.border = "1px solid red";

    isValid = false;
  } else if (!emailPattern.test(email)) {
    email_error.style.visibility = "visible";
    email_error.innerHTML = "Email address must be as the example";
    email_error.style.color = "red";
    myForm["Email"].style.border = "1px solid red"

    isValid = false;
  }




  if (message === "") {
    message_error.style.visibility = "visible";
    message_error.innerHTML = "Message can not be empty";
    message_error.style.color = "red";
    myForm["Message"].style.border = "1px solid red"

    isValid = false;
  }

  if (isValid) {
   Swal.fire({
  title: "Form submitted successfully!",
  icon: "success",
  draggable: true
});

    myForm["First_name"].style.border = "";
    myForm["Last_name"].style.border = "";
    myForm["Phone_number"].style.border = "";
    myForm["Email"].style.border = "";
    myForm["Message"].style.border = "";
    
    myForm.reset();
  }
}
