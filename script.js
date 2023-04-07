window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

promises = [
  new Promise(resolve => setTimeout(() => resolve(1), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(2), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(3), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(4), Math.floor(Math.random() * 5000) + 1000)),
  new Promise(resolve => setTimeout(() => resolve(5), Math.floor(Math.random() * 5000) + 1000))
];

Promise.any(promises)
  .then(result => {
    // Print the result to the output div
    output.textContent = `The first promise that resolved returned ${result}.`;
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
