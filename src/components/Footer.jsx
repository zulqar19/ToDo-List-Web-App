import { useDispatch, useSelector } from "react-redux";
import { clearTodo } from "../Redux/Slices/TodoSlices";


function Footer() {

  const dispatch = useDispatch()
  const state = useSelector((state) => state.todos)

  const handleClear = () =>{
    dispatch(clearTodo())
  }


  return (
    <div className=" absolute bottom-[5px] text-white text-base flex justify-between sm:justify-around items-center w-[100%] ">
      <h4 className="sm:text-xl mr-3">You have {state.length} pending task</h4>
      <button type="submit" className="bg-purple-500 p-2 mr-8 sm:text-xl" onClick={handleClear}>
        Clear all
      </button>
    </div>
  );
}

export default Footer;
