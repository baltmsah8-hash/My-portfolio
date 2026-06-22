// design of ul li in active

let lis = document.querySelectorAll('ul li');

lis.forEach(li => {
  li.onclick = e => {
    if (e.target.tagName === 'A') {
      document.querySelector('ul li .active')?.classList.remove('active');
      e.target.classList.add('active');
     };
  };
});

// button of up page

let btnUp = document.querySelector('.up');

window.onscroll = () => {
  if (window.scrollY >= 200) {
    btnUp.classList.add('show');
  } else {
    btnUp.classList.remove('show');
  };
};

btnUp.onclick = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};
