import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const sidebarStyle = {
    width: '250px',
    padding: '20px',
    backgroundColor: '#fde4cf',
    borderRadius: '12px',
    marginRight: '30px',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '30px',
    gap: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const mainContentStyle = {
    flex: 1,
  };

  const cardStyle = {
    display: 'flex',
    backgroundColor: '#fff8f1',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const imgStyle = {
    width: '140px',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h2>About Me</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2em' }}>
          <li>🌟 My Vision</li>
          <li>📜 Background</li>
          <li>👥 Team</li>
          <li>🤝 Collaborations</li>
          <li>📈 Growth Journey</li>
          <li>💼 Careers</li>
          <li>📚 Publications</li>
        </ul>
      </div>
      <div style={mainContentStyle}>
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9PgCq5SfVbKzlwZD9ck9f7wQLj7XArwFoQ&s"
            alt="Inspiring Journey"
            style={imgStyle}
          />
          <div>
            <h3>The Story Behind This Website</h3>
            <p>
              This platform was created to share knowledge, inspire minds, and connect with changemakers.
            </p>
            <Link to="/story" style={{ color: '#00c9a7', textDecoration: 'underline' }}>
              Read the full story →
            </Link>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacngMwMydsvnpYdBW4T6YMsuTGwxCcvkhoA&s"
            alt="Our Mission"
            style={imgStyle}
          />
          <div>
            <h3>Walk With Nature</h3>
            <p>
              Explore how our project integrates sustainability and education through nature.
            </p>
            <a
              href="https://bumikecil.org/wp-content/uploads/2024/07/nature-scaled.jpg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00c9a7' }}
            >
              Visit the Eco Zone
            </a>
          </div>
        </div>                        
        <div style={cardStyle}>                                                                                      

          
          <img
            src="https://www.shutterstock.com/image-vector/empowerment-sign-black-thin-line-260nw-2320334063.jpg"
            alt="Empowering Communities"
            style={imgStyle}
          />
          <div>
            <h3>Empowering Communities</h3>
            <p>                                                  
              We believe real change begins at the grassroots. Our outreach programs uplift communities through education, skill-building, and self-reliance.
            </p>
            <a
              href="https://www.pathfoundation.in/ngo/foundation.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00c9a7' }}
            >
              Learn More
            </a>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=140&q=80"
            alt="Tech for Good"
            style={imgStyle}
          />
          <div>
            <h3>Tech for Good</h3>
            <p>
              We harness the power of technology to solve real-world problems. From apps that educate to tools that empower, innovation drives our mission.
            </p>
            <a
              href="https://www.mdpi.com/sustainability/sustainability-16-01790/article_deploy/html/images/sustainability-16-01790-g001.png"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00c9a7' }}
            >
              Discover Our Tools
            </a>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            src="https://www.shutterstock.com/image-photo/group-people-plant-tree-together-260nw-600904226.jpg"
            alt="Join the Movement"
            style={imgStyle}
          />
          <div>
            <h3>Join the Movement</h3>
            <p>
              We’re building a global network of dreamers, doers, and changemakers. Get involved today to make a lasting difference.
            </p>
            <a
              href="https://static.wixstatic.com/media/7a77c1_5f02ecfa4941478ebc2853e89812b251~mv2.jpg/v1/fit/w_2500,h_1330,al_c/7a77c1_5f02ecfa4941478ebc2853e89812b251~mv2.jpg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#00c9a7' }}
            >
              Become a Volunteer
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;
