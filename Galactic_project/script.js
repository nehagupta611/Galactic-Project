function showPopupForm() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }

  // Wait for 3 seconds and then show the pop-up form
  setTimeout(showPopupForm, 3000);

  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Submit the form data to the admin panel
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the form data to the admin panel using an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'admin-panel-url', true); // Replace 'admin-panel-url' with the actual URL
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Form submission successful, you can display a success message here
        console.log('Form submitted successfully!');
      } else {
        // Form submission failed, you can display an error message here
        console.error('Form submission failed.');
      }
    };
    xhr.send(formData);