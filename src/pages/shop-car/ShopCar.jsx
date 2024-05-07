import React from 'react';

const ShopCar = ({ isLogged }) => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      {isLogged ? (
        <p>Contenido del carrito de compras</p>
      ) : (
        <p>Debes iniciar sesión para ver el carrito de compras</p>
      )}
    </div>
  );
};

export default ShopCar;