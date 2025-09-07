
import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      console.log("Response:", response.data);
      alert("Data sent to backend!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br /><br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
