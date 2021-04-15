"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const homePO_1 = require("../pages/homePO");
const home_page = new homePO_1.HomePO();
cucumber_1.Given(/^se ingresa al sistema como administrador$/, () => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    home_page.validatePage();
});
cucumber_1.Given(/^Dado que el usuario se logueo correctamente con el mail "(.*?)" y la contraseña "(.*?)"$/, (mail, password) => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    home_page.validatePage();
    home_page.homeEmailInput().setValue(mail);
    home_page.homePasswordInput().setValue(password);
    browser.$('//*[@name="commit"]').click();
    chai_1.expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});
cucumber_1.When(/^se completa con mail "(.*?)"$/, (mail) => {
    // browser.$('#admin_email').setValue(mail);
    home_page.homeEmailInput().setValue(mail);
});
/* When(/^El valor del campo mail es igual a "(.*?)"$/, (mail: string) => {
    // browser.$('#admin_email').setValue(mail);
    // home_page.homeEmailInput().getValue(mail);
    expect(home_page.homeEmailInput().getValue()).to.be.equal(mail);
});
*/
cucumber_1.When(/^se completa con la contraseña "(.*?)"$/, (password) => {
    // browser.$('#admin_password').setValue(password);
    home_page.homePasswordInput().setValue(password);
});
cucumber_1.Then(/^el usuario intenta ingresar a la aplicación$/, () => {
    browser.$('//*[@name="commit"]').click();
});
cucumber_1.Then(/^el usuario no logra ingresar$/, () => {
    chai_1.expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admins/sign_in');
});
cucumber_1.Then(/^el usuario ingresa a la aplicación$/, () => {
    chai_1.expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});
cucumber_1.Then(/^el usuario cierra la sesion$/, () => {
    browser.$('/html/body/div/header/nav/div/ul/li/a/span').click();
    browser.$('/html/body/div/header/nav/div/ul/li/ul/li[2]/div/a').click();
});
cucumber_1.Then(/^el usuario cerro la sesion$/, () => {
    chai_1.expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
    browser.$('#body > div.jumbotron.shape > div.jumbotron__body > div > p:nth-child(2)').getText() == 'Si sos jugadora y queres descargar o imprimir tu codigo QR.';
});
