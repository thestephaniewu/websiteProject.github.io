
const modal = document.getElementById('myModal');

// Get the modal image and text elements
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalDescription');

const triggerImages = document.querySelectorAll('.trigger-image');

const closeBtn = document.querySelector('.close');

triggerImages.forEach(image => {
    image.onclick = function() {
        modal.style.display = 'block';
        modalImage.src = this.getAttribute('data-modal-image'); 
        modalText.textContent = this.alt; 
    };
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}