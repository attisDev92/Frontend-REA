
const validationsForm = {

    upperCaseWords: id => {
        const inputValue = document.getElementById(id).value;
        return inputValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }, 

    validationTelf: id => {
        const inputTelf = document.getElementById(id).value;
        const regex = /^(0\d{8}|593\d{8}|5939\d{8}|09\d{8})$/;
        return regex.test(inputTelf)
    },

    validMail: id => {
        const mailValue = document.getElementById(id).value;
        const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexMail.test(mailValue)
    },

    validPassword: id => {
        const valuePassword =  document.getElementById(id).value;
        const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regexPassword.test(valuePassword)
    },

    validCedula: id => {
        const valueCedula = document.getElementById(id).value;
        const regexCedula = /^(\d{10}|\d{13})$/;
        return regexCedula.test(valueCedula)
    }
}

export default validationsForm;