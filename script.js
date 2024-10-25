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

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.arr-down');

    dropdowns.forEach(arrow => {
        arrow.addEventListener('click', function (event) {
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
    window.addEventListener('click', function (event) {
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

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.arr-down');

    dropdowns.forEach(arrow => {
        arrow.addEventListener('click', function (event) {
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
    document.querySelectorAll('.dropdown-content').forEach(function (dropdown) {
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function (event) {
        const dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(function (content) {
            if (!content.contains(event.target) && content.classList.contains('show')) {
                content.classList.remove('show');
                content.closest('.srch-card').classList.remove('expanded');
                resetTabs(content); // Reset tabs when closed
            }
        });
    });
});


// Function to toggle the dropdown and open the corresponding tab
function toggleDropdown(event) {
    event.stopPropagation(); // Stop the event from bubbling up

    const dropdown = event.currentTarget; // Current clicked dropdown
    const tabName = dropdown.getAttribute('data-tab'); // Get the tab name from data-tab attribute
    const card = dropdown.closest('.srch-card'); // Find the closest card


    // Toggle the "active" class on the card to show/hide the dropdown
    card.classList.toggle('active');

    // Ensure only one dropdown is open at a time (optional)
    document.querySelectorAll('.srch-card').forEach(otherCard => {
        if (otherCard !== card) {
            otherCard.classList.remove('active');
        }
    });

    // Get the corresponding dropdown content
    const dropdownContent = card.querySelector('.dropdown-content');

    // Toggle the dropdown visibility
    dropdownContent.classList.toggle('show');

    // If dropdown is shown, open the corresponding tab
    if (dropdownContent.classList.contains('show')) {
        openTab(event, tabName); // Call openTab to show the content of the clicked tab
    } else {
        card.classList.remove('expanded'); // Close the dropdown
        resetTabs(dropdownContent); // Reset the tabs if dropdown is closed
    }


}




// Function to open the corresponding tab content
// Function to open the corresponding tab content
function openTab(evt, tabName) {
    // Hide all tab content sections
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all tab content
    }

    // Remove 'active' class from all tab links
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";

    // Add the 'active' class to the clicked tab
    evt.currentTarget.classList.add("active");
}


// Function to reset tabs
function resetTabs(dropdownContent) {
    // Remove active class from all tab links
    const tablinks = dropdownContent.querySelectorAll(".tablinks");
    tablinks.forEach(tab => tab.classList.remove("active"));

    // Hide all tab contents
    const tabcontent = dropdownContent.querySelectorAll(".tabcontent");
    tabcontent.forEach(content => content.style.display = "none");
}

// Function to close dropdown manually (on close button)
// Function to close dropdown manually (on close button)
function closeDropdown(element) {
    const dropdownContent = element.closest('.dropdown-content');
    if (dropdownContent) {
        dropdownContent.classList.remove('show'); // Remove 'show' class to hide dropdown
        const srchCard = dropdownContent.closest('.srch-card');
        if (srchCard) {
            srchCard.classList.remove('expanded'); // Remove 'expanded' class if any
            srchCard.classList.remove('active');   // Remove 'active' class to ensure dropdown hides
        }
        resetTabs(dropdownContent); // Reset tabs if needed
    }
}


// Close dropdown if clicked outside
window.addEventListener('click', function (event) {
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(function (content) {
        if (!content.contains(event.target) && content.classList.contains('show')) {
            content.classList.remove('show');
            content.closest('.srch-card').classList.remove('expanded');
            resetTabs(content); // Reset tabs when closed
        }
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



//tabs functinality
let selectedSeats = []; // Array to hold selected seats
let selectedPickups = []; // Array to hold selected pickup locations

// // Function to switch tabs
// function switchTab(tabName) {
//     const tabs = document.querySelectorAll('.tabcontent');
//     tabs.forEach(tab => {
//         tab.style.display = 'none'; // Hide all tabs
//     });

//     const selectedTab = document.getElementById(tabName);
//     if (selectedTab) {
//         selectedTab.style.display = 'block'; // Show the selected tab
//     }
// }




// Initial setup for the seat selection button
const addPickupButton = document.querySelector('.select-seat-btn');
addPickupButton.style.display = 'block'; // Hide button initially

// Event listener for seat selection
document.querySelectorAll('.seat.normal, .seat.female, .seat.male').forEach(seat => {
    seat.addEventListener('click', function () {
        const price = parseInt(this.innerText.replace('₹', '').trim()); // Get price from seat text

        // Toggle seat selection
        if (selectedSeats.includes(this)) {
            selectedSeats = selectedSeats.filter(s => s !== this); // Remove from selected
            this.classList.remove('selected'); // Optional: Visual feedback
        } else {
            selectedSeats.push(this); // Add to selected
            this.classList.add('selected'); // Optional: Visual feedback
        }

        // Calculate total price
        const totalPrice = selectedSeats.reduce((total, seat) => {
            const seatPrice = parseInt(seat.innerText.replace('₹', '').trim());
            return total + seatPrice; // Sum of selected seats
        }, 0);

        // Update fare summary
        document.getElementById('baseFare').innerText = totalPrice;
        document.getElementById('finalPrice').innerText = totalPrice;

        // Update "Add Pickup" button text and visibility
        if (selectedSeats.length > 0) {
            addPickupButton.innerText = 'Add Pickup';
            addPickupButton.style.display = 'block'; // Show button
        } else {
            addPickupButton.innerText = 'TAP ON SEAT';
            addPickupButton.style.display = 'block'; // Hide if no seats selected
        }

        // Add click event to switch to Pickup tab
        addPickupButton.onclick = function () {
            if (selectedSeats.length > 0) {
                alert(`Pickup for ₹${totalPrice} has been added!`);
                switchTab('Pickup'); // Switch to the Pickup tab
            }
        };
    });
});

 // Get the pickup button
 const pickupButton = document.querySelector('.sc-pt-info .ty-btn');

 // Event listener for pickup selection
 document.querySelectorAll('input[name="pickup-location"]').forEach(radio => {
     radio.addEventListener('change', function() {
         pickupButton.innerText = 'Add Dropoff'; // Change button text
         pickupButton.style.display = 'block'; // Ensure button is visible
     });
 });

 // Click event for the pickup button
 pickupButton.addEventListener('click', function() {
     alert('Adding Dropoff...'); // Show alert
     switchTab('DropOff'); // Switch to Dropoff tab
 });



 // Get the drop-off button
const dropoffButton = document.querySelector('.dropoff-btn');

// Event listener for drop-off selection
document.querySelectorAll('input[name="dropoff-location"]').forEach(radio => {
    radio.addEventListener('change', function() {
        dropoffButton.innerText = 'Add Dropoff'; // Change button text
        dropoffButton.style.display = 'block'; // Ensure button is visible
    });
});

// Event listener for drop-off selection
document.querySelectorAll('input[name="dropoff-location"]').forEach(radio => {
    radio.addEventListener('change', function() {
        dropoffButton.innerText = 'Add Passenger'; // Change button text
        dropoffButton.style.display = 'block'; // Ensure button is visible
    });
});

// Click event for the drop-off button
dropoffButton.addEventListener('click', function() {
    alert('Adding Passenger...'); // Show alert
    switchTab('PassengerInfo'); // Switch to PassengerInfo tab
});



function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hides all tabs
    });

    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block'; // Show the selected tab
    } else {
        console.error(`Tab not found: ${tabName}`); // Log an error if the tab is not found
    }
}












