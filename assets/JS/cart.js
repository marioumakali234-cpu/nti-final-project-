function applyCoupon() { 
      let coupon = document.getElementById("couponInput").value.trim(); 
      let message = document.getElementById("couponMessage"); 
      if (coupon === "") { 
        message.textContent = "Please enter a coupon code."; 
        message.className = "text-danger mt-2"; 
      } 
      else if (coupon === "SAVE10") { 
        message.textContent = "Coupon applied successfully!"; 
        message.className = "text-success mt-2"; 
        } 
        else { 
          message.textContent = "Invalid coupon code."; 
          message.className = "text-danger mt-2"; 
     } 
} 


let quantities = document.querySelectorAll(".quantity");

    quantities.forEach(function(quantity) {

        let decreaseBtn = quantity.querySelector(".decrease");
        let increaseBtn = quantity.querySelector(".increase");
        let input = quantity.querySelector(".quantity-input");

        increaseBtn.addEventListener("click", function() {
            let currentValue = Number(input.value);
            input.value = currentValue + 1;
        });

        decreaseBtn.addEventListener("click", function() {
            let currentValue = Number(input.value);

            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });

    });

