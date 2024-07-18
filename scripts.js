document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.small-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.classList.contains('small-image')) {
                image.classList.remove('small-image');
                image.classList.add('large-image');

            } else {
                image.classList.remove('large-image');
                image.classList.add('small-image');
            }
        });
    });
});