
import React from 'react';

const Volunteer = () => {
  const pageStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1509099836639-18ba1795216d")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '60px 30px',
    color: '#fff',
    position: 'relative',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#00c9a7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <h1>Join the Movement</h1>
        <p>
          We’re building a global network of dreamers, doers, and changemakers. Get involved today to make a lasting difference by volunteering with us.
        </p>

        <section style={{ marginTop: '30px' }}>
          <h2>Why Volunteer with Us?</h2>
          <ul>
            <li>🤝 Make real-world impact on children's lives</li>
            <li>🌱 Promote sustainability and education</li>
            <li>🎓 Gain experience and develop leadership skills</li>
            <li>🌍 Connect with a passionate, like-minded community</li>
          </ul>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2>Volunteer Roles</h2>
          <p>You can contribute in many ways based on your interests and skills:</p>
          <ul>
            <li>📚 Teaching & Mentoring</li>
            <li>📦 Distributing Food & Supplies</li>
            <li>📸 Photography & Content Creation</li>
            <li>💻 Tech Support & Digital Outreach</li>
            <li>🌿 Environmental Awareness Campaigns</li>
          </ul>
        </section>

        <section style={{ textAlign: 'center' }}>
          <h2>Ready to Make a Difference?</h2>
          <p>Join hands with us in creating a better future.</p>
          <button style={buttonStyle}>Become a Volunteer</button>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;
