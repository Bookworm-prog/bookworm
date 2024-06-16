// script.js

document.addEventListener('DOMContentLoaded', function() {
    const patronForm = document.getElementById('patronForm');
    const bookForm = document.getElementById('bookForm');
    const checkoutForm = document.getElementById('checkoutForm');
    const searchForm = document.getElementById('searchForm');
    const scanBarcodeBtn = document.getElementById('scanBarcodeBtn');
    const scannedBarcodeOutput = document.getElementById('scannedBarcode');
    const libraryStatus = document.getElementById('libraryStatus');
    const availabilityResult = document.getElementById('availabilityResult');

    // Example function to handle patron form submission
    patronForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const patronID = document.getElementById('patronID').value;
        addPatron(firstName, lastName, patronID);
        patronForm.reset(); // Clear form inputs after submission
    });

    // Example function to handle book form submission
    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookTitle = document.getElementById('bookTitle').value;
        const bookISBN = document.getElementById('bookISBN').value;
        addBook(bookTitle, bookISBN);
        bookForm.reset(); // Clear form inputs after submission
    });

    // Example function to handle checkout form submission
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookISBNCheck = document.getElementById('bookISBNCheck').value;
        if (event.submitter.id === 'checkOutBtn') {
            checkOutBook(bookISBNCheck);
        } else if (event.submitter.id === 'checkInBtn') {
            checkInBook(bookISBNCheck);
        }
        checkoutForm.reset(); // Clear form inputs after submission
    });

    // Example function to handle search form submission
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchISBN = document.getElementById('searchISBN').value;
        searchBookAvailability(searchISBN);
        searchForm.reset(); // Clear form inputs after submission
    });

    // Example function to simulate barcode scanning
    scanBarcodeBtn.addEventListener('click', function() {
        const barcodeValue = prompt('Enter ISBN-10 barcode:');
        if (barcodeValue) {
            scannedBarcodeOutput.textContent = `Scanned ISBN-10: ${barcodeValue}`;
            // You would typically integrate with a real barcode scanner here
        }
    });

    // Example function to handle adding patron information
    function addPatron(firstName, lastName, id) {
        const patronInfo = `<p>Added Patron: ${firstName} ${lastName}, ID: ${id}</p>`;
        appendToLibraryStatus(patronInfo);
    }

    // Example function to handle adding book information
    function addBook(title, isbn) {
        const bookInfo = `<p>Added Book: ${title}, ISBN-10: ${isbn}</p>`;
        appendToLibraryStatus(bookInfo);
    }

    // Example function to handle checking out a book
    function checkOutBook(isbn) {
        const checkoutInfo = `<p>Checked Out Book ISBN-10: ${isbn}</p>`;
        appendToLibraryStatus(checkoutInfo);
    }

    // Example function to handle checking in a book
    function checkInBook(isbn) {
        const checkinInfo = `<p>Checked In Book ISBN-10: ${isbn}</p>`;
        appendToLibraryStatus(checkinInfo);
    }

    // Example function to handle searching book availability
    function searchBookAvailability(isbn) {
        // Simulated check for book availability
        const available = Math.random() < 0.5; // Example: 50% chance of availability
        const availabilityMessage = available ? 'Book is available.' : 'Book is not available.';
        availabilityResult.textContent = availabilityMessage;
    }

    // Example function to update library status
    function appendToLibraryStatus(content) {
        libraryStatus.insertAdjacentHTML('beforeend', content);
    }
});
