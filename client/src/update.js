import axios from "axios";
import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";


const Update = () => {
    const navigate = useNavigate();
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    const [form, setForm] = useState({
        name: '',
        address: '',
        email: '', 
        phoneNumber: ''
    })

    const { id} = useParams();

    useEffect(() => {
        async function fetch(){
            const response = await axios.get(`${API_URL}/get/${id}`);
            console.log(response)
            setForm({...response.data.response})
            
        }
        fetch();
    }, [])

    function handleChange(event){
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    async function handleSubmit(event){
        event.preventDefault();
        try{
            const response = await axios.post(`${API_URL}/update`, {form, id})
            if(response){
                alert('Data Has been Update SuccessFully');
                navigate('/data')
            }

        }catch(error){

        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center flex-column">
            <h1>Update the Data</h1>
           <form className="w-50 mt-3" >
            <div className="mt-2">
                <input
                    type="text"

                    placeholder="Enter your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    name="name"
                />
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Enter your Address"
                    value={form.address}
                    onChange={handleChange}
                    className="form-control"
                    name="address"
                />
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Enter your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    name="email"
                />
            </div>
            <div className="mt-2">
                <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                    name="phoneNumber"
                />
            </div>
            <div className="mt-2">
                <button type="button" className="btn btn-lg btn-primary w-100" onClick={handleSubmit} > Update Data </button>
            </div>
           </form>
        </div>
    )
}

export default Update;