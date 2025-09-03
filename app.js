/**
 * <div id="parent">
 *      <div id= "child1">
 *          <h1> I'm h1 tag</h1>
 *          <h2> I'm h2 tag</h2>
 *      </div>
 *  *   <div id = "child2">
 *          <h1> I'm h1 tag</h1>
 *          <h2> I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 */

/** this is react code without using JSX */
/** React.creatElement ("tags", {props}, "children") */
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div",{}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]), React.createElement("div",{}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")])])
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent)



const heading = React.createElement("h1", {id:"heading"}, "Hello world from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);