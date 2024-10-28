import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/product/${categoryId}`);
  };

  const handleCategoriesClick = () => {
    navigate('/product');
  };

  return (
    <div className="top-bar">
      <div className="menu-item categories" onClick={handleCategoriesClick}>
        Categorías
        <div className="dropdown">
          <a href="#" onClick={(e) => { e.stopPropagation(); handleCategoryClick('papeleria'); }}>Papelería</a>
          <a href="#" onClick={(e) => { e.stopPropagation(); handleCategoryClick('tecnologia'); }}>Tecnología</a>
          <a href="#" onClick={(e) => { e.stopPropagation(); handleCategoryClick('moda'); }}>Moda</a>
          <a href="#" onClick={(e) => { e.stopPropagation(); handleCategoryClick('hogar'); }}>Hogar</a>
        </div>
      </div>
      <div className="menu-item"><a href="#">Ofertas</a></div>
      <div className="menu-item"><a href="#">Novedades</a></div>
      <div className="menu-item"><a href="#">Populares</a></div>
      <div className="menu-item"><a href="#">Recomendados</a></div>
    </div>
  );
};

export default TopBar;
