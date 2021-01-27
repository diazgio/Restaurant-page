import map from './img/map.png';

const find = () => {
  const findCont = document.createElement('div');
  findCont.setAttribute('class', 'find-cont');

  const location = document.createElement('p');
  location.setAttribute('class', 'locat');
  location.innerHTML = 'Find us in street Fake #235 Lima';

  const imgMap = document.createElement('img');
  imgMap.setAttribute('class', 'find-img');
  imgMap.setAttribute('src', map);
  imgMap.setAttribute('alt', 'map');

  findCont.appendChild(location);
  findCont.appendChild(imgMap);

  return findCont;
};

export default find;