const navbar = () => {
  
  const navbar = document.createElement('div');
  navbar.setAttribute('class', 'nav-container');

  const optionCardOne = document.createElement('div');
  optionCardOne.setAttribute('id','cardOne');
  optionCardOne.setAttribute('class','op-cont');

  const first = document.createElement('a');
  first.setAttribute('class', 'op-link');
  first.innerHTML = '<h2>Who are we?</h2>';

  const optionCardTwo = document.createElement('div');
  optionCardTwo.setAttribute('id','cardTwo');
  optionCardTwo.setAttribute('class','op-cont');

  const second = document.createElement('a');
  second.setAttribute('class', 'op-link');
  second.innerHTML = '<h2>menu</h2>';

  const optionCardThird = document.createElement('div');
  optionCardThird.setAttribute('id','cardThird');
  optionCardThird.setAttribute('class','op-cont');

  const third = document.createElement('a');
  third.setAttribute('class', 'op-link');
  third.innerHTML = '<h2>Delivery</h2>';

  const optionCardFour = document.createElement('div');
  optionCardFour.setAttribute('id','cardFour');
  optionCardFour.setAttribute('class','op-cont');

  const fourth = document.createElement('a');
  fourth.setAttribute('class', 'op-link');
  fourth.innerHTML = '<h2>Find us</h2>';

  const options = [optionCardOne, optionCardTwo, optionCardThird, optionCardFour];

  
  options.forEach((s) => {
    navbar.appendChild(s);
  });
  optionCardOne.appendChild(first);
  optionCardTwo.appendChild(second);
  optionCardThird.appendChild(third);
  optionCardFour.appendChild(fourth);

  return navbar;
}

export default navbar;