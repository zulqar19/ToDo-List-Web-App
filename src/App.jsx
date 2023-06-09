import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="relative bg-red-400 container h-[calc(100vh-40px)] max-w[90%] w-[270px] sm:w-[530px] text-4xl font-black font-mono p-5 overflow-hidden">
      Todo App
      <TodoContainer />
    </div>
  );
}

export default App;
