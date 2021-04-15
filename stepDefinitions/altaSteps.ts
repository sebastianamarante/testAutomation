import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import {HomePO} from '../pages/homePO';
import {AltaPO} from '../pages/altaPO';
// import faker from 'faker'; faker.random.number(9999) 

const alta_page: AltaPO = new AltaPO ();

Given(/^Se ingresa al alta de usuario$/, () => {
    alta_page.altaPrensaLink().click();
});

When(/^Entrar a Nuevo Miembro$/, () => {
    browser.$('/html/body/div/div/section/section/a[1]').waitForExist()
    browser.$('/html/body/div/div/section/section/a[1]').click();
});

Then(/^Ingresar nombre "(.*?)"$/, (nombre: string) => {
    alta_page.altaNombreInput().setValue(nombre);
});

Then(/^Ingresar Apellido "(.*?)"$/, (apellido: string) => {
    alta_page.altaApellidoInput().setValue(apellido);
});

Then(/^Ingresar DNI "(.*?)"$/, (dni: string) => {
    alta_page.altaDniInput().setValue(dni);
});

Then(/^Ingresar Email "(.*?)"$/, (email: string) => {
    alta_page.altaEmailInput().setValue(email);
});

// prensa_page.prensaMailInput().setValue(`Correo${random}@correo.com`); 


// element.selectByVisibleText('Fotografo'); 

Then(/^Crear otro$/, () => {
    browser.$('//*[@id="new_other"]/div[2]/input').waitForExist();
    browser.$('//*[@id="new_other"]/div[2]/input').click();
});




