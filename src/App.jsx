import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./components/Profile";
import Product from "./components/Product";
import ClickListener from "./components/ClickListener";
import Recipe from "./components/Recipe";
import Counter from "./components/Counter";
import CounterDecrement from "./components/CounterDecrement";



function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile 
        name="Props"
        job="used to pass data from parent to child components in React"
        birthdate={1990}
        />
      <Product
          name="Props 2.0"
          description="They are immutable, meaning they cannot be modified by the receiving component, ensuring one-way data flow."
          price={2000}
        />  
      <Recipe
        title="Props 3.0" 
        type="Props allow components to be dynamic and reusable by accepting different inputs." 
        duration={60} 
        />
      <ClickListener 
        />
      <Counter 
        />
      <p>Unlike props, state is mutable and can be updated within the component using the setState function, triggering re-renders. It is primarily used to track changes and control the behavior of interactive components.</p>  
      <CounterDecrement />
    
    </>
  );
}

export default App;
