// Crear el contenedor principal este declara 
let container = document.createElement('div');
container.className = 'container';

// Crear el encabezado header hijo de comntainer
let header = document.createElement('header');
header.textContent = 'Creacion de Nodos en DOM';
container.appendChild(header);

// Funciones para crear artículos
function crearArticulo() {
    let article = document.createElement('article');
    
    let textArticle = document.createElement('div');
    textArticle.className = 'text-article';
    textArticle.textContent = 'Mi Foto';
    
    let imageArticle = document.createElement('div');
    imageArticle.className = 'image-article';
    
    let image = document.createElement('img');
    image.src = './images/m.png'; // Mi imagen se coloca tal como se nombra el archivo
    image.alt = 'Imagen de referencia';
    
    imageArticle.appendChild(image);
    article.appendChild(textArticle);
    article.appendChild(imageArticle);
    
    return article;
}

// Crear dos artículos
let article1 = crearArticulo();
let article2 = crearArticulo();

// Añadir los artículos al contenedor
container.appendChild(article1);
container.appendChild(article2);

// Añadir el contenedor al cuerpo del documento haciendolo hijo
document.getElementById('app').appendChild(container);
