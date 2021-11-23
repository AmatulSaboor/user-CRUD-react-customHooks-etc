import './User.css';
import AddModal from '../addModal/AddModal.js'
import EditModal from '../editModal/EditModal.js'


function User({users, handleDelete, handleCreate, handleEdit}){
    console.log(`inside user`);
    return (
        // User Table
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1>List Of Users</h1>
                            </div>
                            <div className="col-sm-6">
                                <a href="#addUserModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add User</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => 
                            <tr key={user._id}>
                                <td >{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <a href={"#editUserModal"+ user._id} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                    <EditModal user = {user} handleEdit = {handleEdit}/>
                                </td>
                                <td><button onClick={
                                    (e)=>{
                                        console.log(user._id);
                                        fetch(`http://localhost:5500/delete/${user._id}`)
                                        .then( response => response.json())
                                        .then (response => {
                                                console.log(response);
                                                handleDelete(user._id)
                                            })
                                        .catch(err => console.log(err));
                                      }
                                } className="delete" ><i className="material-icons" title="Delete">&#xE872;</i></button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <AddModal handleCreate = {handleCreate}/>
                </div>
            </div>        
        </div>
    )
}

export default User;