// Function to retrieve the current visitor count
function getVisitorCount() {
    // You can implement a server-side logic here to fetch the count from a database or a file
    // For simplicity, we'll use localStorage to store the count client-side
    return localStorage.getItem('visitorCount') || 0;
}

// Function to update the visitor count
function updateVisitorCount() {
    let count = parseInt(getVisitorCount());
    count++; // Increment the count
    localStorage.setItem('visitorCount', count); // Store the updated count
    document.getElementById('counter').textContent = count; // Update the HTML element
}

// Call updateVisitorCount when the page loads
updateVisitorCount();
