import { FaLocationArrow } from "react-icons/fa";
import Swal from "sweetalert2";

const Task = ({task}) => {
    // console.log(task);
    const {title, description, priority, date, name, email} = task;

    const handleCompleteTask =( task) =>{
        fetch('https://task-management-server-psi-seven.vercel.app/complete',{
            method:'POST',
           headers:{
            'content-type': 'application/json'
           } ,
           body: JSON.stringify(task)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Task Completed Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleOngoingTask =( task) =>{
        fetch('https://task-management-server-psi-seven.vercel.app/on-task',{
            method:'POST',
           headers:{
            'content-type': 'application/json'
           } ,
           body: JSON.stringify(task)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "On Task added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div>
        <div className="card bg-neutral text-neutral-content">
        <div className="card-body h-[250px]">
          <h2 className="card-title">{title}</h2>
          <h4>Issue Date: {date}</h4>
          <p>{description}</p>

          <div className="card-actions justify-end">
            <button onClick={()=>handleOngoingTask(task)} className="btn btn-sm btn-primary">
            <FaLocationArrow></FaLocationArrow>
            ongoing</button>
            <button onClick={()=>handleCompleteTask(task)} className="btn btn-outline btn-sm btn-secondary">Complete</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Task;