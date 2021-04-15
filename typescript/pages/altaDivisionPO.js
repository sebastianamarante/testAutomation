"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AltaDivisionPO = void 0;
class AltaDivisionPO {
    constructor() {
        this.alta_division_boton = '/html/body/div/aside/section/ul/li[12]/a';
        this.division_nombre_input = '//*[@id="division_title"]';
        this.division_description_input = '//*[@id="division_description"]';
        this.division_lista_items = '/html/body/div/aside/section/ul/li[3]/ul';
    }
    validatePage() {
        browser.$(this.alta_division_boton).waitForExist();
        browser.$(this.division_nombre_input).waitForExist();
        browser.$(this.division_lista_items).waitForExist();
    }
    altaDivisionBoton() {
        return browser.$(this.alta_division_boton);
    }
    divisionNombreInput() {
        return browser.$(this.division_nombre_input);
    }
    divisionDescriptionInput() {
        return browser.$(this.division_description_input);
    }
    divisionListaItems() {
        return browser.$(this.division_lista_items);
    }
}
exports.AltaDivisionPO = AltaDivisionPO;
