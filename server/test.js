const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = "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";
console.log("API Key:", apiKey);


const axios = require('axios'); // if you're using Node.js, or import in the case of ES6

async function getOpenAICompletion(model, messages, temperature) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model,
      messages,
      temperature,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`, // Replace with your own API key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

const get4 = async () => {
  try {
    const model = "gpt-3.5-turbo";
    const userNeeds = "I need an app that create images for me.";
    const messages = [
      {
        "role": "system",
        "content": "You're an Artificial intelligence program adviser, give 3 apps based on the users needs, only the names"
      },
      {
        "role": "user",
        "content": userNeeds
      },
    ];
    const temperature = 1;

    const response = await getOpenAICompletion(model, messages, temperature);
    
    console.log("Data from API: ", JSON.stringify(response, null, 2));
    const assistantMessage = response.choices[0].message.content;  
    console.log("Assistant message: ", assistantMessage);

    return response;
  } catch (error) { 
    console.error('Error:', error);
    throw new Error(`Failed to retrieve data from API: ${error.message}`);
  }
};

// Example of how to call get4 and handle its promise
get4()
  .then(response => {
    console.log("Response from API ehhhhhhhhhh: ", response);
  })
  .catch(error => {
    // Handle the error
  });
