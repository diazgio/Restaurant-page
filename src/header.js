const title = () => {
  const content = document.getElementById('content');
  const titleDiv = document.createElement('div');
  titleDiv.setAttribute('class','title-container');

  const nameTitle = document.createElement('h1');
  nameTitle.setAttribute('class', 'name-title');
  nameTitle.innerHTML = 'Delicious Restaurant';

  
  titleDiv.appendChild(nameTitle);
  return titleDiv;
}

export default title;