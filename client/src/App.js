import { useState } from "react";
import axios from 'axios';


const App = () => {
const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phoneNumber: ''
})
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function handleChange(event){
    const {name, value} = event.target;
    setForm({...form, [name]: value});
}


    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await axios.post(`${API_URL}/create`, form);
            console.log(response);
            if (response.status === 200) {
                alert('Form data has been submitted successfully');
                setForm({
                    name: '',
                    address: '',
                    email: '',
                    phoneNumber: ''
                })
            } else {
                throw new Error('Request failed with status ' + response.status);
            }
        } catch (error) {
           if(error.response){
            alert(error.response.data.error)
           }
        }
    }



  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <h1 className="bg-dark text-white p-4 w-50 text-center">Add user to Database</h1> <br />
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mt-2">
          <input 
            type="text" 
            placeholder="Enter your name" 
            name="name"
            onChange={handleChange}
            value={form.name}
            className="form-control"
            />
        </div>
        <div className="mt-2">
          <input 
            type="text" 
            placeholder="Enter your address" 
            name="address"
            value={form.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <input
            type="number"
            placeholder="Enter your phoneNumber"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <button type="submit"
           className="btn btn-dark btn-lg w-100"
          >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
