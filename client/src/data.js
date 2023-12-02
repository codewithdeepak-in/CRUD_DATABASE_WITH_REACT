import { useEffect, useState} from 'react';
import axios from 'axios';
import App from './App';
import { useNavigate } from 'react-router-dom';


const Data = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    useEffect(() => {
        async function fetch(){
            try{
                const response = await axios.get(`${API_URL}/data`);
                if(response){
                    setData(response.data.data);
                }
            }catch(error){
                alert(error);
            }
        }
        fetch();
    }, [])


    async function handleDelete(id) {
        if (window.confirm('Are you sure you want to delete data?')) {
            try {
                const response = await axios.get(`${API_URL}/delete/${id}`);
                alert(response.data.message);
                setData(response.data.data)

            } catch (error) {
                alert(error.message);
            }
        }
    }

    function handleUpdate(id){
        navigate(`/update/${id}`)
    }
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="w-100">
                <table className="table table-bordered table-hover table-striped table-dark table-responsive">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data ? 
                                data.map((item) => (
                                    <tr key={item._id}>
                                       <td>{item.name}</td>
                                       <td>{item.address}</td>
                                       <td>{item.email}</td>
                                       <td>{item.phoneNumber }</td>
                                       <td><button onClick={() => handleUpdate(item._id)} className='btn btn-primary btn-sm'>Update</button></td>
                                       <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                ))
                                : <tr className='spinner-border'></tr>
                        }
                    </tbody>
            </table>
                {data ? data.length == 0 ?  <div className='p-3 bg-danger text-white w-100 text-center' >
                    No User Data Exists
                </div>: null : null}
            </div>
        </div>
    )
}

export default Data;    