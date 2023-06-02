import React from 'react';
import './about.css'; // Import the about.css file

export default function About() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh custom-bg-color">
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="my-2 fs-1 text-center" >About Page</p>
        <br />
        <div>
          <p className="fs-5 my-2 text-center about-text">
            Our webpage aims to influence personal fitness training. We empower clients to foster whole-body health by investigating their diets and workouts, helping them customize dynamic fitness journey timelines to suit their unique needs.
          </p>
          <br />
          <p className="fs-5 about-text">
            Sigma Gainz is an online platform dedicated to strength, fitness, nutrition, and overall health. We offer a wide range of resources, including articles, workouts, videos, and a supportive community. Our platform provides expert advice, practical tips, and evidence-based information to help individuals achieve their fitness goals. With a mobile-responsive design, Sigma Gainz allows users to access its content from various devices, making it convenient and accessible for fitness enthusiasts of all levels.
          </p>
        </div>
      </div>
    </div>
  );
}