
# Mobile test automation
  
Mobile and API automation framework based on Cucumber - WebdriverIO - NodeJS - Typescript - Axios - Allure Reports
  
## Table of contents

*  [Pre-requisites](#Pre-requisites)
    +  [Installling NodeJS - Appium - JDK - Android Studio](#Configure-environment-variable)
	+  [Configure environment variable](#Configure-environment-variable)
	+  [Creating new virtual device](#Creating-new-virtual-device)
+  [First time run](#First-time-run)

*  [Folders structure](#Folders-structure)
	+  [App](#App)
	+  [Config](#Config)
	+  [features](#features)
	+  [pages: Using Page Object Model Pattern](#pages)
	+  [stepDefinitions](#stepDefinitions)
	+  [scripts](#scripts)
	+ [commons](#commons)
+  [package.json](#package.json)


*  [Contributing](#contributing)


## Getting started
### Pre-requisites

- Clone Automation GIT project from Azure (https://dev.azure.com/ALC-Cosmos/AmericanLogistics/_git/test-automation)
- Latest version of Node.js from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm) (nvm approach is preferred).
	-  If you install Node.js from the official website, you must check the 'Tools for Native Modules' checkbox during the installation (it is not checked by default)
- Install Android Studio from the [official website](https://developer.android.com/studio).
- Go to [official website JDK 1.8 ](https://www.oracle.com/sa/java/technologies/javase/javase-jdk8-downloads.html), go to *Java SE Development Kit* download and install the last version.
- Lastest Appium Server version from the [official website](http://appium.io/).

### Configure environment variable

1. Right click the Computer icon.
2. Choose Properties from the context menu.
3. Click the Advanced system settings link.
4. Click Environment Variables. 
5. In the section System Variables, create or edit **"ANDROID_HOME"** variable and set path of Android sdk. For example
```
Name  : ANDROID_HOME
Value : C:\Users\USERID\AppData\Local\Android\Sdk
```
6. In the section System Variables, create or edit **"JAVA_HOME"** variable and set path of Android sdk. For example
```
Name  : JAVA_HOME
Value : C:\Program Files\Java\jdk1.8.0_241
```

7. In the section System Variables, create or edit **"path"** variable and set path of Android sdk platform-tools. For example
```
Name  : path
Value : C:\Users\USERID\AppData\Local\Android\Sdk\platform-tools
```
8. In the section System Variables, create or edit **"path"** variable and set path of Android emulator. For example
```
Name  : path
Value : C:\Users\USERID\AppData\Local\Android\Sdk\emulator
```  
**Creating new virtual device:**
-

- **Create a new virtual device.**

  - Open **Android Studio** and go to: **Tools** -> **AVD Manager** -> **Create Virtual Device...** 
  - Select **Nexus 6** - > **Next** -> **API Level 10** -> **Next** -> Then rename device as Nexus 6 -> **Finish**. 

**List of devices connected**

With this command we can see a list of emualtors available on our local machine.

```

$ emulator -list-avds

```

**Open an emulator**

We can open an emulator with the command **emulator** *@device_name* from the list of devices availables on local machine.
For example:

```

$ emulator @Nexus_6

```


# First time run

As root or admin.
```

$ npm install

$ npm run clean-build

```

### Run tests by tag @run
With an emulator open.

```

$ npm run app-test-tag

```

  

### Generate Allure-Reports after an execution

```

$ npm run clean-report

```
# Folders structure

  

# **App**


In this folder we need to have the apk artifact.


# **Config**


We have the file: **wdio.app.config.js**:  with configurations to run tests:



- **specs**: List of cucumber features to execute.
-  **reporters/reporter options:** Specifies the reporter to use, we use Allure Report.
-  **host/port/path:** Configuration of Appium server.
-  **maxInstances:** Maximus instances per execution, by default we must execute with 1 for mobile. 
-  **sync:** Always in true.
-  **capabilities:** set of options related to device, platform, device name.
   - **browserName**: empty for mobile.
   - **platformName**: Android/iOS.
   - **app:** Complete with the path of our apk. For example: *'./app/**MODO QA 1.2.0(13)[20-12-15].apk**'*.
   - **appPackage:**: Package name of the app.
     -  Field: **manifest.package** of AndroidManifest.xml file of apk.
   - **appActivity:**: Name of the first view or activity that open when we open our app.
     - Field: **manifest.activity** (**android:name**) of AndroidManifest.xml file of apk.
   - **platformVersion**: Associated to API version, Android version. **For example**: 10.
   - **deviceName:** Identifier of the device. **For example**: Nexus 6. 
   - **automationName:** We always use: **UiAutomator2** to Android.
   - **waitforTimeout/commandTimeout/newCommandTimeout:** Parameters to set maximus time out.
  
- **services:** For mobile we use **appium** service.
 
- **logLevel:** We can use debug to log all the actions on appium or silent mode only to log final results.
- **framework/cucumberOpts:** We use Cucumber framework to execute.
  - On **cucumberOpts.require** we specify the steps of .js files to exectute of the folder **stepDefinitions**.

**List of hooks of Cucumber we use:**

- **onPrepare:** Actions to to before de begin of the excecution.
- **afterCommand:** Actions to do after a command is executed, for example after a click we want to take a screenshot.
- **onComplete:** Actions to do after all test had been executed.
- **beforeScenario:** Actions to do before a scenario is executed. For example: we use **browser.reset();** to prepeare the initial conditions.
- **afterScenario:** Actions to do after a scenario was executed. For example: **browser.closeApp()**; to close de app.

We can use differents hooks, please visit [WebDriver IO Hooks](https://webdriver.io/docs/options.html#hooks) for more details.

# **features**


On this folder we have the list of cucumber .feature files group by functionalities.

# **pages**

On this folder we have the definitions of each view of our application using  Page Object Model pattern to define using Typescript.

The basic structure of each POM must have:
Filename: **viewToModel.ts**

```Typescript
    export  class  ViewToModel {
        // List of elements of the view
        private  title_page_label: string;
        private  phone_input: string;
        private  password_input: string;
        private  login_btn: string;

        // Basic constructor with the definition of each element using accesibility id, id or xpath. Try to avoid large or positional xpath.
        constructor() {
	        this.title_page_label = '//*[@content-desc="main-title-label"]'; // Get by content desc
	        this.phone_input = '#phoneNumber'; // Get by ID/Android_ID
			this.password_input = '//*[@text="Password"]'; // Get by element text
			this.login_btn = '~Login'; // Get by accessibility ID
	    }
	    // First method to execute when the view is loaded to verify that we are on the page in fact. We should return a value to validate
	    public  validatePage(): string {
		    browser.$(this.phone_input).waitForExist();
			browser.$(this.password_input).waitForExist();
		    browser.$(this.login_btn).waitForExist();
			return browser.$(this.title_page_label).getText();
	    }
	    
	    // Getters of each element of the view
		public  getPhoneInput(): WebdriverIO.Element {
		    browser.$(this.phone_input).waitForExist();
		    return browser.$(this.phone_input);
	    }
    
		public  getPaswordInput(): WebdriverIO.Element {
		    browser.$(this.password_input).waitForExist();
		    return browser.$(this.password_input);
	    }

		public  getLoginBtn(): WebdriverIO.Element {
		    browser.$(this.login_btn).waitForExist();
		    return browser.$(this.login_btn);
	    }
            
    }
```

# **stepDefinitions**

On this folder we have to create the steps per functionality out set of scenarios defined on our .feature files.

**For example**:
  We have an **onboarding.feature** file with this definition to execute with a set of 2 groups of data:

```Gherkin
@onboarding
Feature: Onboarding

As a person, I want to be a MODO user.

@onboarding_happy_path @run
Scenario Outline: <case> - Onboarding to MODO Happy Path
	Given I am not a MODO user
	When I complete my email from "<domain>"
	When I complete my name and lastname
	When I complete my document number
	When I complete with my mobile number
	When I complete the verification code
	When I complete the password with "<password>" and repeat with "<password>"
	Then I finished the registration to MODO

	Examples:

	| case | domain          | password |
	| 1    | supervielle.ccc | 024680   |
	| 2    | patagonia.ccc   | 024680   |
```

For each **Given**, **When**, **Then** step we have to create a step to do the behavior that happen on the application.

**For example:**
On our **onboardingSteps.ts** file, we will import our pages defined to create a test.

```Typescript
import { expect } from  'chai'; // to make assertion
import { Given, Status, Then, When } from  'cucumber'; // Cucumber step definitons
import  faker  from  'faker'; // Useful to generate random data
import { Constants } from  '../commons/constants';
import { BasePermissionsPageObject } from  '../pages/basePermissionsPageObject'; // Page Object
import { OnboardingEnterCodePageObject } from  '../pages/onboardingEnterCodePageObject';

//  We create our Page Objects and validate that we stay on them, also we get an element of that view and click on it
Given(/^I am not a MODO user$/, () => {
	const onboarding_welcome_page: OnboardingWelcomePageObject = new  OnboardingWelcomePageObject();
	expect(onboarding_welcome_page.validatePage()).to.be.equal(Constants.ONBORDING_WELCOME_1_TITLE);
	onboarding_welcome_page.getRegisterBtn().click();
});

// We recibe data from parameters and set it on the view
When(/^I complete email with "(.*?)"$/, (mail: string) => {
	const  onboarding_enter_email_page: OnboardingEnterEmailPageObject = new  OnboardingEnterEmailPageObject();
	expect(onboarding_enter_email_page.validatePage()).to.be.equal(Constants.ONBOARDING_TITLE_INPUT_EMAIL);
	onboarding_enter_email_page.getEmailInput().setValue(mail);
	press_enter();
});
```

# **scripts**

On this folder we have several file useful to excecute on GitHub Action.

- runTest.sh: Install and run our set of test.
- reportTest.sh: Generate allure report with evidence of the execution.

# **commons**

On this folder we have a few utility classes for example: **constants.ts**, **utils.ts**.
  



# **package.json**

Scripts desctiptions:


- `clean-build`: this script transpiles Typescript code and we need to excecute after we make a change on a ***.ts** file.
-  `app-test`: this run all test cases on every .feature file that we have on our **config/wdio.app.config.js** on field specs and have to be releated to the stepDefinition files on cucumberOpts.require from the same config file.
-  `app-test-tag`: The same that  `app-test` but with this script we only run the **scenarios** or **features** with **@run** tag.
- `clean-report`: We generate the allure reports after an excecution.





# **Contributing**

  

### Commits:

  

For our commits message we use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification which provides an easy set of rules for creating an explicit commit history adding readable meaning to commit messages.

  

> See [Conventional Commits full specification](https://www.conventionalcommits.org/en/v1.0.0/#specification).

  

#  **Process**

  

1. Fork from `master` branch.

2. Create your branch with the associated Jira ticket  (`git checkout -b type/####-Description`)

3. Commit your changes (`git commit -am 'feat(feature):'`)

4. Push to the branch (`git push origin type/####-Description`)

5. Create new Pull Request