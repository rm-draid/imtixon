let body = document.body;

let slots = document.querySelector(".slots");
for (let i = 0; i <= 11; i++) {
  let slot = document.createElement("div");

  let imgBox = document.createElement("div");
  let iphoneImg = document.createElement("img");

  let icons = document.createElement("div");
  let like = document.createElement("img");
  let sravni = document.createElement("img");

  let slotName = document.createElement("h4");
  let slotPrice = document.createElement("h3");

  let slotCredit = document.createElement("div");
  let creditInfo = document.createElement("p");

  let slotBtns = document.createElement("div");
  let toKorzina = document.createElement("button");
  let korzinaImg = document.createElement("img");
  let toCredit = document.createElement("button");

  slot.classList.add("slot");
  imgBox.classList.add("img-box");
  icons.classList.add("icons");
  like.classList.add("icon");
  sravni.classList.add("icon");
  slotName.classList.add("slot-name");
  slotPrice.classList.add("slot-price");
  slotCredit.classList.add("slot-credit");
  creditInfo.classList.add("slot-credit-info");
  slotBtns.classList.add("slot-btns");
  toKorzina.classList.add("to-korzina");
  korzinaImg.classList.add("korzina-img");
  toCredit.classList.add("to-credit");

  slots.append(slot);
  slot.append(imgBox, icons, slotName, slotPrice, slotCredit, slotBtns);
  imgBox.append(iphoneImg);
  iphoneImg.src = "./img/iphone.jpg";
  iphoneImg.alt = "slot-img";
  icons.append(like, sravni);
  like.src = "./img/like.svg";
  sravni.src = "./img/korzina.svg";
  slotName.append("Apple iPhone 15 Pro ");
  slotPrice.append("14 940 000 сум");
  slotCredit.append(creditInfo);
  creditInfo.append("1 932 000 сум x 12 мес");
  slotBtns.append(toKorzina, toCredit);
  toKorzina.append(korzinaImg);
  korzinaImg.src = "./img/real-korzina.svg";
  toCredit.append("В рассрочку");
}

let searchWrap = document.querySelector(".search-wrap");
let searchBox = document.querySelector(".search-box");

let inp = document.querySelector("input");

inp.onfocus = () => {
  searchWrap.classList.add("search-wrap-active");
  searchBox.classList.add("search-box-active");
  body.style.overflowY = "hidden";
};

inp.onblur = () => {
  searchWrap.classList.remove("search-wrap-active");
  searchBox.classList.remove("search-box-active");
  body.style.overflowY = "visible";
};
