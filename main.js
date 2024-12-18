const header = document.querySelector('#dynamic-header');

header.addEventListener('mousemove', (e) => {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const red = Math.round((x / rect.width) * 255);
    const blue = Math.round((y / rect.height) * 255);

    header.classList.add('dynamic-color'); 
    header.style.backgroundColor = `rgb(${red}, 100, ${blue})`; 
});

header.addEventListener('mouseleave', () => {
    header.classList.remove('dynamic-color'); 
    header.style.backgroundColor = ''; 
});