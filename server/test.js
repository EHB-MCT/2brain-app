const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = "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";
console.log("API Key:", apiKey);




const openai = new OpenAI(apiKey);

app.post('/api/ai-response', async (req, res) => {
  console.log("Received request:", req.body);
  
  try {
    const prompt = req.body.prompt;
    const aiResponse = await openai.createCompletion({
      engine: "davinci", // The engine model to use (adjust as needed)
      prompt: prompt,
      max_tokens: 50
    });
    
    console.log("Response from API: ", aiResponse.data.choices[0].text);
    res.json(aiResponse.data.choices[0].text);

  } catch (error) {
    console.error(error);

    // Handle different types of errors here
    if (error.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded" });
    } else if (error.status === 400) {
      res.status(400).json({ error: "Bad request" });
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
