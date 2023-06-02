import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css'; // Import the homepage.css file

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const workoutPlans = [
    { id: 1, title: 'Full Body Warmup', duration: '30 minutes', intensity: 'High' },
    { id: 2, title: 'Upper Body Strength', duration: '45 minutes', intensity: 'Moderate' },
    { id: 3, title: 'Lower Body Sculpt', duration: '60 minutes', intensity: 'Intense' },
    { id: 4, title: 'Cardio Blast', duration: '20 minutes', intensity: 'High' },
    { id: 5, title: 'Core and Abs Workout', duration: '15 minutes', intensity: 'Moderate' },
    { id: 6, title: 'Legs(Optional)', duration: '30 minutes', intensity: 'Moderate' },
  ];

  return (
    <div className="homepage">
       
      <div className='text1'>
        <h2 className='my-5'>Welcome to the Fitness Blog!</h2>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://e0.pxfuel.com/wallpapers/63/653/desktop-wallpaper-fitness-gym-boy.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>“Take care of your body. It’s the only place you have to live."</h3>
          {/* <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://rukminim1.flixcart.com/image/850/1000/xif0q/poster/f/g/c/large-pos00256-no-pain-no-gain-gym-exercise-poster-with-frame-original-imaghr7gvybbhmhb.jpeg?q=90"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>“Once you are exercising regularly, the hardest thing is to stop it.” </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1087579.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>“Exercise should be regarded as tribute to the heart” </h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <h3 className='my-3'> Current Best Workout Plans</h3>
        <p className='my-5'>Here you will find the latest workout plans to help you achieve your fitness goals.</p>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Intensity</th>
            </tr>
          </thead>
          <tbody>
            {workoutPlans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration}</td>
                <td>{plan.intensity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container my-4">
        <p className='text1'>Do one program everyday for 6x per week then repeat</p>
      </div>

      <div className="image-container text-center">
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/6_day_ppl_-_1200x630.jpg?itok=hKlHF0Oj" alt="Person working out" className="workout-image" height="250" width="auto"/>
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/muscular-guy-doing-cable-flys.jpg?itok=cSCNyLEj" alt="Person working out" className="workout-image" height="250" width="auto"/>
        <img src="https://cdn.muscleandstrength.com/sites/default/files/styles/800x500/public/5_day_dumbbell_workout_-_1200x630.jpg?itok=wvEt4RRY" alt="Person working out" className="workout-image" height="250" width="auto"/>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}