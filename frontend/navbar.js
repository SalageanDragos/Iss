// Create the navigation bar element
const navbar = document.createElement('ul');
navbar.classList.add('navbar');

// Create the user list link
const userListLink = document.createElement('a');
userListLink.href = 'userlist.html';
userListLink.textContent = 'User List';

// Create the report list link
const reportListLink = document.createElement('a');
reportListLink.href = 'reportlist.html';
reportListLink.textContent = 'Report List';

// Create the list items and append the links
const userListNavItem = document.createElement('li');
userListNavItem.appendChild(userListLink);

const reportListNavItem = document.createElement('li');
reportListNavItem.appendChild(reportListLink);

// Append the list items to the navigation bar
navbar.appendChild(userListNavItem);
navbar.appendChild(reportListNavItem);

// Insert the navigation bar at the top of the document body
document.body.insertBefore(navbar, document.body.firstChild);