import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="overlay">
          <div className="hero-box">
            <h1>Welcome to Our Youth Hope</h1>
            <p>We strive to feed and educate underprivileged children.</p>
            <Link to="/donate">
              <button className="donate-btn">Donate Now</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          We are dedicated to supporting underprivileged children by providing access to food, education, and care. 
          Our mission is to empower the next generation through compassion and action.
        </p>
        <p>Your support helps us feed hungry children, send them to school, and offer emotional care when they need it most.</p>
        <p>Together, we break the cycle of poverty and give every child a fair start. Every donation fuels a brighter tomorrow.</p>
      </section>

      <section className="projects">
        <h2>Ongoing Projects</h2>
        <div className="project-cards">
          <div className="card">
            <img src="https://www.shutterstock.com/image-photo/rural-school-boy-holding-slate-260nw-2212403943.jpg" alt="Education Drive" />
            <h3>Education Drive</h3>
            <p>Supporting rural schools with books, uniforms & digital tools.</p>
          </div>
          <div className="card">
            <img src="https://img.freepik.com/premium-photo/help-volunteers-donate-free-food-those-need_114016-10651.jpg" alt="Meal Program" />
            <h3>Meal Program</h3>
            <p>Delivering nutritious meals to children in slums & shelters.</p>
          </div>
          <div className="card">
            <img src="https://azaanschool.com/Content/BlogImages/azaan%20tree.jpg" alt="Green Mission" />
            <h3>Green Mission</h3>
            <p>Planting trees & teaching environmental care in schools.</p>
          </div>
        </div>
      </section>
      
<section className="impact">
  <h2>Our Impact</h2>
  <p>
    Our work is rooted in compassion, sustainability, and long-term community transformation. By addressing critical needs such as hunger, education, and social support, we strive to uplift underserved communities. Our meal programs not only fight food insecurity but also restore dignity and hope. Through accessible and inclusive education initiatives, we empower children with the knowledge and skills to shape their futures. And with the support of passionate volunteers, we build a strong foundation of empathy, action, and change that reaches far beyond individual efforts.
  </p>
</section>
      <section className="cta">
        <h2>Be a Changemaker</h2>
        <p>Join our volunteer team and help us bring change to lives that need it most.</p>
        <Link to="/volunteer" className="btn-join">Become a Volunteer</Link>
      </section>
    </div>
  );
};

export default Home;
