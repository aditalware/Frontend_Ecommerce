import { Button } from 'bootstrap'
import React from 'react'
import {Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,
    Collapse,NavItem,} from 'reactstrap'
    import Modal from 'react-modal';


    
function Editor(props){
  const [name,setName]=React.useState('');
  const [pass,setPass]=React.useState('');

  
  return(<Modal 
  isOpen={props.open}

  >
   
        <form onSubmit={(e)=>{e.preventDefault(); props.handleSubmit({username:name,password:pass});props.toggle(false) }}>
           <i className="fa fa-close close"  onClick={()=>{props.toggle(false); }}></i> 

                    <div className={"modal-div"}>
                      <div >

                        <label>Username: </label>
                        <input type="text" name="username" placeholder={"Enter username"} onChange={(e)=>{setName(e.target.value)}}/>
                      </div>
                        <br></br>

                        <div>

                        <label>Password: </label>
                        <input type="password" name="password" placeholder={"Enter password"} onChange={(e)=>{setPass(e.target.value)}}/>
                        </div>
                        <br></br>
                        <button type="submit" value="Done" className="mod">Done</button>
                    </div>
        </form>

  </Modal>)
}


function Signup(props){
  const [name,setName]=React.useState('');
  const [username,setUserName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const [pass,setPass]=React.useState('');


  
  return(<Modal 

  isOpen={props.open}

  >
   
        <form onSubmit={(e)=>{e.preventDefault(); props.handleSSubmit({name:name,username:username,password:pass,email:email});
        setName('');setUserName('');setEmail('');setPass('');
        props.toggle(false) }}>
           <i className="fa fa-close close"  onClick={()=>{props.toggle(false); }}></i> 

                    <div className={"modal-div"}>
                         <div >

                        <label>Full Name: </label>
                        <input type="text" name="name" placeholder={"Enter Full Name"} onChange={(e)=>{setName(e.target.value)}}/>
                      </div>

                        <br></br>
                        <div >

                            <label>User name: </label>
                            <input type="text" name="username" placeholder={"Enter UserName"} onChange={(e)=>{setUserName(e.target.value)}}/>
                            </div>

                            <br></br>
   
                            <div >

                        <label>Email ID: </label>
                        <input type="text" name="email" placeholder={"Enter Email ID"} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <br></br>
                        <div>

                        <label>Password: </label>
                        <input type="password" name="password" placeholder={"Enter password"} onChange={(e)=>{setPass(e.target.value)}}/>
                        </div>
                        <br></br>
                        <button type="submit" value="Done" className="mod">Done</button>
                    </div>
        </form>

  </Modal>)
}


function Header(props) {

     const[isOpen,setOpen]=React.useState(false);
     const[isSOpen,setSOpen]=React.useState(false);

    return (
        <div>
             <Navbar dark expand="md">
        <div className="navbar-space">
      <Nav navbar>
      <NavItem style={{listStyle:"none" }}>
             <span className="fa fa-home fa-lg"></span>&nbsp;
             Home
      </NavItem>
      </Nav>


        <Nav  navbar className="login" style={{marginLeft:"10px"}}>
            
        {!props.login? 
                 <NavItem style={{listStyle:"none",cursor:"pointer"}} onClick={()=>{setOpen(true)}}>
                <span className="fa fa-sign-in fa-lg"></span>&nbsp;
                  Login
                </NavItem>:
                <NavItem style={{listStyle:"none",cursor:"pointer"}} onClick={()=>{localStorage.clear(); props.setLogin(false)}}>
                <span className="fa fa-sign-in fa-lg"></span>
                  Logout
                </NavItem>
          }
        </Nav>

        <Nav navbar style={{marginLeft:"10px"}}>
        <NavItem style={{listStyle:"none",cursor:"pointer"}} onClick={()=>{setSOpen(true)}}>
        <span className="fa fa-address-book fa-lg"></span> &nbsp;
         Signup

                </NavItem>
        
        </Nav>


        <h3 style={{lineHeight:"2",marginLeft:"24%"}}>
          Welcome to E- Mart
        </h3>
        
        </div>
      </Navbar>
          <Editor
        open={isOpen}
        toggle={setOpen}
        handleSubmit={props.handleSubmit}
        />
        <div className="signups">

         <Signup
        open={isSOpen}
        toggle={setSOpen}
        handleSSubmit={props.handleSSubmit}
        />
        </div>



        </div>
    )
}

export default Header
