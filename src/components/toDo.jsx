import { useState } from "react";
import "./toDo.css";
import "./todoitem"
import TodoItem from "./todoitem";

const Todo = () => {
    const [text, setText] = useState("");
    const [shoppingList, setShoppingList] = useState([]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    const handleAddItem = () => {
        console.log(text);
        //push the text
        let  copy = [...shoppingList];
        copy.push(text);
        setShoppingList(copy);

        
    };
    return (
        <div className="todo">
            <h3>Shopping List</h3>
        
            <div className="form">
                <input onChange={handleTextChange}  placeholder="Add to Shopping list" type="text"></input>
                <button onClick={handleAddItem} className="btn btn-sm btn-primary">Add</button>
            </div>

            <div className="list">
                <h6> There are {shoppingList.length} in your shopping cart</h6>
                
                    {shoppingList.map((t, index ) => ( <TodoItem key={index} content={t}></TodoItem>))}
                    
                


            </div>
        </div>
    );

};

export default Todo;