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
    console.log('OpenAI API Response:', data);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
