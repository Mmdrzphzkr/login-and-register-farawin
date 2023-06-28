// فانکشن برای تعریف یک تابع است
// این تابع با استفاده از ورودی کاربر و دریافت آن اول آن را چک میکند که دارای اعداد بین صفر تا 9 و طول 11 رقم باشد
function validateNumber() {
  var tell = logTel.value;

  let regex = /^[0-9]{11}$/;

  // اینجا با استفاده از یک شرط درست بودن یا غلط بودن ورودی کاربر را با قوانین موجود میسنجیم و پیغامی را نشان میدهیم
  // شرط اول برای چک کردن خالی بودن فیلد است که اگر خالی بود لیبل فیلد ها تغییر نکنند و متن قبلی خود را نگه دارند
  if (tell == "") {
    document.getElementById("telLab").innerHTML = "Telephone Number:";
  } else if (regex.test(tell)) {
    document.getElementById("telLab").innerHTML = "Correct Phone Number Type";
  } else {
    alert(
      "Please enter the correct phone number type with exactly 11 characters"
    );
  }
}

// این تابع دقیقا مانند تابع بالا رمز عبور دریافتی را چک کرده و پیغامی را مبنی بر درست یا غلط بودن ورودی نسبت به قوانین موجود نشان میدهد

function validatePassword() {
  var pass = logPass.value;

  let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  // شرط اول برای چک کردن خالی بودن فیلد است که اگر خالی بود لیبل فیلد ها تغییر نکنند و متن قبلی خود را نگه دارند

  if (pass == "") {
    document.getElementById("passLab").innerHTML = "Password :";
  } else if (regex.test(pass)) {
    document.getElementById("passLab").innerHTML = "Correct Password Type";
  } else {
    alert(
      "Not correct password type Please Use a-z , A-Z , digits and symbols with at least 8 up to 20 characters"
    );
  }
}

// این تابع برای بازبینی و سنجش همخوانی رمز عبور با تکرار رمز عبور است که با گرفتن دو مقدار فیلد های مربوطه آن هارا مورد سنجش قرار دادم
// یک حالت هم برای خالی بودن فیلد رمز عبور در نظر گرفتم تا پیغامی دهد که کاربر متوجه شود تکرار رمز عبورش به دلیل خالی بودن فیلد رمز عبور درست انجام نشده است
// شرط اول برای چک کردن خالی بودن فیلد است که اگر خالی بود لیبل فیلد ها تغییر نکنند و متن قبلی خود را نگه دارند

function confirmPassword() {
  var confirmedPassword = logPassConf.value;
  var pass = logPass.value;
  if (confirmedPassword == "") {
    document.getElementById("confPassLab").innerHTML = "Confirm Password :";
  } else if (confirmedPassword == "" || pass == "") {
    document.getElementById("confPassLab").innerHTML =
      "There is no Password to match";
  } else if (confirmedPassword == pass) {
    document.getElementById("confPassLab").innerHTML = "Matched Passwords";
  } else {
    alert("Passwords Dont Matched Please confirm your password again...!");
  }
}

function nameConf() {
  var yourName = nameReg.value;
  let regex = /^[a-zA-Z_ ]*$/;
  if (yourName == "") {
    document.getElementById("nameLabel").innerHTML = "Your Name :";
  } else if (regex.test(yourName)) {
    document.getElementById("nameLabel").innerHTML = "Correct Name Type :";
  } else {
    alert("Your name must have just a-z and A-Z characters");
  }
}
// در اینجا با رویداد آن کلیک برای دکمه مشخص کردم که در صورت درست نبودن شرط دکمه غیر فعال باشد 
//پس از سنجش صحت درستی مقادیر ورودی دکمه امکان روشن شدن دارد
regBtn.onclick = function (e) {
  let regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
  let regex = /^[0-9]{11}$/;
  if (regex.test(logTel.value) || regex2.test(logPass.value)) {
    farawin.testRegister(
      (username = document.getElementById("logTel")),
      (password = document.getElementById("logPass")),
      (name = document.getElementById("nameReg")),
      (response) => {
        //response is object like {code: string, message: string}
        //if code is '200' mean success
        //else mean error!
        //Goodluck:)

        const success = response.code == "200";

        if (success) console.log("result from api -> ", response);
        else console.error("error from api -> ", response);

        //you response to get message
        //like
        alert(response.message);

        //redirect if you want
        // if(success)
        //   window.location.assign('url...')
      }
    );
    return true;
  } else {
    e.preventDefault();
  }
};
