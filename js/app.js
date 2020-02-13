document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const readingFormSubmit = function(event) {
    event.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.textContent = `Title: ${event.target.title.value}
    Author: ${event.target.author.value} Type: ${event.target.category.value}`;
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newListItem);
    document.getElementById("new-item-form").reset();
  };

  const submitForm = document.querySelector('#new-item-form');
  submitForm.addEventListener('submit', readingFormSubmit);

  const deleteAllSubmit = function(event) {
    const populatedReadingList = document.getElementById("reading-list");
    while (populatedReadingList.childNodes.length > 0) {
      populatedReadingList.removeChild(populatedReadingList.lastChild);
    };
  };

  const deleteForm = document.querySelector('body');
  deleteForm.addEventListener('click', deleteAllSubmit);

  const deleteAllButton = document.createElement('button');
  deleteAllButton.innerHTML = "Delete All"
  deleteForm.appendChild(deleteAllButton);

});
