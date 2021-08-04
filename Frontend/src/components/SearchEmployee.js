import { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const SearchEmployee = ({callback}) => {
    const [id, setId] = useState("");

    const history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
            callback({ id: id});
            }
            history.push('/UserList');
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    User Name:
                    <input type="number" name="id" value={id} onChange={(e) => setId(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SearchEmployee;