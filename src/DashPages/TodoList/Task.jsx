

const Task = ({task}) => {
    console.log(task);
    const {title, description, priority, date, name, email} = task;
    return (
        <div>
        <div className="card bg-neutral text-neutral-content">
        <div className="card-body h-[250px]">
          <h2 className="card-title">{title}</h2>
          <h4>Completed Date: {date}</h4>
          <p>{description}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Task;