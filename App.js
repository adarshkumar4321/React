
const heading = React.createElement("h1",{id :"heading"},"Hello World from React")
//creating a react elemnt. React element is nothing but JS object. This not an tag, it isa object 
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)
// render function job is to take object and put that up inside root element. render method is converting into tag and put in root
// console.log(heading)


//Nested element

/* 
<div id="parent">
  <div id="child">   
    <h1></h1>
    <h1></h1>
  </div>
</div>
 */
//Reactelemnt(object) = html(what browser understands)

//if we want siblings or more than one elemnt in 3rd place we can pass an array insted of one value
const parent = React.createElement("div", {id:"parent"},
  React.createElement("div", {id:"child"},
   [ React.createElement("h1",{},"Nested Div using React"),React.createElement("h1",{},"1st sibling Nested Div using React")]
  )
)

root.render(parent)