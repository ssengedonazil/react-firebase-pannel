import React from "react";

export default function UserTable({ users, onUpdate, onDelete, onAdd }) {
  return (
    <div>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">Client List</h1>
        <div className="d-flex justify-between ga">
          <button
            className="btn btn-primary"
            onClick={() => {
                        onAdd("Client");
            }} // ✅ optional add handler
          >
            Add Client(s)
          </button>

          <button
            className="btn btn-warning mx-3"
            onClick={() => {
              onAdd('Users')
            }} // ✅ optional add handler
          >
            Add User(s)
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user["Full-name"]}</td>
                <td>{user.Email}</td>
                <td>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => onUpdate(user)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
