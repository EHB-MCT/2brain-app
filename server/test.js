const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = "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";
console.log("API Key:", apiKey);

const axios = require('axios');
const port = 3001;

app.use(cors());



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

app.post('/getAdvice', async (req, res) => {
  
  try {
    const model = "gpt-3.5-turbo";
    
    const userNeeds = req.body.prompt
    console.log("User needs: ", userNeeds);
    console.log("User needs promt: ", req.body);
    console.log("User needs promt-2: ", req.body.prompt);
    console.log("User needs promt-3: ", req.body.prompt[0]);
    console.log("User needs promt-4: ", req.body.prompt[1]);

    // const messages = [
    //   {
    //     "role": "system",
    //     "content": "You're an Artificial intelligence program adviser, give 3 apps based on the users needs, only the names, nothing nore."
    //   },
    //   {
    //     "role": "user",
    //     "content": userNeeds
    //   },
    // ];
    // const temperature = 1;

    // const response = await getOpenAICompletion(model, messages, temperature);
    
    // console.log("Data from API: ", JSON.stringify(response, null, 2));
    // const assistantMessage = response.choices[0].message.content;  
    // console.log("Assistant message: ", assistantMessage);
    const assistantMessage = {
      "apps": [
        {
          "name": "Adobe Lightroom",
          "description": "A powerful photo editing and organizing app, designed for photographers."
        },
        {
          "name": "GIMP",
          "description": "A free and open-source image editing software, with features comparable to Adobe Photoshop."
        },
        {
          "name": "Pixlr",
          "description": "An online photo editor with a wide range of editing tools and effects, suitable for both beginners and professionals."
        }
      ]
    };

    res.json({ recommendation: assistantMessage }); 
  } catch (error) { 
    console.error('Error:', error);
    throw new Error(`Failed to retrieve data from API: ${error.message}`);
  }
});

// // Example of how to call get4 and handle its promise

//   .then(response => {
//     console.log("Response from API ehhhhhhhhhh: ", response);
//   })
//   .catch(error => {
//     // Handle the error
//   });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

