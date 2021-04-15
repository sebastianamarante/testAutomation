import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import {HomePO} from '../pages/homePO';

const home_page: HomePO = new HomePO ();

Given(/^se ingresa al sistema como administrador$/, () => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    home_page.validatePage();
});

Given(/^Dado que el usuario se logueo correctamente con el mail "(.*?)" y la contraseña "(.*?)"$/, (mail: string, password: string) => {
    browser.url('https://futbolveterano.herokuapp.com/es/admins/sign_in');
    home_page.validatePage();
    home_page.homeEmailInput().setValue(mail);
    home_page.homePasswordInput().setValue(password);
    browser.$('//*[@name="commit"]').click();
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});

When(/^se completa con mail "(.*?)"$/, (mail: string) => {
    // browser.$('#admin_email').setValue(mail);
    home_page.homeEmailInput().setValue(mail);
});

/* When(/^El valor del campo mail es igual a "(.*?)"$/, (mail: string) => {
    // browser.$('#admin_email').setValue(mail);
    // home_page.homeEmailInput().getValue(mail);
    expect(home_page.homeEmailInput().getValue()).to.be.equal(mail);
});
*/

When(/^se completa con la contraseña "(.*?)"$/, (password: string) => {
    // browser.$('#admin_password').setValue(password);
    home_page.homePasswordInput().setValue(password);
});

Then(/^el usuario intenta ingresar a la aplicación$/, () => {
    browser.$('//*[@name="commit"]').click();
});

Then(/^el usuario no logra ingresar$/, () => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/es/admins/sign_in');
});

Then(/^el usuario ingresa a la aplicación$/, () => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
});

Then(/^el usuario cierra la sesion$/, () => {
    browser.$('/html/body/div/header/nav/div/ul/li/a/span').click();
    browser.$('/html/body/div/header/nav/div/ul/li/ul/li[2]/div/a').click();
});

Then(/^el usuario cerro la sesion$/, () => {
    expect(browser.getUrl()).to.be.equal('https://futbolveterano.herokuapp.com/?locale=es');
    browser.$('#body > div.jumbotron.shape > div.jumbotron__body > div > p:nth-child(2)').getText() == 'Si sos jugadora y queres descargar o imprimir tu codigo QR.';
});