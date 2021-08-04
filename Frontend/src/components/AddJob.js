import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const AddJob = ({ status, callback }) => {
    const { id: eid } = useParams();
    const [id, setId] = useState("");
    const [cname, setCname] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");

    //const [user, setUser] = useState({id:'',name: '', dept: ''});

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        if (status=='add')
        {
            callback({ id: id, cname: cname, title: title, location: location, salary: salary });
        }
        else
            callback({ id: eid, cname: cname, title: title, location: location, salary: salary });
        history.push('/joblist');
    };
    return (
        <div>
            <h2>
                This is {status} Job page id: {eid}
            </h2>
            <form onSubmit={onSubmit}>
                <label>
                    Id:
                    <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
                <br />
                <label>
                    Company Name:
                    <input type="text" name="cname" value={cname} onChange={(e) => setCname(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Job Title:
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Job Location:
                    <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Salary:
                    <input type="text" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddJob;