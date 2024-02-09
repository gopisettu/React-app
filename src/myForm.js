import './myStyle.css';


 export const myForm = () => {
  return (
    <div  id="main"className="container">
        <form>
            <lable for="Fname">Enter First name</lable>
            <input type="text" name="Fname" value=" " placeholder="Enter First name"></input><br></br><br></br>
            <lable for="Sname">Enter Second name</lable>
            <input type="text" name="Sname" value=" " placeholder="Enter Second name"></input><br></br><br></br>
            <lable for="gmail">Enter your mail</lable>
            <input type="gmail" name="gmail" value=" " placeholder="Enter your mail"></input><br></br><br></br>
            <lable for="pass">Enter Password</lable>
            <input type="text" name="pass" value=" " placeholder="Enter Password"></input><br></br><br></br>
            <lable for="Cpass">Enter Conform Password</lable>
            <input type="text" name="Cpass" value=" " placeholder="Enter Conform Password"></input><br></br><br></br><br></br>
            <input id="btn" className="btn btn-primary" type="button" name="button" value="SignUp"></input>
            <input className="btn btn-primary"  type="button" name="button" value="Login"></input>
          
        </form>
    
      <h1>Follows Us</h1>
      <button className="btn btn-primary">Follow</button>
    </div>
  );
};


