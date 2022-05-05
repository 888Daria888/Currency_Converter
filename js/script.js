

let isAveliableInput = document.querySelector('.input-text')


let menu = document.querySelectorAll('.header-list')
for (let i = 0; i < menu.length; i++) {
   menu[i].addEventListener("click", function () {
      console.log(menu[i]);
      let statusActivMenu = document.getElementsByClassName("menu_activ");
      console.log(statusActivMenu);
      statusActivMenu[0].className = statusActivMenu[0].className.replace("menu_activ", "");
      menu[i].className += " menu_activ";
   });
}



let haveList = document.querySelectorAll('.have__content .content_list li');
haveList.forEach(item => {
   if (haveList[0] || haveList[3]) {
      haveList[0].style.borderRadius = '3px 0px 0px 3px';
      haveList[3].style.borderRadius = '0px 3px 3px 0px';
   }
   item.addEventListener('click', (event) => {
      haveList.forEach(item => {
         item.classList.remove('active');
      });
      event.target.classList.add('active');
      getCurrencyCourse()
   });
});

let wantList = document.querySelectorAll('.want__content .content_list li');
wantList.forEach(item => {
   if (wantList[0] || wantList[3]) {
      wantList[0].style.borderRadius = '3px 0px 0px 3px';
      wantList[3].style.borderRadius = '0px 3px 3px 0px';
   }
   item.addEventListener('click', (event) => {
      wantList.forEach(item => {
         item.classList.remove('active');
      });
      event.target.classList.add('active');
      getCurrencyCourse()
   });
});



function getCurrencyCourse() {
   let haveCurrency = document.querySelector('.have-currency')
   let wantCurrency = document.querySelector('.want-currency')
   let activeCurrency = document.querySelectorAll('.active')
   let x = activeCurrency[0].innerText
   let y = activeCurrency[1].innerText
   let haveInputCours = document.querySelector('.have_text')
   let wantInputCours = document.querySelector('.want_text')
   
   if (x === y) {
      wantInputCours.value = haveInputCours.value
      haveCurrency.innerHTML = `1 ${x} = 1.00 ${y}`
      wantCurrency.innerHTML = `1 ${x} = 1.00 ${y}`
   }
   else {
      fetch(
         `https://api.exchangerate.host/latest?base=${x}&symbols=${y}`
      )
         .then((res) => res.json())
         .then((data) => {
            let summCourseY = haveInputCours.value * data.rates[y]
            wantInputCours.value = summCourseY
            haveCurrency.innerHTML = `${haveInputCours.value} ${x} = ${wantInputCours.value} ${y}`
            wantCurrency.innerHTML = `${wantInputCours.value} ${y} = ${haveInputCours.value} ${x}`
         })
         .catch((err)=>alert('упс.что-то пошло не так'))
   }
}