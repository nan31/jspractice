class Producto{
  constructor(producto, imagen, descripcion, precio){
    this.producto = producto;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

const producto1 = new Producto("Taza", "./img/taza.png", "Taza personalizada Star Wars", 1200);
const producto2 = new Producto("Set Desayuno", "./img/setdesayuno.png", "Set personalizado para desayuno", 1600);
const producto3 = new Producto("Remera", "./img/remera.png", "Remeras personalizadas", 1300);
const producto4 = new Producto("Mate", "./img/mate.png", "Mate personalizado", 1200);
const producto5= new Producto("Posavasos", "./img/posavasos.png", "Posa vasos personalizado", 350);
const producto6 = new Producto("Set de Jardin", "./img/setdejardin.png", "Set de Jardin", 1600);

const productos = [];

productos.push(producto1)
productos.push(producto2)
productos.push(producto3)
productos.push(producto4)
productos.push(producto5)
productos.push(producto6)


function mostrarProductos(productos) {
  const contenedorDeProductos =  document.getElementById("contenedor-de-productos");
  contenedorDeProductos.innerHTML = "";

  productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");
    divProducto.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.producto}">
      <h3>${producto.producto}</h3>
      <p>Descripcion: ${producto.descripcion}</p>
      <p>Precio: $ ${producto.precio}</p>
    `;
    const botonVerDetalle = document.createElement("button");
    botonVerDetalle.innerText = "Ver Detalle";
    botonVerDetalle.addEventListener("click", () => {
      mostrarDetalle(producto);
      crearBotonVolver();
    })
    divProducto.appendChild(botonVerDetalle);

    contenedorDeProductos.appendChild(divProducto);
  })
}

function mostrarDetalle(producto){

  const contenedorDeProductos = document.getElementById("contenedor-de-productos");
  contenedorDeProductos.innerHTML = "";

  contenedorDeProductos.innerHTML = `
  <img src="${producto.imagen}" alt="${producto.producto}">
  <h3>${producto.producto}</h3>
  <p>Descripcion: ${producto.descripcion}</p>
  <p>Precio: $ ${producto.precio}</p>
  `;

  crearBotonAgregarAlCarrito();
}

function crearBotonVolver(){
  const botonVolver = document.createElement("button");
  botonVolver.classList.add("boton-volver");
  botonVolver.innerText = "Atras";
  botonVolver.addEventListener("click", () => {
    mostrarProductos(productos);
  }
  )
  document.getElementById("contenedor-de-productos").prepend(botonVolver);
}

function crearBotonAgregarAlCarrito(){
  const botonComprar = document.createElement("button");
  botonComprar.classList.add("boton-comprar");
  botonComprar.innerText = "Agregar al Carrito";
  botonComprar.addEventListener("click", () => {
    agregarAlCarrito(producto);
  }
  )
  document.getElementById("contenedor-de-productos").prepend(botonComprar);
}


mostrarProductos(productos);


