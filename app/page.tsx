import React, { Suspense } from "react";
import TodoList from "./(users)/todos/TodoList";

const Home = () => {
  return (
    <div>
      {/* <Suspense fallback={<p>Loading the todos</p>}> */}
      <div className="flex space-x-2">
        {/* @ts-ignore */}
        <TodoList />
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default Home;
