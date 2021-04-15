"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const altaPO_1 = require("../pages/altaPO");
// import faker from 'faker'; faker.random.number(9999) 
const alta_page = new altaPO_1.AltaPO();
cucumber_1.Given(/^Se ingresa al alta de usuario$/, () => {
    alta_page.altaPrensaLink().click();
});
cucumber_1.When(/^Entrar a Nuevo Miembro$/, () => {
    browser.$('/html/body/div/div/section/section/a[1]').waitForExist();
    browser.$('/html/body/div/div/section/section/a[1]').click();
});
cucumber_1.Then(/^Ingresar nombre "(.*?)"$/, (nombre) => {
    alta_page.altaNombreInput().setValue(nombre);
});
cucumber_1.Then(/^Ingresar Apellido "(.*?)"$/, (apellido) => {
    alta_page.altaApellidoInput().setValue(apellido);
});
cucumber_1.Then(/^Ingresar DNI "(.*?)"$/, (dni) => {
    alta_page.altaDniInput().setValue(dni);
});
cucumber_1.Then(/^Ingresar Email "(.*?)"$/, (email) => {
    alta_page.altaEmailInput().setValue(email);
});
// prensa_page.prensaMailInput().setValue(`Correo${random}@correo.com`); 
// element.selectByVisibleText('Fotografo'); 
cucumber_1.Then(/^Crear otro$/, () => {
    browser.$('//*[@id="new_other"]/div[2]/input').waitForExist();
    browser.$('//*[@id="new_other"]/div[2]/input').click();
});
