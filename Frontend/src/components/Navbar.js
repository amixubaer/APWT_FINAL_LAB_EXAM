import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/create'>Create New Employee</Link> |
            <Link to='/emplist'>Employee List</Link> |
            <Link to='/searchemployee'>Search Employee</Link> |
            <Link to='/login'>Logout</Link>
        </div>
    );
}

export default Navbar;