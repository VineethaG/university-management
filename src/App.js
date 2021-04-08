import "./App.css"
import "./App.style"
import { withStyles } from '@material-ui/core'
import styles from "./App.style"
import PracticeLogin from "./PraticeLogin"
import Login from "./login"


// const App = (props) => {
//     const {classes} = props;
//     return ( 
//         <div>
//            <h1 className={classes.App} > Hello!</h1>
//            <PracticeLogin/>
//             </div>
            
//      );
// }
const App = () => {
    return ( 
        <div>
            <Login/>
        </div>
            
     );
}
 
// export default withStyles(styles)(App);
export default App;