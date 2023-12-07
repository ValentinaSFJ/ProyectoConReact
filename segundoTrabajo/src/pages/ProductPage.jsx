import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProducto(data);
        } else {
          throw new Error('Error al obtener datos del producto');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  const handleComprarClick = () => {
    // Lógica para realizar la acción de compra
    console.log('Producto comprado:', producto.title);
  };

  return (
    <div className="producto-detalle">
      <h2>{producto.title}</h2>
      <p>Precio: ${producto.price}</p>
      <img src={producto.thumbnail} alt={producto.title} />
      <p>Descripción: {producto.description}</p>
      <button onClick={handleComprarClick}>Comprar</button>
    </div>
  );
};

export default ProductPage;
