import loadProducts from './products';
import loadAboutUs from './about';
import loadIntro from './initial-page';
import logo from './mdclogo.png';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const storeName = document.createElement('h1');
    storeName.classList.add('store-name');
    storeName.textContent = 'Mjölnir\'s Dog Cookies';

    const mdclogo = new Image();
    mdclogo.src = logo;
    mdclogo.classList.add('logo');

    mdclogo.addEventListener('click', (e) => {
        const main = document.getElementById('main');
         main.textContent = '';
    });

    header.appendChild(mdclogo);
    header.appendChild(storeName);
    
    return header;
};

function createNav() {
    const navBar = document.createElement('div');
    navBar.classList.add('topnav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.setAttribute('href', '#home');
    homeButton.textContent = 'Página Principal';
    homeButton.addEventListener('click', (e) => {
         if (e.target.classList.contains('active')) {
             return;
         }
         setActiveButton(homeButton);
         loadIntro();
        });

    const productsButton = document.createElement('button');
    productsButton.classList.add('button-nav');
    productsButton.setAttribute('href','#products');
    productsButton.textContent = 'Productos';
    productsButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')){
            return;
        }
        setActiveButton(productsButton);
        loadProducts();
       });


    const aboutButton = document.createElement('button');
    aboutButton.classList.add('button-nav');
    aboutButton.setAttribute('href', '#about');
    aboutButton.textContent = 'Nosotros';
    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            return
        }
        setActiveButton(aboutButton);
        loadAboutUs();
       });
       
    navBar.append(homeButton, productsButton, aboutButton);

    return navBar;
};

function setActiveButton (button) {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
};

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.classList.add('transition-fade');
    main.setAttribute('id', 'main');
    return main;
};

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.setAttribute('id', 'footer');

    const gitHubLink = document.createElement('p');
    gitHubLink.classList.add('githublink');
    gitHubLink.textContent = 'https://github.com/ismaelvale';

    footer.appendChild(gitHubLink);

    return footer;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    
    return content;
};


export default initializeWebsite;