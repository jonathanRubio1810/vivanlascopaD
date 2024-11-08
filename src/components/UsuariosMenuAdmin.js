import React, { useEffect, useState } from 'react';

const UsuariosMenuAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_USERS_URL}/all`);
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
        const response = await fetch(`${process.env.REACT_APP_USERS_URL}/${userId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error al eliminar el usuario');
        }
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      } catch (err) {
        console.error('Error al eliminar el usuario:', err.message);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">Bienvenido al menú de administradores de usuarios</h1>

      {loading ? (
        <p className="text-white">Cargando usuarios...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left text-black">ID</th>
                <th className="py-2 px-4 border-b text-left text-black">Nombre Completo</th>
                <th className="py-2 px-4 border-b text-left text-black">Email</th>
                <th className="py-2 px-4 border-b text-left text-black">Dirección</th>
                <th className="py-2 px-4 border-b text-left text-black">Teléfono</th>
                <th className="py-2 px-4 border-b text-left text-black">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-black">{user._id}</td>
                    <td className="py-2 px-4 border-b text-black">{user.fullname}</td>
                    <td className="py-2 px-4 border-b text-black">{user.email}</td>
                    <td className="py-2 px-4 border-b text-black">{user.address || 'No disponible'}</td>
                    <td className="py-2 px-4 border-b text-black">{user.number || 'No disponible'}</td>
                    <td className="py-2 px-4 border-b">
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
                  <td colSpan="6" className="py-2 px-4 text-center text-black">No se encontraron usuarios bro.</td>
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
