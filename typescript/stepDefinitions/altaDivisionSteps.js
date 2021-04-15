"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const altaDivisionPO_1 = require("../pages/altaDivisionPO");
const faker_1 = __importDefault(require("faker"));
var valorUno = faker_1.default.random.number(9999);
const divison_page = new altaDivisionPO_1.AltaDivisionPO();
cucumber_1.Given(/^Se ingresa a alta divison$/, () => {
    divison_page.altaDivisionBoton().click();
});
cucumber_1.When(/^Entrar a Nueva Division$/, () => {
    browser.$('/html/body/div/div/section/section/div[2]/a').waitForExist();
    browser.$('/html/body/div/div/section/section/div[2]/a').click();
});
cucumber_1.Then(/^Ingresar Nombre$/, () => {
    divison_page.divisionNombreInput().setValue('seba ' + valorUno);
});
cucumber_1.Then(/^Ingresar Descripcion$/, () => {
    divison_page.divisionDescriptionInput().setValue(faker_1.default.random.number(9999));
});
cucumber_1.Then(/^Seleccionar categoria$/, () => {
    browser.$('//*[@id="division_categories_6"]').waitForExist();
    // browser.$('//*[@id="division_categories_6"]').click();
    browser.$('#division_categories_' + faker_1.default.random.number(11)).click();
});
cucumber_1.Then(/^Crear Division$/, () => {
    browser.$('//*[@id="new_division"]/div[2]/input').waitForExist();
    browser.$('//*[@id="new_division"]/div[2]/input').click();
});
cucumber_1.Then(/^Validar alta division$/, () => {
    divison_page.altaDivisionBoton().click();
    browser.$$('/html/body/div/div/section/section/div[2]/table/tbody/tr[4]/td[1]').forEach(i => chai_1.expect(i.getText()).to.be.equal('seba ' + valorUno));
    ;
});
