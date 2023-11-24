//**const peopleList = document.querySelectorAll('.people-list li');**//

/*peopleList.forEach((person) => {
  person.addEventListener('mouseover', () => {
    const info = person.querySelector('.info');
    const name = person.querySelector('.name');
    const hoverText = 'Crafting Dreams Igniting Possibilities';

    if (info) {
      info.style.bottom = '0';
      info.style.left = '0';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      info.innerHTML = hoverText;
    }

    if (name) {
      name.style.fontWeight = 'bold';
      name.style.fontSize = '18px';
      name.style.lineHeight = '24px';
      name.style.marginBottom = '6px';
    }
  });

  person.addEventListener('mouseout', () => {
    const info = person.querySelector('.info');
    const name = person.querySelector('.name');

    if (info) {
      info.style.bottom = '-50px';
      info.style.left = '0';
      info.style.width = '100%';
      info.style.textAlign = 'center';
      info.innerHTML = '';
    }

    if (name) {
      name.style.fontWeight = '';
      name.style.fontSize = '14px';
      name.style.lineHeight = '24px';
      name.style.marginBottom = '0';
    }
  });
});*/
const peopleList = document.querySelectorAll('.people-list li');

peopleList.forEach((person) => {
  person.addEventListener('mouseenter', () => {
    const info = person.querySelector('.info');
    const name = person.querySelector('.name');

    if (info) {
      info.classList.add('hovered');
      info.innerHTML = 'Crafting Dreams Igniting Possibilities';
    }

    if (name) {
      name.classList.add('hovered');
    }
  });

  person.addEventListener('mouseleave', () => {
    const info = person.querySelector('.info');
    const name = person.querySelector('.name');

    if (info) {
      info.classList.remove('hovered');
      info.innerHTML = '';
    }

    if (name) {
      name.classList.remove('hovered');
    }
  });
});
