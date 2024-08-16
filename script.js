document.querySelector('.toggle').addEventListener('click', function() {
    const menu = document.querySelector('.men');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});