import React, { useEffect, useState } from "react";

function NewDog({onAddDog}){
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: 0,
        weight: 0
      })
    
      function handleChange(e){
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        })
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/dogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((formData) => onAddDog(formData))
          setFormData({
            name: "",
            breed: "",
            age: "",
            weight: ""
          })
      }
    return(
    <form className="new-order" onSubmit={handleSubmit}>
      <h3>Add New Dog</h3>
        Dog's Name: <input type="text" name="name" value={formData.name} onChange={handleChange}/><br/>
        Item: <input type="text" name="breed" value={formData.breed} onChange={handleChange}/><br/>
        Quantity: <input type="number" name="age" value={formData.age} onChange={handleChange}/><br/>
        Pickup Date: <input type="number" name="weight" value={formData.weight} onChange={handleChange}/><br/>
      <button type="submit">Add Dog</button>
    </form>
    )
}
export default NewDog;