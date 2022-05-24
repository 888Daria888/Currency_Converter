let statusActivMenu = document.getElementsByClassName("menu_activ");
let haveInputCours = document.querySelector('.have_text')
let wantInputCours = document.querySelector('.want_text')
let haveInfo = document.querySelector('.have-info')
let wantInfo = document.querySelector('.want-info')
let haveValue = 'RUB'
let wantValue = 'USD'
let haveList = document.querySelectorAll('.have-list');
let wantList = document.querySelectorAll('.want-list');

let menu = document.querySelectorAll('.header-list')
for (let i = 0; i < menu.length; i++) {
   menu[i].addEventListener("click", function () {
      console.log(menu[i]);
      console.log(statusActivMenu);
      statusActivMenu[0].className = statusActivMenu[0].className.replace("menu_activ", "");
      menu[i].className += " menu_activ";
   });
}


fetch(
   `https://api.exchangerate.host/latest?base=${haveValue}&symbols=${wantValue}&places=4`
)
   .then((res) => res.json())
   .then((data) => {
      haveInputCours.value = 1;
      wantInputCours.value = (haveInputCours.value * data.rates[wantValue]).toFixed(4)
      haveInfo.innerHTML = `1 ${haveValue} = ${wantInputCours.value} ${wantValue}`
      wantInfo.innerHTML = `1 ${haveValue} = ${wantInputCours.value} ${wantValue}`
   })
   .catch((err) => alert('что-то пошло не так'))

let haveHandler = (e) => {
   fetch(`https://api.exchangerate.host/latest?base=${haveValue}&symbols=${wantValue}&places=4`)
      .then((res) => res.json())
      .then((data) => {
         wantInputCours.value = (e.target.value * data.rates[wantValue]).toFixed(4)
         haveInfo.innerHTML = `${haveInputCours.value} ${haveValue} = ${wantInputCours.value} ${wantValue}`
         wantInfo.innerHTML = `${wantInputCours.value} ${wantValue} = ${haveInputCours.value} ${haveValue}`
      })
      .catch((err) => alert('что-то пошло не так'))
}

let wantHandler = (e) => {
   fetch(`https://api.exchangerate.host/latest?base=${haveValue}&symbols=${wantValue}&places=4`)
      .then((res) => res.json())
      .then((data) => {
         haveInputCours.value = (e.target.value / data.rates[wantValue]).toFixed(4)
         haveInfo.innerHTML = `${haveInputCours.value} ${haveValue} = ${wantInputCours.value} ${wantValue}`
         wantInfo.innerHTML = `${wantInputCours.value} ${wantValue} = ${haveInputCours.value} ${haveValue}`
      })
      .catch((err) => alert('что-то пошло не так'))
}

wantInputCours.addEventListener('input', wantHandler)

haveInputCours.addEventListener('input', haveHandler)

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
      haveValue = item.value

      getCurrencyCourse()
   });
});


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
      wantValue = item.value
      getCurrencyCourse()
   });

});

function getCurrencyCourse() {
   if (haveValue === wantValue) {
      wantInputCours.value = haveInputCours.value
      haveInfo.innerHTML = `1 ${haveValue} = 1.00 ${wantValue}`
      wantInfo.innerHTML = `1 ${haveValue} = 1.00 ${wantValue}`
   }
   else {
      fetch(
         `https://api.exchangerate.host/latest?base=${haveValue}&symbols=${wantValue}&places=4`
      )
         .then((res) => res.json())
         .then((data) => {
            haveInputCours.removeEventListener('input', haveHandler);
            wantInputCours.removeEventListener('input', wantHandler);
            haveInputCours.addEventListener('input', (e) => {
               wantInputCours.value = (e.target.value * data.rates[wantValue]).toFixed(4)
               haveInfo.innerHTML = `${haveInputCours.value} ${haveValue} = ${wantInputCours.value} ${wantValue}`
               wantInfo.innerHTML = `${wantInputCours.value} ${wantValue} = ${haveInputCours.value} ${haveValue}`
            })
            wantInputCours.addEventListener('input', (e) => {
               haveInputCours.value = (e.target.value / data.rates[wantValue]).toFixed(4)
               haveInfo.innerHTML = `${haveInputCours.value} ${haveValue} = ${wantInputCours.value} ${wantValue}`
               wantInfo.innerHTML = `${wantInputCours.value} ${wantValue} = ${haveInputCours.value} ${haveValue}`
            })

            wantInputCours.value = (+(haveInputCours.value) * data.rates[wantValue]).toFixed(4)
            haveInfo.innerHTML = `${haveInputCours.value} ${haveValue} = ${wantInputCours.value} ${wantValue}`
            wantInfo.innerHTML = `${wantInputCours.value} ${wantValue} = ${haveInputCours.value} ${haveValue}`

         })
         .catch((err) => alert('что-то пошло не так'))
   }
}
