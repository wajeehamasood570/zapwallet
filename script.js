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
    // for (var i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none"; // Hide all tab content
    // }

    // Remove 'active' class from all tab links
    var tablinks = document.getElementsByClassName("tablinks");
    // for (var i = 0; i < tablinks.length; i++) {
    //     tablinks[i].classList.remove("active");
    // }

    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";

    // Add the 'active' class to the clicked tab
    evt.currentTarget.classList.add("active");
}


function resetTabs(dropdownContent, tabName) {
    const tablinks = dropdownContent.querySelectorAll(".tablinks");
    const tabcontent = dropdownContent.querySelectorAll(".tabcontent");

    // Remove active class from all tab links and hide all tab content
    tablinks.forEach(tab => tab.classList.remove("active"));
    tabcontent.forEach(content => content.style.display = "none");

    // Show only the tab that matches `tabName`
    const selectedTabLink = dropdownContent.querySelector(`.tablinks[data-tab="${tabName}"]`);
    const selectedTabContent = dropdownContent.querySelector(`#${tabName}`);

    if (selectedTabLink && selectedTabContent) {
        selectedTabLink.classList.add("active");
        selectedTabContent.style.display = "block";
    }
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
        // resetTabs(dropdownContent); // Reset tabs if needed
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
const modifyButton = document.querySelector('.dropdown-calendar .btn'); // Make sure we select the button inside the dropdown


// Toggle dropdown visibility on search trigger click
searchTrigger.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click from propagating to body
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
        body.classList.add('dimmed'); // Optional: Apply dim effect on the background
    } else {
        dropdown.style.display = 'none';
        body.classList.remove('dimmed'); // Remove dim effect when closed
    }
});
// Close dropdown when MODIFY SEARCH button is clicked
modifyButton.addEventListener('click', function () {
    dropdown.style.display = 'none';
  });

// Close dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && !searchTrigger.contains(event.target)) {
        dropdown.style.display = 'none';
        body.classList.remove('dimmed'); // Remove dim effect when closed
    }
});






