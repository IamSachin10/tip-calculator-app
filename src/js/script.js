const bill = document.querySelector('.bill');
const five = document.querySelector('[data-id="5"]');
const price = document.querySelector('[data-id="price"]');
const fullTotal = document.querySelector('[data-id="total"]');
const reset = document.querySelector('[data-id="reset"]');

function input() {
  const inputVal = bill.value;
  const num = parseFloat(inputVal);
  if (isNaN(num)) {
    return;
  }
  return num;
}

function tip() {
  const inputVal = five.textContent;
  const change = inputVal.replace(/%/g, '');
  const changeToNumber = parseFloat(change);
  return changeToNumber;
}

function cal() {
  const per1 = input();
  const per2 = tip();
  if (!isNaN(per1) && !isNaN(per2)) {
    const total = (per1 * per2) / 100;
    const sum = per1 + total;
    price.innerHTML = total.toFixed(2);
    fullTotal.innerHTML = sum.toFixed(2);
  }
}

bill.addEventListener('change', cal);

five.addEventListener('click', cal);
