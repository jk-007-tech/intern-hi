import React, { useState } from 'react';

export default function NameList() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  const addNameToList = () => {
    setNames([...names, newName]);
    setNewName('');
  };

  return (
    <>
    <input type="text" onChange={(e) => setNewName(e.target.value)}/>
    <button onClick={addNameToList}>Add Name</button>
    <ul>
        {names.map((name,index)=>{
           return <li key={index}>{name}</li>
        })}
    </ul>
    </>
  );
}