// Function to initialize seat selection, price filtering, and tab switching for each card
function initializeCard(card) {
    let selectedSeats = []; // Store selected seats for this card only
    let selectedPickups = []; // Store selected pickups for this card only

    const addPickupButton = card.querySelector('.select-seat-btn');
    const priceFilter = card.querySelector('.price-filter input');
    const seatElements = card.querySelectorAll('.seat.normal, .seat.female, .seat.male');
    const baseFareDisplay = card.querySelector('#baseFare');
    const finalPriceDisplay = card.querySelector('#finalPrice');
    const pickupButton = card.querySelector('.sc-pt-info .ty-btn');
    const dropoffButton = card.querySelector('.dropoff-btn'); // Use card context
    const submitBtn = card.querySelector('.submit-btn'); // Use card context
    const nameInput = card.querySelector('#name'); // Use card context
    const ageInput = card.querySelector('#age'); // Use card context
    const genderInputs = card.querySelectorAll('input[name="gender"]'); // Use card context
    const contactInfoBtn = card.querySelector('.contact-info-btn'); // Use card context
    const mobileInput = card.querySelector('.mobile-input'); // Use card context
    const emailInput = card.querySelector('.email-input'); // Use card context

    // Initialize Pickup Button visibility
    addPickupButton.style.display = 'block'; 

    // Price filter functionality
    priceFilter.addEventListener('input', function () {
        const maxPrice = parseInt(this.value);

        seatElements.forEach(seat => {
            const seatPrice = parseInt(seat.innerText.replace('₹', '').trim());
            seat.style.display = seatPrice <= maxPrice ? 'block' : 'none'; // Show/hide seats based on filter
        });
    });

    // Event listener for seat selection
    seatElements.forEach(seat => {
        seat.addEventListener('click', function () {
            const price = parseInt(this.innerText.replace('₹', '').trim());
            const seatNumber = this.textContent.trim();

            // Toggle seat selection
            const existingSeat = selectedSeats.find(s => s.element === this);

            if (existingSeat) {
                // Remove seat if already selected
                selectedSeats = selectedSeats.filter(s => s !== existingSeat);
                this.classList.remove('selected');
            } else {
                // Add seat if not selected
                selectedSeats.push({ element: this, price: price, seatNumber: seatNumber });
                this.classList.add('selected');
            }

            // Calculate total price and update fare summary for this card
            const totalPrice = selectedSeats.reduce((total, seat) => total + seat.price, 0);
            const seatCount = selectedSeats.length;

            baseFareDisplay.innerText = totalPrice;
            finalPriceDisplay.innerText = totalPrice;

            // Update "Add Pickup" button text and visibility
            if (seatCount > 0) {
                addPickupButton.innerText = `Select Pickup (${seatCount} seats)`;
                addPickupButton.style.display = 'block';
            } else {
                addPickupButton.innerText = 'TAP ON SEAT';
                addPickupButton.style.display = 'block';
            }
             // Add click event to switch to Pickup tab for this card
             addPickupButton.onclick = function () {
                if (seatCount > 0) {
                    alert(`Pickup for ₹${totalPrice} has been added!`);
                    switchTab(card, 'Pickup'); // Switch to the Pickup tab within this card
                }
            }
        });
    });

    // Event listener for pickup selection within the card
    card.querySelectorAll('input[name="pickup-location"]').forEach(radio => {
        radio.addEventListener('change', function() {
            pickupButton.innerText = 'Add Dropoff'; // Change button text
            pickupButton.style.display = 'block'; // Ensure button is visible
        });
    });

    // Click event for the pickup button within the card
    pickupButton.addEventListener('click', function() {
        alert('Adding Dropoff...'); // Show alert
        switchTab(card, 'DropOff'); // Switch to Dropoff tab within this card
    });

    // Event listener for drop-off selection
    card.querySelectorAll('input[name="dropoff-location"]').forEach(radio => {
        radio.addEventListener('change', function() {
            dropoffButton.innerText = 'Add Passenger'; // Change button text
            dropoffButton.style.display = 'block'; // Ensure button is visible
        });
    });

    // Click event for the drop-off button
    dropoffButton.addEventListener('click', function() {
        alert('Adding Passenger...'); // Show alert
        switchTab(card, 'PassengerInfo'); // Switch to PassengerInfo tab
    });

    // Helper function to check if all fields are filled
    function areAllFieldsFilled() {
        return (
            nameInput.value.trim() !== '' &&
            ageInput.value.trim() !== '' &&
            Array.from(genderInputs).some(input => input.checked)
        );
    }

    // Event listener to update button text when fields are filled
    [nameInput, ageInput, ...genderInputs].forEach(input => {
        input.addEventListener('change', function () {
            if (areAllFieldsFilled()) {
                submitBtn.innerText = 'ENTER CONTACT INFO';
            } else {
                submitBtn.innerText = 'ENTER NAME, AGE, GENDER';
            }
        });
    });

    // Event listener for the button click to switch tab
    submitBtn.addEventListener('click', function () {
        if (areAllFieldsFilled()) {
            alert('Switching to contact info...'); // Optional alert for feedback
            switchTab(card, 'YourInfo'); // Switch to the "YourInfo" tab
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Helper function to check if both fields are filled for contact info
    function areContactFieldsFilled() {
        return (
            mobileInput.value.trim() !== '' &&
            emailInput.value.trim() !== ''
        );
    }

    // Event listener to update button text when fields are filled
    [mobileInput, emailInput].forEach(input => {
        input.addEventListener('input', function () {
            if (areContactFieldsFilled()) {
                contactInfoBtn.innerText = 'REVIEW AND PAY';
            } else {
                contactInfoBtn.innerText = 'ENTER CONTACT INFO';
            }
        });
    });
}

// Call this function once for each card
document.querySelectorAll('.srch-card').forEach(card => {
    initializeCard(card); // Call to initialize each card
});


// Function to handle tab switching within a specific card
function switchTab(card, tabName) {
    console.log(`Switching to tab: ${tabName} in card`, card);

    // Target only tab content and links within the current card
    const tabContent = card.querySelectorAll(".tabcontent");
    const tabLinks = card.querySelectorAll(".tablinks");

    // Hide all tab content and remove active class within the card only
    tabContent.forEach(content => content.style.display = "none");
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show selected tab content and set active class
    const selectedTab = card.querySelector(`#${tabName}`);
    const selectedTabLink = card.querySelector(`.tablinks[data-tab="${tabName}"]`);

    if (selectedTab) selectedTab.style.display = "block";
    if (selectedTabLink) selectedTabLink.classList.add("active");
}











// Event listener to close any open dropdown if clicked outside of it
window.addEventListener('click', function (event) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        const srchCard = dropdown.closest('.srch-card');
        if (!dropdown.contains(event.target) && !srchCard.contains(event.target) && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            srchCard.classList.remove('expanded');
            // Don't reset tabs here; only reset when explicitly closing with a close button
        }
    });
});









