export class HomePO {
    private home_email_input: string;
    private home_password_input: string;


    constructor() {
        this.home_email_input = '#admin_email';
        this.home_password_input = '#admin_password';
    }

    public validatePage(): void {
        browser.$(this.home_email_input).waitForExist();
        browser.$(this.home_password_input).waitForExist();
    }

    public homeEmailInput(): WebdriverIO.Element {
        return browser.$(this.home_email_input);
    }

    public homePasswordInput(): WebdriverIO.Element {
        return browser.$(this.home_password_input);
    }

}
