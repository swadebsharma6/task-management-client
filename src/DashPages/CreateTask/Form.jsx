import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MdAddTask } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useContext(AuthContext);
 

  const onSubmit = async (data) => {
    // console.log(data);
    const taskItem = {
        title: data.title,
        description: data.description,
        date: data.date,
        priority: data.priority,
        name: user.displayName,
        email: user.email
        
      };
      console.log(taskItem)
      fetch('https://task-management-server-psi-seven.vercel.app/task', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(taskItem)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        reset();
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-purple-400 rounded">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Title"
              className="input input-bordered text-black text-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              className="textarea textarea-success text-black text-sm"
              {...register("description")}
              placeholder="Description"
            ></textarea>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Priority Level</span>
              </label>
              <select
                defaultValue="default"
                {...register("priority", { required: true })}
                className="select select-success w-full text-sm text-black  "
              >
                <option disabled value="default">
                  Select a Priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
               
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Date"
                className="input input-bordered text-sm text-black"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning text-3xl mt-10">
          <MdAddTask className="text-4xl"></MdAddTask>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
