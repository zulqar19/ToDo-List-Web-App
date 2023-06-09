import { useState } from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../Redux/Slices/TodoSlices";

function AddBox() {
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  const [value, setValue] = useState("");
  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleSubmit = () =>{
    dispatch(addTodo(value));
    setValue("")
  }

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <>
      <div className="w-[100%] flex justify-between items-center">
        <input
          type="text"
          name="additem"
          id="additem"
          placeholder="Add your new Todo"
          className="w-[155px] sm:w-[85%] sm:h-14 h-12 my-8 bg-black text-white text-base p-[6px]"
          onChange={handleChange}
          value={value}
        />
        <i
          className="fa-solid fa-plus bg-purple-400 sm:h-14 h-12 text-center p-2"
          onClick={handleSubmit}
        ></i>
      </div>
      <div className="w-[100%] h-[calc(100%-205px)] text-white text-lg overflow-y-auto">
        {state.map((user,id) =>{
          return <Todos key = {id} title = {user} onClick={() =>handleRemove(id)} />
        })}
      </div>
      
    </>
  );
}

export default AddBox;
