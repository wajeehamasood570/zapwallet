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

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdowns = document.querySelectorAll('.arr-down');

//     dropdowns.forEach(arrow => {
//         arrow.addEventListener('click', function(event) {
//             event.stopPropagation(); // Prevent event bubbling
//             const dropdownContent = this.closest('.srch-card').querySelector('.dropdown-content');
//             const card = this.closest('.srch-card');
//             dropdownContent.classList.toggle('show'); // Toggle class
            
//             // Add or remove the expanded class
//             if (dropdownContent.classList.contains('show')) {
//                 card.classList.add('expanded');
//             } else {
//                 card.classList.remove('expanded');
//             }
//         });
//     });

//     // Close the dropdown when clicking outside
//     window.addEventListener('click', function(event) {
//         const dropdownContents = document.querySelectorAll('.dropdown-content');
//         dropdownContents.forEach(content => {
//             if (content.classList.contains('show')) {
//                 content.classList.remove('show');
//                 // Also remove expanded class
//                 content.closest('.srch-card').classList.remove('expanded');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.arr-down');

    dropdowns.forEach(arrow => {
        arrow.addEventListener('click', function(event) {
            event.stopPropagation();
            const card = this.closest('.srch-card');
            const dropdownContent = card.querySelector('.dropdown-content');

            // Toggle the dropdown content
            dropdownContent.classList.toggle('show');

            // If the dropdown is now shown
            if (dropdownContent.classList.contains('show')) {
                card.classList.add('expanded');

                // Reset tabs to ensure no tab is active by default
                resetTabs(dropdownContent); // Ensure no tabs are active initially
                
                // Open the corresponding tab based on the clicked dropdown
                const tabName = this.getAttribute('data-tab'); // Get the tab name from data attribute
                openTab(event, tabName); // Open the corresponding tab content

                // Check if the dropdown goes above the screen
                const dropdownRect = dropdownContent.getBoundingClientRect();
                if (dropdownRect.top < 0) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                card.classList.remove('expanded');
                resetTabs(dropdownContent); // Reset tabs when dropdown is closed
            }
        });
    });

    // Prevent closing the dropdown when clicking inside it
    document.querySelectorAll('.dropdown-content').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function(content) {
            if (!content.contains(event.target) && content.classList.contains('show')) {
                content.classList.remove('show');
                content.closest('.srch-card').classList.remove('expanded');
                resetTabs(content); // Reset tabs when closed
            }
        });
    });
});

// Function to close the dropdown
function closeDropdown(element) {
    const dropdownContent = element.closest('.dropdown-content');
    if (dropdownContent) {
        dropdownContent.classList.remove('show');
        dropdownContent.closest('.srch-card').classList.remove('expanded');
        resetTabs(dropdownContent); // Reset tabs when closed
    }
}

// Function to open corresponding tab content
function openTab(evt, tabName) {
    // Hide all tab contents
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab buttons
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";

    // Set the clicked tab as active
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}

// Function to reset all tabs
function resetTabs(dropdownContent) {
    const tablinks = dropdownContent.querySelectorAll(".tablinks");
    tablinks.forEach(tab => tab.classList.remove("active")); // Remove active class
    const tabcontent = dropdownContent.querySelectorAll(".tabcontent");
    tabcontent.forEach(content => content.style.display = "none"); // Hide all contents
}










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












