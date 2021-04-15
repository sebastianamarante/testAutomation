import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { DashboardPO } from '../pages/dashboardPO';
import {HomePO} from '../pages/homePO';


const home_page: HomePO = new HomePO ();
const dashboard_page: DashboardPO = new DashboardPO ();


When(/^Se muestra el dashboard$/, () => {
    dashboard_page.validatePage();
});

Then(/^Se muestra el mensaje "(.*?)"$/, (mensaje: string) => {
    expect(dashboard_page.dashboardMensajeLabel().getText()).to.be.equal(mensaje);
});

Then(/^Se muestra unbox con el texto "(.*?)"$/, (textoju: string) => {
    expect(dashboard_page.dashboardJugadorasLabel().getText()).to.be.equal(textoju);
});

Then(/^Se muestra el input DNI$/, () => {
    dashboard_page.dashboardDniInput().waitForExist();
});