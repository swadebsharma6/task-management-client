import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Completed = () => {
    const [complete, setComplete] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        const url = `http://localhost:5000/complete`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setComplete(data)
        })

    }, [])


    return (
        <section>
            <div>
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className='text-xl font-bold py-6'>
                <tr>
                  <th>
                    SL
                  </th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Task</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
               {
                complete.map((task, idx) =>

                    <tr key={task._id}>
                  <th>
                    <label>
                    {idx + 1}
                    </label>
                  </th>
                  <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                       { user && <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                  </td>
                  <td>
                  <div>
                  <div className="font-bold">{user.displayName}</div>
                </div>
                  </td>
                  <td>
                   {task.title}
                    <br/>
                    <span className="badge badge-ghost badge-sm">{task.date}</span>
                  </td>
                  <td>
                  <button className='btn btn-sm btn-primary'>Completed</button>
                  </td>
                </tr>
                )
            }
              </tbody>
              
            </table>
          </div>
            </div>
        </section>
    );
};

export default Completed;