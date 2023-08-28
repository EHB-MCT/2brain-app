import React from 'react';
import './CommunityPage.css';
import chatgpt from '../assets/images/chatgpt.png';
import grammerly from '../assets/images/grammerly.png';
import { Link } from 'react-router-dom';


const CommunityPage = () => {

  const communityApps = [
    {
      id: 1,
      name: 'Midjourney',
      description: 'Image gereation',
      imageUrl: 'https://www.cined.com/content/uploads/2023/03/Midjourney_v5_out_now-feature_image_2.jpg'
    },
    {
      id: 2,
      name: 'DALL-E',
      description: 'Image gereation',
      imageUrl: 'https://media.npr.org/assets/img/2022/07/19/dalle3_custom-6b01300a7345dd51abd00e7841fb929827dcb837.jpg'
    },
    {
      id: 3,
      name: 'DeepL',
      description: 'Translation service',
      imageUrl: 'https://static.deepl.com/img/favicon/automatic_social_share_deepl.jpg'
    },
    {
      id: 4,
      name: 'Firefly',
      description: 'Photoshop assistant',
      imageUrl: 'https://global-uploads.webflow.com/63994dae1033718bee6949ce/641a70c86adf1eea725cf958_92e0dbbdc00eab4ce77c.jpeg'
    },
    {
      id: 5,
      name: 'Youper',
      description: 'Mental health aide',
      imageUrl: 'https://play-lh.googleusercontent.com/_0v_dDm_VqcAPfFbWlga7HhFftNVr2D-SIPaULwbbgi4OT-gAOHoa6Nw6EbFUmHtDI0'
    },
    {
      id: 6,
      name: 'GPT-3',
      description: 'Language model',
      imageUrl: chatgpt
    },
    {
      id: 7,
      name: 'Copy AI',
      description: 'copywriting service',
      imageUrl: 'https://www.travelpayouts.com/blog/wp-content/uploads/2023/03/tp-blog-1864x980-3.png'
    },
    {
      id: 8,
      name: 'Grammarly',
      description: 'Grammar and spell checking',
      imageUrl: grammerly
    },
    {
      id: 9,
      name: 'LOVO AI',
      description: 'Voice generation',
      imageUrl: 'https://voicebot.ai/wp-content/uploads/2021/08/lovo.png'
    },
    {
      id: 10,
      name: 'Replika',
      description: 'Mental well-being chatbot',
      imageUrl: 'https://cdn.dribbble.com/users/104459/screenshots/15025216/photo_11_4x.jpg'
    }

  ];



  
    return (
      <div className="community-page-container">
  
      <div className="community-container" id="appsForYouSection">
      <h1 className="community-title">Discover the world of AI together</h1>
      <p className="community-guide">These are the AI programs highlighted by us. Look around for inspiration. </p>
    </div>

      <div className="community-page-grid">
        {communityApps.map((app, index) => (
          <div className="app-card" key={index}>
            <Link to={`/app/${app.id}`}>
              <div className="app-card"> 
                <div className="app-card-image-container">
                  <img 
                    src={app.imageUrl} 
                    alt={app.name} 
                    className="app-card-image"
                  />
                </div>
                <div className="app-card-info">
                  <div className="app-card-title">{app.name}</div>
                  <div className="app-card-description">{app.description}</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
  }
  
  export default CommunityPage;
  