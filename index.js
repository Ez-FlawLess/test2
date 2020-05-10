function checkAll() {
  var allow = [true, true, true, true];
  var count = 0;
  for (var i = 0; i < 4; i++) {
    normal(i);
  }
  for (var i = 0; i < 4; i++) {
    if (i == 2) {
      allow[i] = checkMail();
    } else {
      allow[i] = check(i);
    }
  }
  for (var i = 0; i < 4; i++) {
    if (allow[i] === true) {
      count++;
    }
  }
  if (count === 4) {
    location.href = "page.html";
  }
  count = 0;
}

document.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.key === "Enter") {
    var allow = [true, true, true, true];
    var count = 0;
    for (var i = 0; i < 4; i++) {
      normal(i);
    }
    for (var i = 0; i < 4; i++) {
      if (i == 2) {
        allow[i] = checkMail();
      } else {
        allow[i] = check(i);
      }
    }
    for (var i = 0; i < 4; i++) {
      if (allow[i] === true) {
        count++;
      }
    }
    if (count === 4) {
      location.href = "page.html";
    }
    count = 0;
  }
});

function check(n) {
  var input = document.querySelectorAll("input")[n];
  console.log(input.value);
  if (input.value === "") {
    document.querySelector(".i-" + (n + 1)).classList.remove("hide");
    document.querySelector(".e-" + (n + 1)).classList.remove("hide");
    input.classList.add("wrong");
    input.placeholder = "";
    return false;
  } else {
    return true;
  }
}

function checkMail() {
  var mail = document.querySelectorAll("input")[2];
  console.log(mail.value);
  console.log(mail.value.includes("@"));
  if (mail.value.includes("@") === false) {
    document.querySelector(".i-3").classList.remove("hide");
    document.querySelector(".e-3").classList.remove("hide");
    mail.classList.add("wrong");
    mail.placeholder = "email@example.com";
    mail.classList.add("email");
    return false;
  } else {
    return true;
  }
}

function normal(n) {
  var input = document.querySelectorAll("input")[n];
  document.querySelector(".i-" + (n + 1)).classList.add("hide");
  document.querySelector(".e-" + (n + 1)).classList.add("hide");
  if (input.classList.value === "wrong") {
    input.classList.remove("wrong");
  }
  if (n === 2) {
    if (input.placeholder === "email@example.com") {

    }
    if (input.classList.value === "email") {
      input.classList.remove("email");
    }
    if (input.classList.value.includes("wrong") === true) {
      input.classList.remove("wrong");
    }
  }


}
