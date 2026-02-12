const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const toggleIcon = document.getElementById('toggle-icon');

toggleBtn.addEventListener('click', () => {
    // Toggle the sidebar width
    sidebar.classList.toggle('collapsed');
    
    // Rotate/Flip the icon
    if (sidebar.classList.contains('collapsed')) {
        toggleIcon.style.transform = 'rotate(180deg)';
    } else {
        toggleIcon.style.transform = 'rotate(0deg)';
    }
});