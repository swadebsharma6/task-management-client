import React from 'react';
import Form from './Form';

const CreateTask = () => {
    return (
        <div>
          <h2 className='text-4xl text-center font-bold my-10'>Create A Task <span className='text-secondary'>as Your Works</span></h2> 
          <div>
            <Form></Form>
          </div>
        </div>
    );
};

export default CreateTask;