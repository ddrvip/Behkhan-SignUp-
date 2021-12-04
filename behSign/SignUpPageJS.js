

// ? فانکشن نمایش دهنده رمز
function sHowpassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
// ? فانکشن چک کننده وارد شدن اطلاعات در اینپوت ها
function cOmpleteinput() {
    // console.log(document.getElementById('inputTest').value)
    var value = document.getElementById('inputTest').value;
    var value1 = document.getElementById('inputTest2').value;
    var value2 = document.getElementById('inputTest3').value;
    var value3 = document.getElementById('myInput').value;

    if (value != '' & value1 != '' & value2 != '' & value3 != '') {
        document.getElementById('btdis').disabled = false

    }

    else {
        document.getElementById('btdis').disabled = true

    }
}


// ? فانکشن چک کننده متن فارسی
function pErsianchecker() {
  const regex = new RegExp('^[\u0622\u0627\u0628\u067E\u062A-\u062C\u0686\u062D-\u0632\u0698\u0633-\u063A\u0641\u0642\u06A9\u06AF\u0644-\u0648\u06CC]+$');
  let input = document.getElementsByClassName('inputAlef')[0].value;

  let error = document.getElementsByClassName('error2')[0];
  // ? default
  error.style.display = 'none';

  console.log(regex.test(input));

  // ? susscess
  if (regex.test(input)) {
      document.getElementsByClassName('btn').disabled = false
      error.style.display = 'none';
  }

  // ? error
  else {
      document.getElementsByClassName('btn').disabled = true;
      error.style.display = 'block';
  }
}


// ? فانکشن چک کننده متن لاتین
function lAtinChecker() {
  const regex = new RegExp('[A-Za-z]');
  let input = document.getElementsByClassName('inputAZ')[0].value;
  console.log(input);

  let error = document.getElementsByClassName('error1')[0];
  // ? default
  error.style.display = 'none';

  // console.log(input.match(/^([A-Z]){16}$/i));
  console.log(regex.test(input));

  // ? susscess
  if (regex.test(input)) {
    // console.log('hi');
      document.getElementsByClassName('btn').disabled = false
      error.style.display = 'none';
  }

  // ? error
  else {
      document.getElementsByClassName('btn').disabled = true;
      error.style.display = 'block';
  }
}



// ? فانکشن چک کننده شماره موبایل
function nUmberchecker() {
  let input = document.getElementsByClassName('inputpl')[0].value;

  let error = document.getElementsByClassName('error')[0];
  // ? default
  error.style.display = 'none';

  console.log(!!input.match(/^([0-9]){11}$/));

  // ? susscess
  if (!!input.match(/^([0-9]){11}$/)) {
      document.getElementsByClassName('btn').disabled = false
      error.style.display = 'none';
  }

  // ? error
  else {
      document.getElementsByClassName('btn').disabled = true;
      error.style.display = 'block';
  }
}





