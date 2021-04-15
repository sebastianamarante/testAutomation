import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import {HomePO} from '../pages/homePO';
import { AltaDivisionPO } from '../pages/altaDivisionPO';
import faker from 'faker'

var valorUno = faker.random.number(9999);

const divison_page: AltaDivisionPO = new AltaDivisionPO ();

Given(/^Se ingresa a alta divison$/, () => {
    divison_page.altaDivisionBoton().click();
});

When(/^Entrar a Nueva Division$/, () => {
    browser.$('/html/body/div/div/section/section/div[2]/a').waitForExist();
    browser.$('/html/body/div/div/section/section/div[2]/a').click();
});

Then(/^Ingresar Nombre$/, () => {
    divison_page.divisionNombreInput().setValue('seba ' + valorUno);
});

Then(/^Ingresar Descripcion$/, () => {
    divison_page.divisionDescriptionInput().setValue(faker.random.number(9999));
});

Then(/^Seleccionar categoria$/, () => {
    browser.$('//*[@id="division_categories_6"]').waitForExist();
    // browser.$('//*[@id="division_categories_6"]').click();
    browser.$('#division_categories_'+ faker.random.number(11)).click(); 
});

Then(/^Crear Division$/, () => {
    browser.$('//*[@id="new_division"]/div[2]/input').waitForExist();
    browser.$('//*[@id="new_division"]/div[2]/input').click();
});

Then(/^Validar alta division$/, () => {
    divison_page.altaDivisionBoton().click();
    browser.$$('/html/body/div/div/section/section/div[2]/table/tbody/tr[4]/td[1]').forEach(i => expect(i.getText()).to.be.equal('seba ' + valorUno));
});