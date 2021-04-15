"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AltaPO = void 0;
class AltaPO {
    constructor() {
        this.alta_prensa_link = '/html/body/div/aside/section/ul/li[10]/a';
        this.alta_nombre_input = '//*[@id="other_name"]';
        this.alta_apellido_input = '//*[@id="other_lastname"]';
        this.alta_dni_input = '//*[@id="other_dni"]';
        this.alta_email_input = '//*[@id="other_email"]';
    }
    validatePage() {
        browser.$(this.alta_prensa_link).waitForExist();
        browser.$(this.alta_nombre_input).waitForExist();
        browser.$(this.alta_nombre_input).waitForExist();
    }
    altaPrensaLink() {
        return browser.$(this.alta_prensa_link);
    }
    altaNombreInput() {
        return browser.$(this.alta_nombre_input);
    }
    altaApellidoInput() {
        return browser.$(this.alta_apellido_input);
    }
    altaDniInput() {
        return browser.$(this.alta_dni_input);
    }
    altaEmailInput() {
        return browser.$(this.alta_email_input);
    }
}
exports.AltaPO = AltaPO;
