// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
    // Add paragraphs and button
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="clickButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Add click event listener to the button
    $('#clickButton').on('click', updateCounter);
});
// Function to update counter
const updateCounter = _.debounce(() => {
    // Increment count
    count++;
    // Update the paragraph element with id='count'
    $('#count').text(`${count} clicks on the button`);
}, 500);

// Initialize count
let count = 0;
