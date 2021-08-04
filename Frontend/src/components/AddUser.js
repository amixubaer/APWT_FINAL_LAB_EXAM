import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const AddUser = ({ status, callback }) => {
    const { id: eid } = useParams();
    const [id, setId] = useState("");
    const [ename, setEname] = useState("");
    const [cname, setCname] = useState("");
    const [contact, setContact] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (status=='add')
        {
            callback({ id: id, ename: ename, cname: cname, contact: contact, username: username, password: password });
        }
        else
            callback({ id: eid, ename: ename, cname: cname, contact: contact, username: username, password: password});
        history.push('/emplist');
    };
    return (
        <div>
            <h2>
                This is {status} employee page id: {eid}
            </h2>
            <form onSubmit={onSubmit}>
                <label>
                    Id:
                    <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <br />
                <label>
                    Name:
                    <input  type="text" name="ename" value={ename} onChange={(e) => setEname(e.target.value)} />
                </label>
                <br />
                <label>
                    Company Name:
                    <input type="text" name="cname" value={cname} onChange={(e) => setCname(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Contact No:
                    <input type="text" name="contact" value={contact} onChange={(e) => setContact(e.target.value)}
                    />
                </label>
                <br />
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

export default AddUser;