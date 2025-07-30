import DataBaseTable from "../Constants/Tables";
import { collection, getDocs, addDoc, deleteDoc, setDoc, doc, } from "firebase/firestore";
import { db, auth } from "../firebase";;
// import {  createUserWithEmailAndPassword } from "firebase/auth";
// import DataBaseTable from "../Constants/Tables";
const tableClients = DataBaseTable.clients;
const tableAuth = DataBaseTable.users;
const handleAddUser = async (formData, createUserWithEmailAndPassword) => {
  const { Name, Email, Password } = formData;
  if (Name.trim() && Email.trim() && Password.trim()) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password,
        Name
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        Name,
        Email,
        createdAt: new Date(),
      });

      closeModel();
    } catch (error) {
      console.error("Error creating user:", error.message);
      alert(error.message); // or show a Toast
    }
  }
};

const handleAddClient = async (client, setClients) => {
  const docReferance = await addDoc(collection(db, tableClients), client);
  setClients((prev) => [
    ...prev,
    { id: docReferance.id, ...client, createdAt: new Date() },
  ]);
};

const handleDeleteUser = async (id, users, setClients) => {
  await deleteDoc(doc(db, "Users", id));
  setClients(users.filter((u) => u.id !== id));
};
const fetchUsers = async (setClients) => {
  const snapshot = await getDocs(collection(db, tableClients));
  const userList = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setClients(userList);
};

function closeModel(setModalState) {
  setModalState({ show: false, title: null });
}

export {
    closeModel,
   
  tableClients,
  tableAuth,
  handleAddUser,
  handleAddClient,
  handleDeleteUser,
  fetchUsers,
};
