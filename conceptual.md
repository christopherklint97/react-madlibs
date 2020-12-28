### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

  React is a library built in JS for creating user interfaces. A big reason to use it is for creating simple components for your application that update only when the data changes (without refreshing).

- What is Babel?

  Babel is used to convert newer JS code (for example ES2015) into older code that is backwards compatible for older browsers.

- What is JSX?

  JSX is syntactic sugar used in React that is converted into normal JS code when it is compiled.

- How is a Component created in React?

  A component can be created through a function or a class in React. Components usually return JSX elements.

- What are some difference between state and props?

  Props are arguments in a React function component while state is the changing of data over time. You do not control/change state through props, rather through the use of hooks such as useState.

- What does "downward data flow" refer to in React?

  When designing a React App, it is common to have child components that are nested under parent components. The parent component will pass down the state through read-only props and the child will communicate back to the parent through callbacks.

- What is a controlled component?

  A controlled component controls the input values in a form by using setState

- What is an uncontrolled component?

  An uncontrolled component will use the DOM to handle the form data instead of the React component. For example, this is done through the use of refs.

- What is the purpose of the `key` prop when rendering a list of components?

  The purpose of keys is to see which items in a list were changed, added, or removed. Keys are given to items inside an array for identity. The best is to use a unique string to identify each item.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  Since the array index is not unique, the actual item that you wanted to change, add, or delete does not behave accordingly.

- Describe useEffect. What use cases is it used for in React components?

  useEffect is a hook that lets you do side effects in function components. Use cases include data fetching, setting up a subscription and changing the DOM.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  A useRef is a hook that returns a mutable ref object. The `.current` property is the same as the passed argument during initialization (`initialValue`). Changing the ref value does not cause a rerender.

- When would you use a ref? When wouldn't you use one?

  You would use a ref to access the DOM. You would not use it to run code when a component attaches or detaches. You would instead use useEffect.

- What is a custom hook in React? When would you want to write one?

  A custom hook is a function starting with `use` that contains reusable component logic. You would want to use one for form handling, timers, animation, or pretty much anything.
