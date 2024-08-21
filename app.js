const pass_box = document.querySelector("#password");
const submit_icon = document.querySelector(".pass-box .icon");
const msg_strength = document.querySelector(".msg");
const strength = document.querySelector(".strength");

// =========================================================

// function for display message
const display_msg = () => {
  if (pass_box.value.length > 0) {
    msg_strength.style.display = "block";
  } else {
    msg_strength.style.display = "none";
  }
};

pass_box.addEventListener("input", display_msg);

// =========================================================
// strength function
// let small_case = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const check_strength = () => {
  if (pass_box.value.length < 5) {
    strength.innerText = "weak";
    pass_box.style.borderColor = "red";
    msg_strength.style.color = "red";
  } else if (pass_box.value.length >= 6 && pass_box.value.length < 12) {
    strength.innerText = "medium";
    pass_box.style.borderColor = "yellow";
    msg_strength.style.color = "yellow";
  } else if (pass_box.value.length >= 12) {
    strength.innerText = "strong";
    pass_box.style.borderColor = "green";
    msg_strength.style.color = "green";
  }
};

pass_box.addEventListener("input", check_strength);
