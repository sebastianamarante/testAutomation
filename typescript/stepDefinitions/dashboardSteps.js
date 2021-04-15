"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const dashboardPO_1 = require("../pages/dashboardPO");
const homePO_1 = require("../pages/homePO");
const home_page = new homePO_1.HomePO();
const dashboard_page = new dashboardPO_1.DashboardPO();
cucumber_1.When(/^Se muestra el dashboard$/, () => {
    dashboard_page.validatePage();
});
cucumber_1.Then(/^Se muestra el mensaje "(.*?)"$/, (mensaje) => {
    chai_1.expect(dashboard_page.dashboardMensajeLabel().getText()).to.be.equal(mensaje);
});
cucumber_1.Then(/^Se muestra unbox con el texto "(.*?)"$/, (textoju) => {
    chai_1.expect(dashboard_page.dashboardJugadorasLabel().getText()).to.be.equal(textoju);
});
cucumber_1.Then(/^Se muestra el input DNI$/, () => {
    dashboard_page.dashboardDniInput().waitForExist();
});
