import { useState } from "react";
//import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Login = ({callback}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        const check = await callback({username: username, password: password });
        
        console.log(check);

        if(check==='admin')
            history.push('/admin');
        else if(check==='employee')
            history.push('/employee');
    };
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    User Name:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;