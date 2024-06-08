
// Get all items
const items = document.querySelectorAll('.item');

// Add event listener to each item
items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    // Add hover effect to image
    item.querySelector('.gallary-hover-effect').style.borderColor = 'rgba(70, 241, 244, 0.703)';
  });

  item.addEventListener('mouseout', () => {
    // Remove hover effect from image
    item.querySelector('.gallary-hover-effect').style.borderColor = 'transparent';
  });
});