import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const Item = data.find(item => item.id == id);
    if (Item) {
      setName(Item.name);
      setSubject(Item.subject);
      setSelectedItem(Item);
    } else {
      setName("");
      setSubject("");
      setSelectedItem(null);
    }
  }, [id, data]);

  const handleUpdate = () => {
    if (selectedItem) {
      const updatedData = data.map(item =>
        item.id == id ? { ...item, name, subject } : item
      );
      setData(updatedData);
      navigate("/");
    }
  };

  return (
    
    <div className="main">
      <div className='main1'>
      <h1>Update</h1>
      
      <div className="box1">
      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => setId(e.target.value)}
      />
      {selectedItem && (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
      </div>
 </div>
    </div>
);
}
