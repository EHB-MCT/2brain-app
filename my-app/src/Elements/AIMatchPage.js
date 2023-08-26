import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AIMatchPage.css';
import left from '../assets/images/rightB.png';
import right from '../assets/images/leftB.png';
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

    document.querySelectorAll(`input[name=${name}]`).forEach((radio) => {
      radio.closest('.form-check').classList.remove('selected');
    });
  
    // Add selected class to the parent of the clicked radio button
    e.target.closest('.form-check').classList.add('selected');
  
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
  const scrollToBottom = () => {
    window.scrollBy({
      top: window.innerHeight,  // Scroll down by the view height of the window
      behavior: 'smooth'  // Smooth scrolling
    });
  }

  



  return (


    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
  
 <img id="left-side-image" src={right} alt="Your Image"  />
 <img id="right-side-image" src={left} alt="Your Image"  />

<div className="aimatchpage-container ">

<div className="text-center" style={{ marginBottom: '400px' }}> {/* Added inline style for margin-bottom */}
  <h1 className="display-4 pt-5 custom-h1">Access the flow</h1>
  <p className="lead mt-3">Welcome to the AI-Matchmaker, your personalized AI tool recommender.</p> {/* Introduction text */}
  <p className="mt-3">Answer a few simple questions to get AI tool recommendations tailored to your needs.</p> {/* Explanation text */}
  {/* <div className="lines-wrapper"></div> */}
  <button id="scrollDownButton" className="scroll-down-button" onClick={scrollToBottom}>

  <div className="triangle"></div>
</button>
</div>
<div className="container function-container">
<h1 class="centered-title">Programs for you</h1>
<form onSubmit={getAI} className="custom-form">

  <div className="row">
    <div className="col-md-4 mb-3">
    <div className="fieldset-card">
    <div className="question-number">Question 1</div>
      <fieldset>
        <h5>PURPOSE</h5>
        <p>What kind of task you want to be able to fulfill with the AI program?</p>
        <div className="row">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="task" id="videoCreation" value="Video Creation" onChange={handleChange} />
              <label className="form-check-label" htmlFor="videoCreation">Video Creation</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="task" id="imageCreation" value="Image Creation" onChange={handleChange} />
              <label className="form-check-label" htmlFor="imageCreation">Image Creation</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="app" id="Data Analyse" value="Data Analyse" onChange={handleChange} />
              <label className="form-check-label" htmlFor="Data Analyse">Data Analyse</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="app" id="Copy writing" value="Copy writing" onChange={handleChange} />
              <label className="form-check-label" htmlFor="Copy writing">Copy writing</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    </div>

    <div className="col-md-4 mb-3">
    <div className="fieldset-card">
    <div className="question-number">Question 2</div>
      <fieldset>
      <h5>PROGRAM</h5>
        <p>Which app are you  currenlty using/fits best to the one that you would use?</p>
        <div className="row">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="app" id="adobeIllustrator" value="Adobe Illustrator" onChange={handleChange} />
              <label className="form-check-label" htmlFor="adobeIllustrator">Adobe Illustrator</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="app" id="excel" value="Excel" onChange={handleChange} />
              <label className="form-check-label" htmlFor="excel">Excel</label>
            </div>
          </div>
          
        </div>
      </fieldset>
    </div>
    </div>

    <div className="col-md-4 mb-3">
    <div className="fieldset-card">
    <div className="question-number">Question 3</div>
      <fieldset>
      <h5>BUDGET</h5>
        <p>What is the budget you are willing to spend to use a new program?</p>
        <div className="row">
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="budget" id="free" value="Free" onChange={handleChange} />
              <label className="form-check-label" htmlFor="free">Free</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="budget" id="midrange" value="Midrange" onChange={handleChange} />
              <label className="form-check-label" htmlFor="midrange">Midrange</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  </div>
  <div className="button-container">
  <button type="submit" className="btn custom-submit">SHOW ME</button>
</div>



</form>


<div className="container mt-5">


  <div className="row">
    {recommendedApps.map((app, index) => (
      
      <div key={index} className="col-md-4 d-flex align-items-stretch">
        <div className="card custom-card mb-4">
          <div className="card-header custom-card-header">
            <strong className="card-title">{app.name}</strong>
          </div>
          <div className="card-body custom-card-body">
            <p className="card-text custom-card-text">{app.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  
</div>

</div>
</div>

</div>
  


  );
}

export default AIMatchPage;
