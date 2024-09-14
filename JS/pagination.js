//pagination
let load_more = document.getElementsByClassName("load_more");
let page = document.getElementsByClassName("pagination__item");
let currentValue = 1;
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
