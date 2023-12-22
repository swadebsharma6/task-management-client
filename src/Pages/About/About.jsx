import React from 'react';
import image from '../../assets/images/task.png';
import Container from '../../container/Container/Container';

const About = () => {
    return (
       <Container>
       <div className='flex justify-center items-center min-h-screen'>
        <div>
        <div className='text-center mb-8'>
        <img className='w-60 mx-auto rounded-full' src={image} alt="" />
      </div>
       <h2 className='text-4xl font-bold text-center'>WelCome to Task <span className='text-secondary'>Management Website</span> !!</h2>
        </div>
      </div>
       </Container>
    );
};

export default About;