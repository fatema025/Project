function addToCart(btn) {
    if (btn.classList.contains('clicked')) return;
    btn.classList.add('clicked');
    setTimeout(() => {
      btn.classList.remove('clicked');
    }, 2000);
  }
  