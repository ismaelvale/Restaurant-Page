import treats from './treats.jpeg';
import boxpic from './box.png';

function productsList() {
    const products = document.createElement('div');
    products.classList.add('products');
    
    const cookies = document.createElement('div');
    cookies.classList.add('cookies');
    cookies.textContent = 'Galletas para entrenamiento Grain-Free \
                            contienen: harina de garbanzos, mantequilla de maní, y compota';

    const treatimg = new Image();
    treatimg.src = treats;
    cookies.appendChild(treatimg);
    
    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent = 'Suscríbete a nuestro FiruBox \
                        recibe 2 juguetes y 2 bolsas de treats especiales \
                        para su peludito'; 

    const boximg = new Image();
    boximg.src = boxpic;
    box.appendChild(boximg);

    products.append(cookies, box);

    return products;
};

function loadProducts() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(productsList());
};

export default loadProducts;