import  React, {useState} from "react"
import "./App.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


function Login(){
const styles = makeStyles((theme) => ({
    pageBGColor:{
        backgroundColor: "aliceblue"
    },
    gridStyle: {
        padding: theme.spacing(2),
      },
    }));

const classes = styles();
let[emailId, setEmailId] = useState("");
let[password, setPassword] = useState("");

// let setEmailId = () => {

// }

// class Login extends React.Component{
//     constructor()
// {
//     super();
// this.state = {emailId:"", password:""}

// }

// }
const submitLogin = () => {
    console.log(emailId);
}

return(
    <div className={classes.pageBGColor} >
       <h1>University of Missouri - Kansas City</h1>

      <Grid className={classes.gridStyle} container spacing={3}>
            <Grid item xs={8}>
         {/* <img  alt="complex" src="./umkc.jpg" /> */}
            <img  alt="not found" 
            src="https://www.tmc.edu.sg/wp-content/uploads/2019/08/umkc-campus-photo.jpg" 
             width="800" height="500"/>
            </Grid>

        <Grid item xs={4}>
            <h2>Welcome, Please login or Sign up!</h2>
            <p>To keep conneted with us please login with your personal information with email address and password</p>
            <form onSubmit={submitLogin}>
            <input type="text" placeholder="Enter Email Address" name="emailId" 
             onChange={(event) => setEmailId(event.target.value)} required/>
             {console.log(emailId)}
            <input type="password" placeholder="Enter Password" name="password" required/>
            
            <Box display="flex" style={{ width: '80%' }} >

                <Box flexGrow={1} >
                    <input type="checkbox" value="rememberMe" id="rememberMe" name="rememberMe"/>
                    <label >Remember Me</label>
                </Box>
                <Box>
                    <a href >Forgot Password?</a>
                </Box>
            </Box>

            

            <br/>

            <Grid container>
                <Grid item xs={4}>
                <Button variant="contained" color="primary">Login Now</Button>
                </Grid>
                <Grid xs={6}>
                <Button variant="contained" > Create Account</Button>
                </Grid>
            </Grid>
            <p>or you can join with</p>
            <Grid container>
                <Grid item xs={1}><FacebookIcon/></Grid>
                <Grid xs={1}><TwitterIcon/></Grid>
            </Grid>
    </form>
        </Grid>
        
      </Grid>

    </div>

);

}

export default Login;