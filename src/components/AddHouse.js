import React, { useState } from 'react';

const AddHouse = () => {
  const [formData, setFormData] = useState({
    house_name: '',
    house_image: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://3001/api/v1/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirecting user here
      } else {
        // Handle error here
      }
    } catch (error) {
      // Error handling here
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Add House</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="house_name" value={formData.house_name} onChange={handleChange} placeholder="House Name" />
        {/* Details coming soon */}
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default AddHouse;
