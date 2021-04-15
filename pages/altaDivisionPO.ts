export class AltaDivisionPO {

    private alta_division_boton: string;
    private division_nombre_input: string;
    private division_description_input: string;
    private division_lista_items: string;

    constructor () {
        this.alta_division_boton = '/html/body/div/aside/section/ul/li[12]/a';
        this.division_nombre_input = '//*[@id="division_title"]'
        this.division_description_input = '//*[@id="division_description"]'
        this.division_lista_items = '/html/body/div/aside/section/ul/li[3]/ul'
    }

    public validatePage(): void {
        browser.$(this.alta_division_boton).waitForExist();
        browser.$(this.division_nombre_input).waitForExist();
        browser.$(this.division_lista_items).waitForExist();
    }

    public altaDivisionBoton (): WebdriverIO.Element {
        return browser.$(this.alta_division_boton);
    }

    public divisionNombreInput (): WebdriverIO.Element {
        return browser.$(this.division_nombre_input);
    }

    public divisionDescriptionInput (): WebdriverIO.Element {
        return browser.$(this.division_description_input);
    }

    public divisionListaItems (): WebdriverIO.Element {
        return browser.$(this.division_lista_items);
    }
}