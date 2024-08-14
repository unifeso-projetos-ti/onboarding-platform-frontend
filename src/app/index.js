
document.getElementById('scrollToContact').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.contato').scrollIntoView({ behavior: 'smooth' });
});
