import React, { useState, useEffect } from 'react';
import axios from 'axios';
const cors = require('cors');




const AIMatchPage = () => {
  const [formData, setFormData] = useState({
    task: '',
    app: '',
    budget: '',
    familiarity: ''
  });
  
  const [recommendedApps, setRecommendedApps] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const prompt = `Based on the user's needs for ${formData.task} using ${formData.app} with a budget of ${formData.budget}, what AI tools would you recommend?`;
    const test = `say this is a test`;
  
    try {
      const response = await axios.post('http://localhost:3001/api/ai-response', {
        prompt: test
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log("Data from API: ", response.data);
      
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };
  



  const getCompletion = async () => {
    // Define the request payload
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": "Say this is a test!" }],
      temperature: 0.7
    };

    try {
      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3001/getCompletion', payload);
      console.log("API Response:", response.data);

      // Extract the assistant's message
      const assistantMessage = response.data.choices[0].message.content;
      alert(`Assistant says: ${assistantMessage}`);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };


  useEffect(() => {
    if (!buttonClicked) return;  // Exit if the button was not clicked
    const fetchData = async () => {
     
    };
    fetchData();
    setButtonClicked(false);  // Reset to default state
  }, [buttonClicked, formData]);  // The effect depends on `buttonClicked` and `formData`
  
  const getAI = async (event) => {
    if (event) {
      event.preventDefault();
    }
  
    setButtonClicked(true);

    
  
    const prompt = `Based on the user's needs for ${formData.task} using ${formData.app} with a budget of ${formData.budget}, what AI tools would you recommend?`;
    const test = `say this is a test`;
    console.log("Prompt: ", prompt);


    try {
      // Make a POST request to the backend server
      const response = await axios.post('http://localhost:3001/getAdvice', { prompt: prompt });
      console.log("API Response:", response.data);

      // Extract the assistant's message
      const assistantMessage = response.data;
       // Update the state variable

     
      console.log("Assistant message front end : ", assistantMessage);
      setRecommendedApps(response.data.recommendation.apps);
       // Update the state variable
 // Update the state variable

    } catch (error) {
      console.error("Error fetching data:", error);
  if (error.response) {
    console.error("Data:", error.response.data);
    console.error("Status:", error.response.status);
    console.error("Headers:", error.response.headers);
  }
    
    }
  };


  



  return (
    
<div className="container">
  <h1 className="display-4">AI Match</h1>

  <form onSubmit={getAI}>
    <div className="row">
      <div className="col-md-6 mb-3"> {/* This div will take up 50% of the row on medium to large screens */}
        <fieldset>
          <legend>What is the task you want to fulfill?</legend>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="task" id="videoCreation" value="Video Creation" onChange={handleChange} />
            <label className="form-check-label" htmlFor="videoCreation">Video Creation</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="task" id="imageCreation" value="Image Creation" onChange={handleChange} />
            <label className="form-check-label" htmlFor="imageCreation">Image Creation</label>
          </div>
          {/* ... Add more options here */}
        </fieldset>
      </div>
      <div className="col-md-6 mb-3"> {/* This div will take up the remaining 50% of the row on medium to large screens */}
        <fieldset>
          <legend>Which app do you already use for this task?</legend>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="app" id="adobeIllustrator" value="Adobe Illustrator" onChange={handleChange} />
            <label className="form-check-label" htmlFor="adobeIllustrator">Adobe Illustrator</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="app" id="excel" value="Excel" onChange={handleChange} />
            <label className="form-check-label" htmlFor="excel">Excel</label>
          </div>
          {/* ... Add more options here */}
        </fieldset>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mb-3">
        <fieldset>
          <legend>What is your budget?</legend>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="budget" id="free" value="Free" onChange={handleChange} />
            <label className="form-check-label" htmlFor="free">Free</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="budget" id="midrange" value="Midrange" onChange={handleChange} />
            <label className="form-check-label" htmlFor="midrange">Midrange</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="budget" id="high" value="High" onChange={handleChange} />
            <label className="form-check-label" htmlFor="high">High</label>
          </div>
        </fieldset>
      </div>
      <div className="col-md-6 mb-3">
        <fieldset>
          <legend>Are you already familiar with AI?</legend>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="familiarity" id="yes" value="Yes" onChange={handleChange} />
            <label className="form-check-label" htmlFor="yes">Yes</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="familiarity" id="no" value="No" onChange={handleChange} />
            <label className="form-check-label" htmlFor="no">No</label>
          </div>
        </fieldset>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  <div className="container mt-5">
    <h2>Recommended Apps:</h2>
    <div className="row">
      {recommendedApps.map((app, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <strong>{app.name}</strong>
            </div>
            <div className="card-body">
              <p className="card-text">{app.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  


  );
}

export default AIMatchPage;
