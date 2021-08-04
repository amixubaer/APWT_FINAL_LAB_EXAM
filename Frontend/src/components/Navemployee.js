import {Link} from 'react-router-dom';

const Navemployee = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/createjob'>Create New Job</Link> |
            <Link to='/joblist'>Job List</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default Navemployee;