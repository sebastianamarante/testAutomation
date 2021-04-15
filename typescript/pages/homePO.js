"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePO = void 0;
class HomePO {
    constructor() {
        this.home_email_input = '#admin_email';
        this.home_password_input = '#admin_password';
    }
    validatePage() {
        browser.$(this.home_email_input).waitForExist();
        browser.$(this.home_password_input).waitForExist();
    }
    homeEmailInput() {
        return browser.$(this.home_email_input);
    }
    homePasswordInput() {
        return browser.$(this.home_password_input);
    }
}
exports.HomePO = HomePO;
