import _ from 'lodash';
import title from './header';
import navbar from './navbar';
import us from './us';
import menu from './menu';
import deliver from './deliver';
import find from './find';
import './style.css';


const content = document.getElementById('content');

content.appendChild(title());
content.appendChild(navbar());


const context = document.createElement('div');
context.setAttribute('class', 'big-cont');

content.appendChild(context);
context.appendChild(us());
const tabBtn1 = document.querySelector('#cardOne');
const tabBtn2 = document.querySelector('#cardTwo');
const tabBtn3 = document.querySelector('#cardThird');
const tabBtn4 = document.querySelector('#cardFour');

const activeTab = (value) => {
  context.innerHTML = '';
  if (value === 'us') {
    context.appendChild(us());
  } else if (value === 'menu') {
    context.appendChild(menu());
  } else if (value === 'delivery') {
    context.appendChild(deliver());
  } else if (value === 'find') {
    context.appendChild(find());
  }
};

tabBtn1.addEventListener('click', () => {
  activeTab('us');
});

tabBtn2.addEventListener('click', () => {
  activeTab('menu');
});

tabBtn3.addEventListener('click', () => {
  activeTab('delivery');
});

tabBtn4.addEventListener('click', () => {
  activeTab('find');
});