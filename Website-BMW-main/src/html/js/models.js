const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const containerTop = container.getBoundingClientRect().top;
    const containerVisible = containerTop < windowHeight;

    if (containerVisible) {
        container.classList.add('show');
    }
});


const container_2 = document.querySelector('.container_2');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const container_2Top = container_2.getBoundingClientRect().top;
    const container_2Visible = container_2Top < windowHeight;

    if (container_2Visible) {
        container_2.classList.add('show');
    }
});

const container_3 = document.querySelector('.container_3');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const container_3Top = container_3.getBoundingClientRect().top;
    const container_3Visible = container_3Top < windowHeight;

    if (container_3Visible) {
        container_3.classList.add('show');
    }
});
