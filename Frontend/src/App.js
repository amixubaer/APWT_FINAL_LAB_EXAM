import { useState } from "react";
import UserList from "./components/UserList";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Navhome from "./components/Navhome";
import Navemployee from "./components/Navemployee";
import AddUser from "./components/AddUser";
import SearchEmployee from "./components/Navemployee";
import Login from "./components/Login";
import { users } from "./usersData";
import { useFetch } from './components/useFetch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

    const [myuser, setUsers] = useState([]);
    //const url = 'https://jsonplaceholder.typicode.com/posts';
    const url = 'http://127.0.0.1:8000/api/userlist';
    useFetch(url, setUsers);


    const [myjob, setJobs] = useState([]);
    const url2 = 'http://127.0.0.1:8000/api/joblist';
    useFetch(url2, setJobs);
  

    const addUsers = (newUser) => {
        const url = 'http://127.0.0.1:8000/api/addUser';

        fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })

        // .then((response) => response.json())
        // .then((data) => {
        //     console.log("Success:", data);
        // })
        // .catch((error) => {
        //     console.error("Error:", error);
        // });
        
        console.log(newUser);
        setUsers([...myuser, newUser]);   
    };


    const editUsers = (newUser) => {
        const data = myuser.filter((user) => user.id !== newUser.id);
        setUsers([...data, newUser]);
    };


    const deleteCallback = (id) => {
        const data = myuser.filter((user) => user.id !== id);
        setUsers(data);
    };

    const searchUsers = (id) => {
        const data = myuser.filter((user) => user.id == id);
        setUsers(data);
    };



    const addJobs = (newUser) => {
        const url = 'http://127.0.0.1:8000/api/addUser';

        fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })

        // .then((response) => response.json())
        // .then((data) => {
        //     console.log("Success:", data);
        // })
        // .catch((error) => {
        //     console.error("Error:", error);
        // });
        
        console.log(newUser);
        setUsers([...myuser, newUser]);   
    };


    const editJobs = (newUser) => {
        const data = myuser.filter((user) => user.id !== newUser.id);
        setUsers([...data, newUser]);
    };


    const deleteCallbackJob = (id) => {
        const data = myjob.filter((job) => job.id !== id);
        setJobs(data);
    };


    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/login">
                    <h2>Login Page</h2>
                    <Login />
                </Route>
                
                <Route exact path="/">
                    <Navhome />
                    <h2>Welcome Home</h2>
                </Route>

                <Route path="/admin">
                    <Navbar />
                    <h2>Welcome to the  Admin panel...</h2>
                </Route>

                <Route path="/employee">
                    <Navemployee />
                    <h2>Welcome to the  Employee panel...</h2>
                </Route>



                <Route path="/emplist">
                    <Navbar />
                    <div>
                        <UserList list={myuser} callback={deleteCallback} />
                    </div>
                </Route>

                <Route path="/Create">
                    <Navbar />
                    <AddUser status="add" callback={addUsers} />
                </Route>
                
                <Route path="/searchemployee">
                    <Navbar />
                    <SearchEmployee  callback={searchUsers} />
                </Route>
                
                <Route path="/edit/:id">
                    <Navbar />
                    <AddUser status="edit" callback={editUsers} />
                </Route>
                


                <Route path="/joblist">
                    <Navemployee />
                    <div>
                        <JobList list={myjob} callback={deleteCallbackJob} />
                    </div>
                </Route>
                <Route path="/Createjob">
                    <Navemployee />
                    <AddUser status="add" callback={addUsers} />
                </Route>
                <Route path="/editjob/:id">
                    <Navemployee />
                    <AddUser status="edit" callback={editUsers} />
                </Route>



                {/* <Route path='/edit/:id' children={<AddUser status='edit'/>}></Route> */}
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;