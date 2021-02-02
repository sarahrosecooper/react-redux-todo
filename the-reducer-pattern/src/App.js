import React, { useReducer } from "react";
import { toDoListReducer, initialState } from './reducers/toDoListReducer';

// "The first and most important thing to understand about a reducer is that it will always only return one value. The job of a reducer is to reduce. That one value can be a number, a string, an array or an object, but it will always only be one. Reducers are really great for a lot of things, but they’re especially useful for applying a bit of logic to a group of values and ending up with another single result." "

function App() {
  // state, and dispatch always, dispatch is sending out looking for necessary action to update state
  const [state, dispatch] = useReducer(toDoListReducer, initialState ) // reducer, and initial state
  // console.log(state.listOfTodos)
  return (
    <div style={{textAlign: "center"}}>
          {state.listOfTodos.map((task) => (
            <p key={task.id}>
              {task.taskName}
            </p>

          ))}
    </div>
  );
}


export default App;
