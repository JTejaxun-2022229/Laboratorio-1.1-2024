const cajas = document.querySelectorAll('.caja');

window.addEventListener('scroll', checkCaja);

checkCaja();

function checkCaja() {
    const dispararCaja = window.innerHeight / 5 * 4;

    cajas.forEach(caja => {
        const cajaArriba = caja.getBoundingClientRect().top;

        if(cajaArriba < dispararCaja){
            caja.classList.add('show');
        }else{
            caja.classList.remove('show');
        }
    });
}