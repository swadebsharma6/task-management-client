import React, { useEffect, useState } from 'react';
import Task from './Task';

const TodoList = () => {
    const [tasks, setTask] = useState([]);

    useEffect(()=>{
        const url = `https://task-management-server-psi-seven.vercel.app/task`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setTask(data)
        })

    }, [])

    return (
        <section className='my-10'>
            <div className='grid md:grid-cols-3 grid-cols-1 overflow-hidden gap-4'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                        ></Task>)
                }
            </div>
        </section>
    );
};

export default TodoList;