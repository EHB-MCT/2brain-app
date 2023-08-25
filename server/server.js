const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());



app.use(express.json()); // Middleware for parsing JSON data

// Function to make request to OpenAI API
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

app.post('/getCompletion', async (req, res) => {
  const { model, messages, temperature } = req.body;
  try {
    const data = await getOpenAICompletion(model, messages, temperature);
    res.json(data);
    console.log("Data from API: ", data);
    const assistantMessage = data.choices[0].message.content;  
    console.log("Assistant message: ", assistantMessage);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/testCompletion', async (req, res) => {
  const model = 'gpt-3.5-turbo';
  const messages = [{ "role": "user", "content": "Say this is a test!" }];
  const temperature = 0.7;

  try {
    const data = await getOpenAICompletion(model, messages, temperature);
    console.log("Data from API: ", JSON.stringify(response.data, null, 2));
    
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/getAdvice', async (req, res) => {
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You're an Artificial intelligence program adviser. based on the users info you will find 3 programs or apps that uses Artificial intelligence. \n\nThe user will give you the task he needs to fulfil, the app he usually uses, and also his budget. \n\ngive him 3 apps that uses AI to improve his productivity. \n\nStart by giving the name, and then explain how the app using AI to improve productivity. And if you can find info about the price give it. "
        },
        {
          "role": "user",
          "content": "I want to create images, I usually use photoshop, and I'm willing to pay 20 a month "
        },
      ],
      temperature: 1,
      max_tokens: 469,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("Data from API: ", JSON.stringify(response.data, null, 2));
    const assistantMessage = response.data.choices[0].message.content;  
    console.log("Assistant message: ", assistantMessage);

    return response.data;

  } catch (error) { 
    console.error('Error:', error);
    throw new Error(`Failed to retrieve data from API: ${error.message}`);
  }
});



// New function to make the OpenAI request for AI tools recommendation
async function getAIRecommendation(prompt) {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'dgpt-3.5-turbo', // Choose the model you'd like to use
      messages: [{ "role": "user", "content": prompt }],
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY_HERE`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

// New route to handle the request for AI tools recommendation
app.post('/api/ai-response', async (req, res) => {
  const { prompt } = req.body;
  try {
    const data = await getAIRecommendation(prompt);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

