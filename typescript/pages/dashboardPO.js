"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPO = void 0;
class DashboardPO {
    constructor() {
        this.dashboard_dni_input = '//*[@id="dni"]';
        this.dashboard_mensaje_label = '/html/body/div/div/section/section/div[1]/div';
        this.dashboard_jugadoras_label = '/html/body/div/div/section/section/div[2]/div/div[1]/p';
    }
    validatePage() {
        browser.$(this.dashboard_dni_input).waitForExist();
        browser.$(this.dashboard_mensaje_label).waitForExist();
        browser.$(this.dashboard_jugadoras_label).waitForExist();
    }
    dashboardDniInput() {
        return browser.$(this.dashboard_dni_input);
    }
    dashboardMensajeLabel() {
        return browser.$(this.dashboard_mensaje_label);
    }
    dashboardJugadorasLabel() {
        return browser.$(this.dashboard_jugadoras_label);
    }
}
exports.DashboardPO = DashboardPO;
