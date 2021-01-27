const delivery = () => {

  const deliv = document.createElement('div');
  deliv.setAttribute('class', 'deliv-cont');

  const delCont = document.createElement('p');
  delCont.setAttribute('class', 'delv-p');
  delCont.innerHTML = 'Place your orders by calling the number: 123456789 Or write us to this email: delicious@fake.com';

  deliv.appendChild(delCont);
  return deliv;
}

export default delivery;