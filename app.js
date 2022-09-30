// TODO
// create my component GroceryList
function GroceryList() {

  // return intended HTML of rendered component in JSX
  return (
    <div>
      <h1>Grocery List</h1>
      {/* <ul>
        <Eggs />
        <Milk />
      </ul> */}

      <TodoList todos={['Eggs', 'Milk', 'Coffee']} />
    </div>
  );
}

// REMEMBER: nested components also need caps starting letter -----
// curly braces require a return statement
// paranthesis components do not

// const Eggs = () => (
//   <li>Eggs</li>
// )
// const Milk = () => (
//   <li>Milk</li>
// )

// HOOKS using useState (using hooks removes the need for classes) ---
// the next line is equivalent to `var useState = React.useState;`
const { useState } = React;

// first we create the TodoListItem, which is just another function component
// Because we aren't using curly braces with this arrow function,
// we don't have to write a `return` statement.
// This is called 'implicit return'.
const TodoListItem = (props) => {
  // This "Array destructuring" syntax is equivalent to:
  // var isDoneTools = useState(false);
  // var isDone = isDoneTools[0];
  // var setIsDone = isDoneTools[1];
  const [isDone, setIsDone] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Making the rendered style a conditional based on on our `isDone` state
  // lets us update the style based on user interactions.

  // You can pass inline styles using React's `style` attribute to any component
  // snake-cased css properties such as `text-decoration` become camelCased in the keys of the inline style object
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHover ? 'bold' : 'normal'
  };

  // When a list item is clicked, we will toggle the `isDone`
  // boolean, and our component's `render` method will run again
  return (
    <li style={style} onClick={() => setIsDone(!isDone)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {props.todo}
    </li>
  );
};

// Now, update our `TodoList` to use the new `TodoListItem` component
const TodoList = (props) => (

  <ul>
    {props.todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
);


// This TodoList got refactor to above function ^  (doesnt need TodoListItem)---
// function TodoList(props) {
//   // This function will be called when either `<li>` below are clicked on
//   // Notice that event handling functions receive an `event` object
//   // We want to define it where it has access to `props`
//   const clickListItem = (event) => {
//     console.log('I GOT CLIKED!');
//   }

//   // Because we used curly braces with this arrow function
//   // we have to write an explicit `return` statement
//   return (
//     <ul>
//       <li onClick={clickListItem}>{props.todos[0]}</li>
//       <li onClick={clickListItem}>{props.todos[1]}</li>
//     </ul>
//   )
// }


// RENDEDRING HAPPENS AT THE END OF EVERYTHING ----------
// To render a React component you use
// ReactDOM.render(componentInstance, DOMElement)
// takes two args --> what, and where
ReactDOM.render(<GroceryList />, document.getElementById('app'));