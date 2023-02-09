const randomize = (strArray: string[]) => {
  // Store the array length
  const arrayLength = strArray.length;
  // Create a temporary array
  const tempArray = [...strArray];
  // Create a new array
  const randomizedArray = [];

  // Loop through the array length
  for (let i = 0; i < arrayLength; i++) {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    // Push the element from the random index from the temporary array to the randomized array
    randomizedArray.push(tempArray.splice(randomIndex, 1)[0]);
  }
  // Return the randomized array
  return randomizedArray;
};


export default randomize;