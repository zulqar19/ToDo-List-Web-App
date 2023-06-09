function Todos(props) {


  return (
    <>
      <div className=" relative flex w-[100%] h-10 sm:h-14 bg-white mb-1 over">
        <div className="flex-[85%] text-black overflow-y-auto text-base sm:text-lg p-1 w-[85%]">
          {props.title}
        </div>
          <i
            className="fa-solid fa-trash text-black text-center flex-[15%] hover:bg-red-600 hover:w-[25%] ml-1 w-[15%] flex items-center justify-center"
            onClick={props.onClick}
          ></i>
      </div>
    </>
  );
}

export default Todos;
