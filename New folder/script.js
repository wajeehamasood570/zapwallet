document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.btn-warning');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.textContent.trim();
            alert(`Filtering by: ${filterType}`);
            // Here you would typically implement the actual filtering logic
        });
    });
});