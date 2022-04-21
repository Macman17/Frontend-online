import "./todoitem.css";
import "./quantityPicker";
import QuantityPicker from "./quantityPicker";

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            {props.content}
            <QuantityPicker></QuantityPicker>
        </div>
        );
    
};

export default TodoItem;