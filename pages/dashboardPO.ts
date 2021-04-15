export class DashboardPO {
    private dashboard_dni_input: string;
    private dashboard_mensaje_label: string;
    private dashboard_jugadoras_label: string;


    constructor() {
        this.dashboard_dni_input = '//*[@id="dni"]';
        this.dashboard_mensaje_label = '/html/body/div/div/section/section/div[1]/div';
        this.dashboard_jugadoras_label = '/html/body/div/div/section/section/div[2]/div/div[1]/p';
    }

    public validatePage(): void {
        browser.$(this.dashboard_dni_input).waitForExist();
        browser.$(this.dashboard_mensaje_label).waitForExist();
        browser.$(this.dashboard_jugadoras_label).waitForExist();
    }

    public dashboardDniInput(): WebdriverIO.Element {
        return browser.$(this.dashboard_dni_input);
    }

    public dashboardMensajeLabel(): WebdriverIO.Element {
        return browser.$(this.dashboard_mensaje_label);
    }

    public dashboardJugadorasLabel(): WebdriverIO.Element {
        return browser.$(this.dashboard_jugadoras_label);
    }
}
