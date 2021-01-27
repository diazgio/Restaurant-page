const us = () => {

  const uscont = document.createElement('div');
  uscont.setAttribute('class', 'us-cont');

  const contentUs = document.createElement('p');
  contentUs.setAttribute('class','us-p');
  contentUs.innerHTML = 'Hello, welcome to our restaurant "Delicious", we are a Peruvian restaurant dedicated to creating and spreading the Peruvian seasoning in all its splendor, we are with our most loyal customers since 1980 and today we are in seven of the most important cities in Peru and in 4 cities worldwide. We hope you enjoy our services.'
  
  uscont.appendChild(contentUs);
  return uscont;
}

export default us;