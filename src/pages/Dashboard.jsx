import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import AddClientsModal from "../components/AddClientsModal";
import AddUsersModal from "../components/AddUsersModal";
import {  closeModel,  tableClients,  tableAuth,  handleAddUser,  handleAddClient,  handleDeleteUser,  fetchUsers,} from "../components/functions";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 



export default function Dashboard() { 
  const [users, setClients] = useState([]);
  const [modalState, setModalState] = useState({ show: false, title: null });

 
  useEffect(() => {
    fetchUsers(setClients);
  }, []);

   ;



  return (
    <div className="container mt-5">
      <UserTable
        users={users}
        onAdd={(val) => setModalState({ show: true, title: val })}
        onUpdate={(user) => alert("Update not implemented")}
        onDelete={(vals) => handleDeleteUser(vals, users, setClients)}
      />

      <AddClientsModal
        show={modalState.title === "Client" && modalState.show}
        onClose={()=>closeModel(setModalState)}
        onAdd={(vals) => handleAddClient(vals, setClients)}
      />

      <AddUsersModal
        show={modalState.title === "Users" && modalState.show}
        onClose={()=>closeModel(setModalState)}
        onAdd={(vals) => handleAddUser(vals, createUserWithEmailAndPassword)}
      />
    </div>
  );
}
