// открывает каталог вещей слева
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("open");
  });
});

// открывает временную корзину справа
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("navigation-basket").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("open-basket");
  });
});

// закрывает корзину
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("basket-exit").addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("open-basket");
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".navbar").classList.remove("open");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".navbar").classList.remove("open-basket");
  }
});

document.getElementById("menu").addEventListener("click", function (event) {
  event._isClickWithInMenu = true;
});

document.getElementById("burger").addEventListener("click", function (event) {
  event._isClickWithInMenu = true;
});

document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".navbar").classList.remove("open");
});

// добавляет вещь в лист

// load more

//pagination
let load_more = document.getElementsByClassName("load_more");
let page = document.getElementsByClassName("pagination__item");
let currentValue = 2;
function activeLink() {
  for (p of page) {
    p.classList.remove("pagination__item_active");
    event.target.classList.add("pagination__item_active");
    currentValue = event.target.value;
  }
}
function activeLink2() {
  for (l of load_more) {
    l.classList.remove("pagination__item_active");
    event.target.classList.add("pagination__item_active");
    currentValue = event.target.value;
  }
}
function backBtn() {
  if (currentValue > 2) {
    for (p of page) {
      p.classList.remove("pagination__item_active");
    }
    currentValue = currentValue - 1;
    page[currentValue - 1].classList.add("pagination__item_active");
  }
}
function nextBtn() {
  if (currentValue < 6) {
    for (p of page) {
      p.classList.remove("pagination__item_active");
    }
    currentValue++;
    page[currentValue - 1].classList.add("pagination__item_active");
  }
}

function nextBtn2() {
  if (currentValue < 6) {
    for (l of load_more) {
      l.classList.remove("pagination__item_active");
    }
    currentValue++;
    load_more[currentValue - 1].classList.add("pagination__item_active");
  }
}
