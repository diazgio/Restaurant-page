import us from './us';
import deliver from './deliver';
import navbar from './navbar';

const tabContent = () => {
  const content = document.getElementById('content');

  const context = document.createElement('div');
  context.setAttribute('class', 'big-cont');

  content.appendChild(context);
  
  context.appendChild(us());
  const tabBtn1 = document.querySelector('#cardOne');
  // const tabBtn2 = document.querySelector('#cardTwo');
  const tabBtn3 = document.querySelector('#cardThird');
  // const tabBtn4 = document.querySelector('#cardFour');

  // tabBtn1.addEventListener('click', () => {

  // });

  // tabBtn2.addEventListener('click', () => {

  // });

  // tabBtn3.addEventListener('click', () => {

  // });

  // tabBtn4.addEventListener('click', () => {

  // });


}

export default tabContent;