import modulesConst from './modules/constans.js';
import modulesTable from './modules/table.js';
import modulesForm from './modules/form.js';

const {
  btnAdd,
  overlayModal,
  btnClose,
  modalForm,
  tBody,
  tHead,
  arrayTr,
  formModal,
  checkModal,
  inputModalSale,
  modalID,
  totalPriceModal,
  inputModalPrice,
  inputModalCount,
  totalPriceHeader,
  totalPriceArray,
  // ID,
  // totalPriceALL        
} = modulesConst;

const {
  createRow,
  calculationTotalPriceTable,
  deleteTr,
  openModal,
  closeModal 
} = modulesTable;

const {
  checkboxInput,
    sendingForm,
    calculationTotalPrice,
    priceFocus,
    countFocus,
    saleFocus,
} = modulesForm;





//функция запуска всех функций INIT
{
const init = () => {

  calculationTotalPriceTable();
  openModal();
  closeModal();
  deleteTr();
  checkboxInput();
  sendingForm();
  priceFocus();
  countFocus();
  saleFocus();

}

window.CRMinit = init;
}



