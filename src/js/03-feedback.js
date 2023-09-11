import throttle from 'lodash.throttle';

const modalForm = document.querySelector('form');
const FORM_DATA_KEY = 'feedback-form-state';

modalForm.addEventListener('submit', onFormSubmit);



const trottledSave = throttle(savingFormData , 500);
function savingFormData () {
    const formDataElements = {
        email: modalForm.elements.email.value,
        message: modalForm.elements.message.value
    };
    localStorage.setItem('FORM_DATA_KEY', JSON.stringify(formDataElements));
    // console.log(formDataElements);
};

modalForm.addEventListener('input', trottledSave);

const localInfo = localStorage.getItem('FORM_DATA_KEY');
if (localInfo) {
    const parseLocaleInfo = JSON.parse(localInfo);
    modalForm.elements.email.value = parseLocaleInfo.email || '';
    modalForm.elements.message.value = parseLocaleInfo.message || '';
    alert('Всі поля форми повинні бути заповнені')
} else {
    modalForm.reset();
};


function onFormSubmit(event) {
event.preventDefault();
// console.log(event);
if (modalForm.elements.email.value !== '' || modalForm.elements.message.value !== '') {
    console.log({ email: modalForm.elements.email.value, message: modalForm.elements.message.value });

    localStorage.removeItem('FORM_DATA_KEY');
    modalForm.reset();
} else {
    alert("Будь ласка, заповніть усі обов'язкові поля")
    }
};