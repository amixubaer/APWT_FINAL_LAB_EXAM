import { useState } from "react";
import UserList from "./components/UserList";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import Navhome from "./components/Navhome";
import Navemployee from "./components/Navemployee";
import AddUser from "./components/AddUser";
import AddJob from "./components/AddJob";
import SearchEmployee from "./components/SearchEmployee";
import Login from "./components/Login";
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

    const login = async (info) => { 

        const axios = require('axios').default;

        const type = await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/login',
            data:info,
          });

        const check = type.data;
        
        return check;
    };
  

    const addUsers = (newUser) => { 

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/addUser',
            //data: JSON.stringify(newUser)
            data:newUser,
          });
          setUsers([...myuser, newUser]);
          console.log(newUser);
    };
    


    const editUsers = (newUser) => {

        const data = myuser.filter((user) => user.id !== newUser.id);
        setUsers([...data, newUser]);

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/editUser',
            data:newUser,
          });
        
    };


    const deleteCallback = (id) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/deleteUser',
            data:{
                id:id,
            }
          });

        const data = myuser.filter((user) => user.id !== id);
        setUsers(data);
    };

    const searchUsers = (id) => {
        const data = myuser.filter((user) => user.id === id.id);
        setUsers(data);
    };



    const addJobs = (newJob) => {
        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/addJob',
            data:newJob,
          });
          setJobs([...myjob, newJob]);
          console.log(newJob);
    };


    const editJobs = (newJob) => {

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/editJob',
            data:newJob,
          });

        const data = myjob.filter((job) => job.id !== newJob.id);
        setJobs([...data, newJob]);

    };


    const deleteCallbackJob = (id) => {

        const axios = require('axios').default;

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/deleteJob',
            data:{
                id:id,
            }
          });

        const data = myjob.filter((job) => job.id !== id);
        setJobs(data);
    };


    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/login">
                    <h2>Login Page</h2>
                    <Login callback={login}/>
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
                    <AddJob status="add" callback={addJobs} />
                </Route>
                <Route path="/editjob/:id">
                    <Navemployee />
                    <AddJob status="edit" callback={editJobs} />
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