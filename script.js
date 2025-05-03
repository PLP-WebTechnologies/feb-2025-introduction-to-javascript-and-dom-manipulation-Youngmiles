document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('select-demo-btn').addEventListener('click', () => {
    const para = document.querySelector('#select-demo p');
    para.style.color = 'green';
    para.style.fontWeight = 'bold';
    para.textContent = '✅ Paragraph selected and updated!';
});

document.getElementById('content-demo-btn').addEventListener('click', () => {
    const container = document.getElementById('content-demo');
    container.innerHTML = '<p>🎉 Content has been changed!</p>';
});

const eventBox = document.getElementById('event-demo');

eventBox.addEventListener('click', () => {
    eventBox.style.backgroundColor = '#caffbf';
    eventBox.querySelector('p').textContent = '👆 Clicked!';
});

eventBox.addEventListener('mouseover', () => {
    eventBox.style.backgroundColor = '#ffd6a5';
    eventBox.querySelector('p').textContent = '🐭 Hovered!';
});

eventBox.addEventListener('mouseleave', () => {
    eventBox.style.backgroundColor = '';
    eventBox.querySelector('p').textContent = 'Hover or click me!';
});

const elementContainer = document.getElementById('element-demo');

document.getElementById('add-element-btn').addEventListener('click', () => {
    const newEl = document.createElement('p');
    newEl.textContent = '🌱 New element added!';
    newEl.classList.add('fadeIn');
    elementContainer.appendChild(newEl);
});

document.getElementById('remove-element-btn').addEventListener('click', () => {
    const children = elementContainer.querySelectorAll('p');
    if (children.length > 0) {
        children[children.length - 1].remove();
    }
});

document.getElementById('style-demo-btn').addEventListener('click', () => {
    const target = document.querySelector('#style-demo p');
    target.style.color = '#ff006e';
    target.style.fontSize = '20px';
    target.style.fontWeight = 'bold';
    target.textContent = '🎨 Style updated!';
});
