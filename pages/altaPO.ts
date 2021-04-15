export class AltaPO {
    private alta_prensa_link: string;
    private alta_nombre_input: string;
    private alta_apellido_input: string;
    private alta_dni_input: string;
    private alta_email_input: string;

    constructor() {
        this.alta_prensa_link = '/html/body/div/aside/section/ul/li[10]/a';
        this.alta_nombre_input = '//*[@id="other_name"]';
        this.alta_apellido_input = '//*[@id="other_lastname"]';
        this.alta_dni_input = '//*[@id="other_dni"]';
        this.alta_email_input = '//*[@id="other_email"]';
    }

    public validatePage ():void {
        browser.$(this.alta_prensa_link).waitForExist();
        browser.$(this.alta_nombre_input).waitForExist();
        browser.$(this.alta_nombre_input).waitForExist();
    }
    
    public altaPrensaLink (): WebdriverIO.Element {
        return browser.$(this.alta_prensa_link);
    }

    public altaNombreInput (): WebdriverIO.Element {
        return browser.$(this.alta_nombre_input);
    }

    public altaApellidoInput (): WebdriverIO.Element {
        return browser.$(this.alta_apellido_input);
    }

    public altaDniInput (): WebdriverIO.Element {
        return browser.$(this.alta_dni_input);
    }

    public altaEmailInput (): WebdriverIO.Element {
        return browser.$(this.alta_email_input);
    }
}
