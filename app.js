let index = 1;
showdiv(index);

function getDiv(n) {
  showdiv((index += n));
}

function showdiv(n) {
  let i;
  let a = document.getElementsByClassName('testimony');

  if (n > a.length) {
    index = 1;
  }
  if (n < 1) {
    index = a.length;
  }

  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }

  a[index - 1].style.display = 'block';
}
