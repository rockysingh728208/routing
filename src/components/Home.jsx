import React,{useContext,useState} from 'react'

import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';
const Home = () => {
    const { addData } = useContext(DataContext);
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      contact: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addData(formData);
      setFormData({ name: "", email: "", contact: "" });
      navigate("/contact");
    };
  

  return (
    <div>
     <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-lg bg-gray-100 w-96">
        <h2 className="text-xl font-bold mb-4">Set Form Data</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter Contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Home