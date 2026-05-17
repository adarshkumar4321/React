import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id :"heading"},"Hello World from React")
//creating a react elemnt. React element is nothing but JS object. This not an tag, it isa object 
const root = ReactDOM.createRoot(document.getElementById("root"))


// const jsxheading = (
// <h1 className="heading">Hello this is JSX</h1>
// );


//React component

const Title = () =>(<h1 className="head">Hello this is Component</h1>)

const heading1 = (<h1>This is normal Js code</h1>)

// we can call like this also
// {Title()}
const HeadingComponent = () => (
<div id="conatiner"> 
<Title/> 
{heading1}
<h1 className="heading">This is Heading using React Fcn component</h1>
</div>
);



//root.render(jsxheading)
root.render(<HeadingComponent/>)