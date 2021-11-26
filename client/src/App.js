import './App.css';
import User from './components/user/User.js'
import React from "react";
import useFetch from './custom-hooks/useFetch';

function App() {
  const {data:users, isLoading, error, handleDelete, handleEdit, handleCreate} = useFetch('http://localhost:5500');
  console.log(`after callback`);

  return (
    <div>
      {/* <Modal isOpen={open} onRequestClose={closeModal}> <h1>hello</h1><button>Submit</button> </Modal> */}
      {error && <div>{error}</div>}
      {isLoading && <div>{isLoading}</div>}
      {users && <User users = {users} handleDelete = {handleDelete} handleCreate={handleCreate} handleEdit ={handleEdit}/>}
    </div>
  );
}

export default App;
