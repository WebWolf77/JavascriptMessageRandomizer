// Arrays for message components
const inspirations = [
    "Believe in yourself",
    "Embrace the journey",
    "Live with passion",
    "Stay positive",
    "Keep learning"
  ];
  
  const affirmations = [
    "You are strong",
    "You are capable",
    "You are worthy",
    "You are enough",
    "You can do this"
  ];
  
  const encouragements = [
    "You've got this!",
    "Keep pushing forward",
    "Anything is possible",
    "You're doing great",
    "The future is bright"
  ];
  
  // Function to generate a random message
  function generateMessage() {
    const inspiration = inspirations[Math.floor(Math.random() * inspirations.length)];
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
  
    return `${inspiration}. ${affirmation}, and ${encouragement}.`;
  }
  
  // Call the function to get a new message
  console.log(generateMessage());