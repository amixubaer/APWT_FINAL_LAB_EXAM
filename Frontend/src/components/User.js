import {Link} from 'react-router-dom';
import './User.css';

const User = ({id, ename, cname, contact, username,  deletecallback})=>{
    return(
        <div className='user' style={{color:'red'}}>
            <h3>Name: {ename}</h3>
            <p>Company Name: {cname}</p>
            <p>Contact No: {contact}</p>
            <p>Username: {username}</p>
            <button onClick={()=>deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link>
        </div>
    );
}

export default User;