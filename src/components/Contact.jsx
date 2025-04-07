import React,{useContext} from 'react'
import { DataContext } from './DataContext';


const Contact = () => {
    const { formList } = useContext(DataContext);
  return (
    <div className="p-6">
  
     {formList.map((data, index) => (
        <div key={index} className="mb-4 p-4 border rounded bg-white shadow inline-block">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Contact:</strong> {data.contact}</p>
        </div>
      ))
    }
  </div>
  )
}

export default Contact