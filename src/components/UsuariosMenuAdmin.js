import React, { useEffect, useState } from 'react';

const UsuariosMenuAdmin = () => {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_USERS_URL}/api/users/all`); 
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await response.json();
      setUsers(data);  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      try {
        const response = await fetch(`${process.env.REACT_APP_USERS_URL}/api/users/${userId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error al eliminar el usuario');
        }
        
        setUsers(users.filter(user => user._id !== userId));
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Administración de Usuarios</h1>

      {loading ? (
        <p className="text-white text-lg">Cargando usuarios...</p>
      ) : error ? (
        <p className="text-red-500 text-lg">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full text-left bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Nombre Completo</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Dirección</th>
                <th className="py-3 px-4">Teléfono</th>
                <th className="py-3 px-4">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-gray-100 transition-colors">
                    <td className="py-2 px-4">{user._id}</td>
                    <td className="py-2 px-4">{user.fullname}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <td className="py-2 px-4">{user.address || 'No disponible'}</td>
                    <td className="py-2 px-4">{user.number || 'No disponible'}</td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => deleteUser(user._id)} 
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-700">No se encontraron usuarios.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsuariosMenuAdmin;
