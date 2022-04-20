import "./toDo.css";

const Todo = () => {
    return (
        <div className="todo">
            <h3>Shopping List</h3>
        
            <div className="form">
                <input placeholder="Add to Shopping list" type="text"></input>
                <button className="btn btn-sm btn-primary">Add</button>
            </div>

            <div className="list">


            </div>
        </div>
    );

};

export default Todo;