// document.addEventListener('DOMContentLoaded', function() {
//     const dropdowns = document.querySelectorAll('.dropdown');

//     dropdowns.forEach(dropdown => {
//         const arrow = dropdown.querySelector('.arr-down');
//         const content = dropdown.querySelector('.dropdown-content');

//         arrow.addEventListener('click', function(event) {
//             event.stopPropagation();
//             content.classList.toggle('show');
//         });
//     });

//     // Close the dropdown when clicking outside
//     window.addEventListener('click', function(event) {
//         if (!event.target.matches('.arr-down')) {
//             const dropdowns = document.querySelectorAll('.dropdown-content');
//             dropdowns.forEach(dropdown => {
//                 if (dropdown.classList.contains('show')) {
//                     dropdown.classList.remove('show');
//                 }
//             });
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.arr-down');

    dropdowns.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            const dropdownContent = this.closest('.srch-card').querySelector('.dropdown-content');
            const card = this.closest('.srch-card');
            dropdownContent.classList.toggle('show'); // Toggle class
            
            // Add or remove the expanded class
            if (dropdownContent.classList.contains('show')) {
                card.classList.add('expanded');
            } else {
                card.classList.remove('expanded');
            }
        });
    });

    // Close the dropdown when clicking outside
    window.addEventListener('click', function(event) {
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(content => {
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                // Also remove expanded class
                content.closest('.srch-card').classList.remove('expanded');
            }
        });
    });
});








// Select elements
// Select elements
// Elements
const searchTrigger = document.querySelector('.search-trigger');
const dropdown = document.querySelector('.dropdown-calendar');
const body = document.querySelector('body');

// Show dropdown and apply dim effect
searchTrigger.addEventListener('click', function () {
  dropdown.style.display = 'block';
//   body.classList.add('dimmed'); // Add class to dim the background
});

// Close dropdown when clicking outside of it
document.addEventListener('click', function (e) {
  if (!dropdown.contains(e.target) && !searchTrigger.contains(e.target)) {
    dropdown.style.display = 'none';
    // body.classList.remove('dimmed'); // Remove dimming effect
  }
});

// document.getElementById('pickups').addEventListener('click', function() {
//     const seatChart = document.getElementById('seatChart');
//     if (seatChart.style.display === 'none' || seatChart.style.display === '') {
//         seatChart.style.display = 'block'; // Show the seat chart
//     } else {
//         seatChart.style.display = 'none'; // Hide the seat chart
//     }
// });


// function toggleSeatChart() {
//     const seatChart = document.getElementById("seatChart");

//     if (seatChart.style.display === "none" || seatChart.style.display === "") {
//         seatChart.style.display = "block"; // Show the seat chart
//         setTimeout(() => {
//             seatChart.classList.add('show'); // Optional: Add class for transitions if needed
//         }, 10); // Allow for the display change
//     } else {
//         seatChart.classList.remove('show'); // Optional: Remove class for transitions if needed
//         setTimeout(() => {
//             seatChart.style.display = "none"; // Hide the seat chart after transition
//         }, 300); // Match this duration with the CSS transition duration
//     }
// }

// function toggleSeatChart() {
//     const seatChart = document.getElementById('seatChart');
//     // Toggle display between 'none' and 'block'
//     seatChart.style.display = seatChart.style.display === 'block' ? 'none' : 'block';
// }

function toggleSeatChart() {
    const seatChart = document.getElementById('seatChart');
    if (seatChart.classList.contains('show')) {
        seatChart.classList.remove('show'); // Hide if it's already showing
    } else {
        seatChart.classList.add('show'); // Show the seat chart
    }
}

// Close button function
function closeSeatChart() {
    const seatChart = document.getElementById('seatChart');
    seatChart.classList.remove('show'); // Hide seat chart when close is clicked
}












