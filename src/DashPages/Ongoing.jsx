import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Ongoing = () => {
    const [ongoing, setOngoing] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const url = `http://localhost:5000/on-task`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setOngoing(data)
        })

    }, [])

    return (
        <div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
             ongoing.map((task, idx) =>  <tr key={task._id}>
             <th >{idx + 1}</th>
             <td>{user.displayName}</td>
             <td>{task.title}</td>
             <td>
                <p className='text-xl font-bold'>Ongoing</p>
             </td>
           </tr>)   
            }
          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default Ongoing;