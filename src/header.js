const title = () => {
  const content = document.getElementById('content');
  const titleDiv = document.createElement('div');
  titleDiv.setAttribute('class','title-container');

  const nameTitle = document.createElement('h1');
  nameTitle.setAttribute('class', 'name-title');
  nameTitle.innerHTML = 'Delicious Restaurant';

  content.appendChild(titleDiv);
  titleDiv.appendChild(nameTitle);
}

export default title;