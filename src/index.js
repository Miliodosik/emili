// emoji-search.js

// Define a list of emojis with their keywords
const emojis = [
    { emoji: '😊', keywords: ['happy', 'smile', 'joy'] },
    { emoji: '😂', keywords: ['laugh', 'funny', 'haha'] },
    { emoji: '😍', keywords: ['love', 'heart', 'crush'] },
    { emoji: '🎉', keywords: ['party', 'celebrate', 'fun'] },
    // Add more emojis and keywords as needed
  ];
  
  // Function to search emojis based on keywords
  function searchEmoji(query) {
    query = query.toLowerCase();
    return emojis.filter(emojiObj =>
      emojiObj.keywords.some(keyword => keyword.includes(query))
    ).map(emojiObj => emojiObj.emoji);
  }
  
  // Export the searchEmoji function
  module.exports = searchEmoji;
  
  // Example usage:
  // const searchEmoji = require('./emoji-search');
  // console.log(searchEmoji('joy')); // Output: [ '😊' ]
  // console.log(searchEmoji('funny')); // Output: [ '😂' ]
  