document.addEventListener("DOMContentLoaded", function() {
  // Set the access key in JavaScript
  const accessKey = "36f346e8-f6e5-428b-b6ca-34bc67229dbc"; // Replace with your actual Web3Forms access key
  
  // Set the access key for the main contact form
  document.getElementById("contactAccessKey").value = accessKey; // Assuming you have an input for the access key in your main form

  // Set the access key for the footer contact form
  document.getElementById("accessKey").value = accessKey; // Assuming the footer access key input has the id 'accessKey'
});
