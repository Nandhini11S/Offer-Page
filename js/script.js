const offerRadios = document.querySelectorAll('input[name="offer"]');
const totalPrice = document.getElementById('total-price');
const productOptions = document.querySelectorAll('.product-options');

// Update total price and show/hide product options
offerRadios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    // Update Total Price
    if (index === 0) totalPrice.textContent = "$10.00 USD";
    else if (index === 1) totalPrice.textContent = "$18.00 USD";
    else if (index === 2) totalPrice.textContent = "$21.00 USD";

    // Toggle dropdowns for first and third only
    productOptions.forEach((options, idx) => {
      if (idx === 1) return; // Always visible for second box
      if (idx === index) {
        options.classList.remove('hidden');
      } else {
        options.classList.add('hidden');
      }
    });
  });
});

// Initialize: Show dropdowns for first and third if selected
productOptions.forEach((options, idx) => {
  if (idx === 1) return; // Always visible for second box
  if (offerRadios[idx].checked) {
    options.classList.remove('hidden');
  } else {
    options.classList.add('hidden');
  }
});
