import us from './us.jpeg';

function aboutUs() {
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutImg = new Image();
    aboutImg.src = us;
    
    const story = document.createElement('div');
    story.classList.add('cookies');
    story.textContent = 'Mjolnir\'s Dog Cookies se fundó en el 2020 con el propósito \
                        de apoyar a los perritos callejeros del mundo y compartir las galletas \
                        nutriciosas que le preparaba a mi canhijo, Mjolnir. Mjolnir siempre ha sido muy sensible de piel \
                        por ende no podía comprar cualquier galleta. Las galletas de Mjolnirs Dog Cookies son hechas con igredientes básicos\
                        y naturales. La idea es que siempre sea una receta de pocos ingredientes que cualquier perro podría comer en su día a día.';

    about.append(aboutImg, story);

    return about;
};

function loadAboutUs() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(aboutUs());
};

export default loadAboutUs;