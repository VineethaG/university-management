import { Button } from "@material-ui/core";
import  React, {useEffect, useState}  from "react"



function PracticeLogin(props){
    let [color, setColor] = useState("red");
    let [count, setCount] = useState(0);
    var increment = () =>{
        setCount(count+1)
        setColor("Green");
    } 
    
return(
    <div>
        
        hello {color}
        <div>{count}</div>
        <Button onClick={increment}> Click Me! </Button>
    </div>
);

}

// class Login extends React.Component{
//     constructor() {
//         super();
//         this.state = {color: "red"};
//       }
//     render() {
//         return <h2>Hi, I am a Car!</h2>;
//       }        
// }

export default PracticeLogin;