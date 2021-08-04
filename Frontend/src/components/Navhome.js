import {Link} from 'react-router-dom';

const Navhome = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/admin'>Admin</Link> |
            <Link to='/employee'>Employee</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default Navhome;