import collage from './Mjolnircollage.png'

function intro() {

    const intro = document.createElement('div');
    intro.classList.add('intro');
    intro.textContent = 'Hola mi nombre es Mjölnir, y como te preguntarás mi nombre se pronuncia mioulnir,\
                         yo nací en Colombia y fui rescatado por el centro de bienestar animal La Perla, \
                         estuve en ese lugar hasta que mi dueño actual me adoptó. Me encantan las galletas \
                         y por esa razón mi dueño las hornea para mi con mucho amor, y como sé que son deliciosas \
                          me gustaría compartir esa experiencia con todos los perritos del mundo para que puedan \
                          probar las galletas más ricas y llenas de amor, que yo como todos los días. Al mismo tiempo \
                          al comprar galletas aportas a centros de adopción y ayudas a más perritos como yo.';
    return intro;
};

const mjolnircollage = new Image();
    mjolnircollage.src = collage;

function loadIntro() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(intro());
    main.appendChild(mjolnircollage);
};

export default loadIntro;