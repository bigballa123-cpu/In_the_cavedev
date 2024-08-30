<script>
// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.value === '' || email.value === '' || message.value === '') {
        alert('Please fill in all fields');
    } else {
        // Simulate a successful form submission
        alert('Message sent successfully!');
        name.value = '';
        email.value = '';
        message.value = '';
    }
});

// Image Hover Effect
document.querySelectorAll('.about-images img').forEach(image => {
    image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Video Item Hover Effect
document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.3)';
    });
    item.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
    });
});
</script>
