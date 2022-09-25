import React, {useState} from "react";
import BaseHoc from "../hoc/BaseHoc";

// function FunctionalComponent(){
//     return(
//         <div>
//             <p>This is Functional Component</p>
//         </div>
//     );
// }

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);
    const[changeName,setChangeName] = useState("");
    const substractConst = () => {
        setCount(count-1);
    }
    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={
                () => setCount(count+1)
            }>Click me to increment</button>
            {/* <button onClick={
                () => setCount(count-1)
            }>Click me to decrement</button>  */}
            <button onClick={substractConst}>Click me to decrement</button>
            <h1>{count}</h1>
            <h1>My name is {props.name} I am {props.age}, I work for {props.company}.</h1>
            <input onChange={(e)=>setChangeName(e.target.value)} />
            <button onClick={() => props.setName(changeName)}>Change name to Vaibhav</button>
        </div>
    );
}

export default BaseHoc(FunctionalComponent);