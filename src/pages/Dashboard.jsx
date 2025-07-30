import React, { useState, useEffect } from "react";
// import { collection, getDocs, addDoc, deleteDoc, setDoc, doc, } from "firebase/firestore";
// import { db, auth } from "../firebase";
import UserTable from "../components/UserTable";
import AddClientsModal from "../components/AddClientsModal";
import AddUsersModal from "../components/AddUsersModal";
import {  closeModel,  tableClients,  tableAuth,  handleAddUser,  handleAddClient,  handleDeleteUser,  fetchUsers,} from "../components/functions";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import DataBaseTable from "../Constants/Tables";



export default function Dashboard() {
  
  // const tableClients=DataBaseTable.clients
  // const tableAuth=DataBaseTable.users
  const [users, setClients] = useState([]);
  const [modalState, setModalState] = useState({ show: false, title: null });

  // function closeModel() {
  //   setModalState({ show: false, title: null });
  // }
  useEffect(() => {
    fetchUsers(setClients);
  }, []);

  // const fetchUsers = async () => {
  //   const snapshot = await getDocs(collection(db, tableClients));
  //   const userList = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setClients(userList);
  // };

  // const handleAddUser = async (formData) => {
  //   const { Name, Email, Password } = formData;
  //   if (Name.trim() && Email.trim() && Password.trim()) {
  //     try {
  //       const userCredential = await createUserWithEmailAndPassword(
  //         auth,
  //         Email,
  //         Password,
  //         Name
  //       );
  //       const user = userCredential.user;
  //       await setDoc(doc(db, "users", user.uid), {
  //         Name,
  //         Email,
  //         createdAt: new Date(),
  //       });

  //       closeModel();
  //     } catch (error) {
  //       console.error("Error creating user:", error.message);
  //       alert(error.message); // or show a Toast
  //     }
  //   }
  // };

  // const handleAddClient = async (client) => {
  //   const docReferance = await addDoc(collection(db, tableClients), client);
  //   setClients((prev) => [...prev, { id: docReferance.id, ...client,createdAt: new Date(), }]);
  // };

  // const handleDeleteUser = async (id) => {
  //   await deleteDoc(doc(db, "Users", id));
  //   setClients(users.filter((u) => u.id !== id));
  // };

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
