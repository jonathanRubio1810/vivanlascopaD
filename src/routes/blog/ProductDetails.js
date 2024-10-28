import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

// Importa las imágenes
import productImage1 from '../../assets/images/catalogo/0X4A2101.jpg';
import productImage2 from '../../assets/images/catalogo/0X4A2102.jpg';
import productImage3 from '../../assets/images/catalogo/0X4A2103.jpg';
import productImage4 from '../../assets/images/catalogo/0X4A2104.jpg';
import productImage5 from '../../assets/images/catalogo/0X4A2105.jpg';
import productImage6 from '../../assets/images/catalogo/0X4A2107.jpg';
import productImage7 from '../../assets/images/catalogo/0X4A2108.jpg';
import productImage8 from '../../assets/images/catalogo/0X4A2109.jpg';
import productImage9 from '../../assets/images/catalogo/0X4A2118.jpg';
import productImage10 from '../../assets/images/catalogo/0X4A2119.jpg';
import productImage11 from '../../assets/images/catalogo/0X4A2130.jpg';
import productImage12 from '../../assets/images/catalogo/0X4A2139.jpg';
import productImage13 from '../../assets/images/catalogo/0X4A2145.jpg';
import productImage14 from '../../assets/images/catalogo/0X4A2147.jpg';
import productImage15 from '../../assets/images/catalogo/0X4A2149.jpg';
import productImage16 from '../../assets/images/catalogo/0X4A2154.jpg';
import productImage17 from '../../assets/images/catalogo/0X4A2185.jpg';
import productImage18 from '../../assets/images/catalogo/0X4A2186.jpg';
import productImage19 from '../../assets/images/catalogo/0X4A2198.jpg';
import productImage20 from '../../assets/images/catalogo/0X4A2205.jpg';



// Función para generar precios aleatorios
const getRandomPrice = () => {
  return parseFloat((Math.random() * 100 + 10).toFixed(2)); 
};

// Datos de productos con imágenes importadas
const products = [
  { id: 1, name: 'Libreta Sirena', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 1', image: productImage1 },
  { id: 2, name: 'Libreta Auto', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 2', image: productImage2 },
  { id: 3, name: 'Libreta Helado', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 3', image: productImage3 },
  { id: 4, name: 'Libreta Unicornio', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 4', image: productImage4 },
  { id: 5, name: 'Libreta Corazon', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 5', image: productImage5 },
  { id: 6, name: 'Libreta Ovni', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 6', image: productImage6 },
  { id: 7, name: 'Libreta Dinosaurio', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 7', image: productImage7 },
  { id: 8, name: 'Libreta Mariposa', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 8', image: productImage8 },
  { id: 9, name: 'Recipiente transparente blanco', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 9', image: productImage9 },
  { id: 10, name: 'Recipiente transparente rosa', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 10', image: productImage10 },
  { id: 11, name: 'Toper hermetico', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 11', image: productImage11 },
  { id: 12, name: 'Paquete de colores', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 12', image: productImage12 },
  { id: 13, name: 'Tarjeta de seguridad', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 13', image: productImage13 },
  { id: 14, name: 'Toper con Salsera', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 14', image: productImage14 },
  { id: 15, name: 'Almuerzo portatil', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 15', image: productImage15 },
  { id: 16, name: 'Paquete de colores', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 16', image: productImage16 },
  { id: 17, name: 'Robot armable de 1500 piezas', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 17', image: productImage17 },
  { id: 18, name: 'Robot armable de 1700 piezas', category: 'Categoría 3', price: `$${getRandomPrice()}`, description: 'Descripción del producto 18', image: productImage18 },
  { id: 19, name: 'Carrito movible', category: 'Categoría 1', price: `$${getRandomPrice()}`, description: 'Descripción del producto 19', image: productImage19 },
  { id: 20, name: 'Mesa para eventos', category: 'Categoría 2', price: `$${getRandomPrice()}`, description: 'Descripción del producto 20', image: productImage20 },
];
const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceOrder, setPriceOrder] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el campo de búsqueda
  const productsPerPage = 10;
  const [cart, setCart] = useState([]); // Estado para el carrito
  const [totalPrice, setTotalPrice] = useState(0); // Estado para el precio total del carrito
  const [cartVisible, setCartVisible] = useState(false); // Estado para controlar la visibilidad de la lista del carrito
  const [loginVisible, setLoginVisible] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // Estado para manejar la autenticación
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza la ventana al inicio cuando el componente se monta
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePriceOrderChange = (event) => {
    setPriceOrder(event.target.value);
    setCurrentPage(1); // Reset to first page on price order change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  const getPriceValue = (price) => {
    return parseFloat(price.replace('$', ''));
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (priceOrder === 'low-to-high') {
      return getPriceValue(a.price) - getPriceValue(b.price);
    } else if (priceOrder === 'high-to-low') {
      return getPriceValue(b.price) - getPriceValue(a.price);
    } else {
      return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalPrice(prevPrice => prevPrice + getPriceValue(product.price));
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const resetCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const handlePurchase = () => {
    if (!authenticated) {
      alert('Por favor, inicie sesión para realizar la compra.');
      showLoginForm(); // Muestra el formulario de inicio de sesión
      return;
    }
    alert(`Compra realizada. Total a pagar: $${totalPrice.toFixed(2)}`);
    navigate('/checkout', { state: { cart, totalPrice } });
    resetCart();
  };

  const handleCancel = () => {
    resetCart();
    setCartVisible(false);
  };
   // Función para mostrar el formulario de inicio de sesión
   const showLoginForm = () => {
    setLoginVisible(true);
  };

  // Función para cerrar el formulario de inicio de sesión
  const closeLoginForm = () => {
    setLoginVisible(false);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    // Simulación de autenticación, por ejemplo, validando campos de usuario y contraseña
    setAuthenticated(true);
    closeLoginForm();
  };
  return (
    <motion.div
      className="product-details-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="filter-bar">
        <div className="filter-options">
          <div className="filter-item">
            <label htmlFor="category">Categoría:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">Todas</option>
              <option value="Categoría 1">Categoría 1</option>
              <option value="Categoría 2">Categoría 2</option>
              <option value="Categoría 3">Categoría 3</option>
            </select>
          </div>
          <div className="filter-item">
            <label htmlFor="price">Ordenar por precio:</label>
            <select id="price" value={priceOrder} onChange={handlePriceOrderChange}>
              <option value="all">Todos</option>
              <option value="low-to-high">Menor a mayor</option>
              <option value="high-to-low">Mayor a menor</option>
            </select>
          </div>
          <div className="filter-item right">
            <label htmlFor="search">Buscar:</label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar producto"
            />
          </div>
        </div>
        <div className="cart-info" onClick={toggleCartVisibility}>
          <FaShoppingCart className="cart-icon" />
          {cart.length > 0 && (
            <>
              <div className="cart-count">{cart.length}</div>
              <div className="total-price">${totalPrice.toFixed(2)}</div>
            </>
          )}
        </div>
      </div>

      {loginVisible && (
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Iniciar sesión</button>
          </form>
          <button className="close-login-form" onClick={closeLoginForm}>Cerrar</button>
        </div>
      )}

      {cartVisible && (
        <div className="cart-dropdown">
          <h3>Carrito de Compras</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * getPriceValue(item.price)).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${totalPrice.toFixed(2)}</p>
          <button onClick={handlePurchase}>Comprar</button>
          <button onClick={resetCart}>Reiniciar</button>
          <button onClick={toggleCartVisibility}>Cancelar</button>
        </div>
      )}

      <div className="product-list">
        {currentProducts.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductDetails;