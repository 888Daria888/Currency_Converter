// let avaliableInput = document.querySelector()
// let desirableInput = document.querySelectorAll()
// let currencyAv = document.querySelectorAll(ВСЕ ЛИШКИ, НА ВСЕХ НАВЕСИТЬ СЛУШАТЕЛЯ)
// let currencyDes

// // isAveliableInput



// currencyAv.forEach(item => {
//    item.addEventListener('click', () =>{
//       //снимать со всех эл класс актив
//       currencyAv.forEach(item => {
//          item.classList.remove('chosen')
//       })
//    }) event.target.classList.add('chosen');
//    getCurrencyCourse(true)//флаг
// })
// // нужно будет сделать флаг каким импутом мы ппользуемся


// function getCurrencyCourse(isAveliableInput = true){
//    let rightCurrency = querySelector().innetText //USD
//    let leftCurrency = //RUB
//    let avaliableCourse
//    let discrablCourse
//     //запрос не делаем, а просто подставляем значение )Х
//    if(rightCurrency === leftCurrency){
//       avaliableCourse.innetText = `1 ${rightCurrency} = 1.00 ${leftCurrency}`
//       desirableInput.value = avaliableInput.value
//    } else {
//       fetch()
//    let rightCurrency = querySelector().innetText //USD
//    let leftCurrency = //RUB
//    var requestURL = `https://api.exchangerate.host/from ${rightCurrency} ${leftCurrency} `;
//    .then
//    let rateAmount = data.rates[leftCurrency]
//    }
// }

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

let haveList = document.querySelectorAll('.have-list')
console.log(haveList);
console.log(haveList[0]);

for (let i = 0; i < haveList.length; i++) {
   haveList[i].addEventListener("click", function () {
      console.log(haveList[i]);
      let haveListActiv = document.getElementsByClassName("have-list_activ");
      console.log(haveListActiv);
      
      haveListActiv[0].className= haveListActiv[0].className.replace(" have-list_activ", "");
      haveList[i].className += " have-list_activ";
// как лучше бордер радиус присвоить после активного тега 
   })
}




