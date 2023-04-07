// Get the output div element
const output = document.getElementById('output');

// Create an array of 5 promises that resolve with a random time between 1 and 5 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000))
];

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then(result => {
    // Print the result to the output div
    output.textContent = `The first promise that resolved returned ${result}.`;
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
