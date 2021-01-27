import ceviche from './img/ceviche.jpg';
import causa from './img/causa.jpg';
import lomo from './img/lomo.jpg';

const menu = () => {
  const menuCont = document.createElement('div');
  menuCont.setAttribute('class', 'menu-cont');

  const menuCard1 = document.createElement('div');
  menuCard1.setAttribute('class', 'menu-card');

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'menu-img')
  img1.setAttribute('src', ceviche);
  img1.setAttribute('alt', 'ceviche1');

  const menuDesc1 = document.createElement('div');
  menuDesc1.setAttribute('class', 'desc-cont');

  const title1 = document.createElement('h3');
  title1.setAttribute('class', 'menu-title');
  title1.innerHTML = 'Ceviche de Pescado';

  const desc1 = document.createElement('p');
  desc1.setAttribute('class', 'menu-desc');
  desc1.innerHTML = 'Dish made with fresh Peruvian fish and lemon, flagship dish of Peruvian food';

  const price1 = document.createElement('p');
  price1.setAttribute('class', 'price');
  price1.innerHTML = '$20.00';

  const menuCard2 = document.createElement('div');
  menuCard2.setAttribute('class', 'menu-card');

  const img2 = document.createElement('img');
  img2.setAttribute('class', 'menu-img')
  img2.setAttribute('src', causa);
  img2.setAttribute('alt', 'causa');

  const menuDesc2 = document.createElement('div');
  menuDesc2.setAttribute('class', 'desc-cont');

  const title2 = document.createElement('h3');
  title2.setAttribute('class', 'menu-title');
  title2.innerHTML = 'Causa Limeña';

  const desc2 = document.createElement('p');
  desc2.setAttribute('class', 'menu-desc');
  desc2.innerHTML = 'Dish made of yellow potatoes, tuna and different varieties of special ingredients, excellent to accompany ceviche';

  const price2 = document.createElement('p');
  price2.setAttribute('class', 'price');
  price2.innerHTML = '$18.00';

  const menuCard3 = document.createElement('div');
  menuCard3.setAttribute('class', 'menu-card');

  const img3 = document.createElement('img');
  img3.setAttribute('class', 'menu-img')
  img3.setAttribute('src', lomo);
  img3.setAttribute('alt', 'lomo');

  const menuDesc3 = document.createElement('div');
  menuDesc3.setAttribute('class', 'desc-cont');

  const title3 = document.createElement('h3');
  title3.setAttribute('class', 'menu-title');
  title3.innerHTML = 'Lomo Saltado';

  const desc3 = document.createElement('p');
  desc3.setAttribute('class', 'menu-desc');
  desc3.innerHTML = 'Dish made with fine tenderloin in its own juice with fried potato and accompaniment';

  const price3 = document.createElement('p');
  price3.setAttribute('class', 'price');
  price3.innerHTML = '$30.00';

  menuCont.appendChild(menuCard1);
  menuCont.appendChild(menuCard2);
  menuCont.appendChild(menuCard3);

  menuCard1.appendChild(img1);
  menuCard1.appendChild(menuDesc1);
  menuDesc1.appendChild(title1);
  menuDesc1.appendChild(desc1);
  menuDesc1.appendChild(price1);

  menuCard2.appendChild(img2);
  menuCard2.appendChild(menuDesc2);
  menuDesc2.appendChild(title2);
  menuDesc2.appendChild(desc2);
  menuDesc2.appendChild(price2);

  menuCard3.appendChild(img3);
  menuCard3.appendChild(menuDesc3);
  menuDesc3.appendChild(title3);
  menuDesc3.appendChild(desc3);
  menuDesc3.appendChild(price3);

  return menuCont;
}

export default menu;