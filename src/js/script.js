(function app() {
  const billAmount = document.querySelector('[data-id="bill-amount"]');
  const button = document.querySelectorAll('[data-id="btn"]');
  const numberOfPeople = document.querySelector('[data-id="people"]');
  const tipAmount = document.querySelector('[data-id="tip"]');
  const customTipAmount = document.querySelector('[data-id="custom"]');
  const totalAmount = document.querySelector('[data-id="total"]');
  const reset = document.querySelector('[data-id="reset"]');

  function bill() {
    const userInput = billAmount.value;
    const convertUserInput = parseFloat(userInput);
    return convertUserInput;
  }

  function split() {
    const userInput = numberOfPeople.value;
    const convertUserInput = parseFloat(userInput);
    if (convertUserInput > 0) {
      return convertUserInput;
    }

    return null;
  }

  // *TODO
  // change the design patter of the function in your free time and don't forget about it

  customTipAmount.addEventListener('input', () => {
    const customVal = customTipAmount.value;
    const convertToNumber = parseFloat(customVal);

    if (!Number.isNaN(convertToNumber)) {
      const val = bill();
      const customTip = (val * convertToNumber) / 100;
      const customTotal = val + customTip;
      tipAmount.textContent = `$${customTip.toFixed(2)}`;
      totalAmount.textContent = `$${customTotal.toFixed(2)}`;
    } else {
      throw new Error('Something went wrong.');
    }

    numberOfPeople.addEventListener('input', () => {
      const splitVal = split();
      if (!Number.isNaN(splitVal)) {
        const val = bill();
        const calTip = (((val * convertToNumber) / 100) / splitVal);
        const calTotal = ((val + calTip) / splitVal);
        tipAmount.textContent = `$${calTip.toFixed(2)}`;
        totalAmount.textContent = `$${calTotal.toFixed(2)}`;
      }
    });
  });

  button.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tipValue = btn.textContent;
      const convertToNumber = parseFloat(tipValue);
      if (!Number.isNaN(tipValue)) {
        const val1 = bill();
        const calTip = ((val1 * convertToNumber) / 100);
        const calTotal = val1 + calTip;
        tipAmount.textContent = `$${calTip.toFixed(2)}`;
        totalAmount.textContent = `$${calTotal.toFixed(2)}`;
      } else {
        throw new Error(tipValue);
      }

      numberOfPeople.addEventListener('input', () => {
        const splitVal = split();
        if (!Number.isNaN(splitVal)) {
          const val = bill();
          const calTip = (((val * convertToNumber) / 100) / splitVal);
          const calTotal = ((val + calTip) / splitVal);
          tipAmount.textContent = `$${calTip.toFixed(2)}`;
          totalAmount.textContent = `$${calTotal.toFixed(2)}`;
        }
      });
    });
  });

  // reset
  reset.addEventListener('click', () => {
    tipAmount.textContent = '$0';
    totalAmount.textContent = '$0';
  });
}());
