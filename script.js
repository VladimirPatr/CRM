const btnAdd = document.querySelector('.btn-add');
const overlayModal= document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const modalForm = document.querySelector('.wrapper-add');
const tBody = document.querySelector('tbody');
const tHead = document.querySelector('thead');
const arrayTr = tBody.getElementsByTagName('tr');

btnAdd.addEventListener('click', () => {
    overlayModal.classList.add('visible');
});

overlayModal.addEventListener('click', e => {
    const target = e.target;
    if (target === overlayModal || target.closest('.close')) {
        overlayModal.classList.remove('visible');
    }
});


tBody.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-del')) {
        const trTarget = target.closest('tr');
        trTarget.remove();
        console.log(tHead.innerText);


        for (let tr of arrayTr) {
            if (tr !== trTarget) {
                console.log(tr.innerText);
            }     
          };
    };
});

