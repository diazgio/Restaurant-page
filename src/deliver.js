const delivery = () => {
  const content = document.getElementById('content');

  const deliv = document.createElement('div');
  deliv.setAttribute('class', 'deliv-cont');

  const delCont = document.createElement('p');
  delCont.setAttribute('class', 'delv-p');
  delCont.innerHTML = 'Place your orders by calling the number: 123456789 </br> Or write us to this email: delicious@fake.com';

  content.appendChild(deliv);
  deliv.appendChild(delCont);
}

export default delivery;