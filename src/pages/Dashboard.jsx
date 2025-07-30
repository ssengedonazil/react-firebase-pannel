import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import UserTable from '../components/UserTable';
import AddUserModal from '../components/AddUserModal'; // 🔁 Import modal

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'Users'));
    const userList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUsers(userList);
  };

  const handleAddUser = async (user) => {
    const docReferance = await addDoc(collection(db, 'Users'), user);
    setUsers(prev => [...prev, { id: docReferance.id, ...user }]);
  };

  const handleDeleteUser = async (id) => {
    await deleteDoc(doc(db, 'Users', id));
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="container mt-5">
      <UserTable
        users={users}
        onAdd={() => setShowModal(showModal => !showModal)}
        onUpdate={(user) => alert('Update not implemented')}
        onDelete={handleDeleteUser}
      />

      <AddUserModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddUser}
      />
    </div>
  );
}