// Event listener for each dropdown trigger to open the dropdown and show only the specified tab
document.querySelectorAll('.search-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (event) {
        const srchCard = event.currentTarget.closest('.srch-card'); // Current card context
        const dropdown = srchCard.querySelector('.dropdown-content'); // Current card's dropdown
        const tabName = event.currentTarget.getAttribute('data-tab'); // Get the specified tab from data attribute

        // Close any other open dropdowns and reset their tabs without hiding tab content
        document.querySelectorAll('.dropdown-content.show').forEach(openDropdown => {
            if (openDropdown !== dropdown) {
                openDropdown.classList.remove('show');
                openDropdown.closest('.srch-card').classList.remove('expanded');
                resetTabs(openDropdown); // Do not reset to any specific tab to keep content state
            }
        });

        // Toggle visibility of the current dropdown
        if (dropdown.classList.contains('show')) {
            // dropdown.classList.remove('show');
            // srchCard.classList.remove('expanded');
        } else {
            dropdown.classList.add('show');
            srchCard.classList.add('expanded');
            resetTabs(dropdown, tabName); // Show only the specified tab in the opened dropdown
        }
    });
});



//
// Select all cards and loop through them
document.querySelectorAll('.srch-card').forEach(card => {
    // Dropdown functionality for each card
    const dropdownTrigger = card.querySelector('.search-trigger');
    const dropdownContent = card.querySelector('.dropdown-content');

    dropdownTrigger.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click from affecting other cards
        // dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function (event) {
        if (!card.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });

    // Tab functionality for each card
    card.querySelectorAll('.tablinks').forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Hide all tab content within this card
            card.querySelectorAll(".tabcontent").forEach(content => content.style.display = "none");

            // Remove 'active' class from all tab links within this card
            card.querySelectorAll(".tablinks").forEach(link => link.classList.remove("active"));

            // Show the specific tab content and mark the tab as active
            const tabName = event.currentTarget.getAttribute('data-tab');
            const selectedTab = card.querySelector(`#${tabName}`);
            if (selectedTab) {
                selectedTab.style.display = "block";
            }
            event.currentTarget.classList.add("active");
        });
    });
});



///
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.arr-down');

    dropdowns.forEach(arrow => {
        arrow.addEventListener('click', function (event) {
            event.stopPropagation();
            const card = this.closest('.srch-card');
            const dropdownContent = card.querySelector('.dropdown-content');
            const isDropdownOpen = dropdownContent.classList.contains('show');

            // Close any open dropdowns
            closeAllDropdowns();

            if (!isDropdownOpen) {
                dropdownContent.classList.add('show');
                card.classList.add('expanded');

                // Open the corresponding tab based on the data-tab attribute
                const tabName = this.getAttribute('data-tab');
                openTab(card, tabName);

                // Ensure the dropdown stays within the viewport
                const dropdownRect = dropdownContent.getBoundingClientRect();
                if (dropdownRect.top < 0) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', closeAllDropdowns);
    
    function closeAllDropdowns() {
        const dropdownContents = document.querySelectorAll('.dropdown-content.show');
        dropdownContents.forEach(content => {
            content.classList.remove('show');
            content.closest('.srch-card').classList.remove('expanded');
            resetTabs(content); // Reset tabs when dropdown is closed
        });
    }

    // Function to open a specific tab within a card
    function openTab(card, tabName) {
        const tabcontent = card.querySelectorAll(".tabcontent");
        const tablinks = card.querySelectorAll(".tablinks");

        // Hide all tab content and remove 'active' class from all tab links
        tabcontent.forEach(content => content.style.display = "none");
        tablinks.forEach(link => link.classList.remove("active"));

        // Show the selected tab content
        const selectedContent = card.querySelector(`#${tabName}`);
        const selectedLink = card.querySelector(`.tablinks[data-tab="${tabName}"]`);
        
        if (selectedContent && selectedLink) {
            selectedContent.style.display = "block";
            selectedLink.classList.add("active");
        }
    }

    // Function to reset all tabs within a dropdown
    function resetTabs(dropdownContent) {
        const tabcontent = dropdownContent.querySelectorAll(".tabcontent");
        const tablinks = dropdownContent.querySelectorAll(".tablinks");
        tabcontent.forEach(content => content.style.display = "none");
        tablinks.forEach(link => link.classList.remove("active"));
    }
});

// Example event handler to toggle individual dropdowns for each card
function toggleDropdown(event) {
    event.stopPropagation();
    const card = event.currentTarget.closest('.srch-card');
    const dropdownContent = card.querySelector('.dropdown-content');
    const isDropdownOpen = dropdownContent.classList.contains('show');

    // Close all open dropdowns
    closeAllDropdowns();

    // Toggle the current dropdown
    if (!isDropdownOpen) {
        dropdownContent.classList.add('show');
        card.classList.add('expanded');
    }
}



//search
