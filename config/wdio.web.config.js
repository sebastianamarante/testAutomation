/**
 * WebdriverIO config file to run tests on web.
 * Config file helps us configure all the settings and setup environments
 * to run our tests.
 */

const port = 7676;          // default port

const waitforTimeout = 10000;
const commandTimeout = 6000;

exports.config = {
    debug: false,
    specs: [
        './features/futbol.feature',
        './features/dashboard.feature'
    ],

    reporters: ['allure', 'spec'],
    reporterOptions: {
        allure: {
            outputDir: './allure-results/'
        }
    },

    maxInstances: 1,

    sync: true,

    baseUrl: 'https://relay-dev.americanlogistics.com',
    capabilities: [
        {
            browserName: 'chrome',                        // browser name is empty for native apps
            protocol: 'http',
            hostname: 'localhost',
            port: port,
            path: '/'
        }
    ],

    services: [
        ['chromedriver', {
            outputDir: 'driver-logs', // overwrites the config.outputDir
            args: ['--silent'] //
        }]
    ],

    /**
     * test configurations
     */
    logLevel: 'silent',//'debug'|'silent',
    coloredLogs: true,
    framework: 'cucumber',          // cucumber framework specified
    cucumberOpts: {
        compiler: ['ts:ts-node/register'],
        format: ['json: cucumber_report.json'],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: [
            './typescript/stepDefinitions/administracionSteps.js',
            './typescript/stepDefinitions/dashboardSteps.js',
            './typescript/stepDefinitions/altaSteps.js',
            './typescript/stepDefinitions/altaDivisionSteps.js'
        ]
    },

    waitforTimeout: 30000,

    /**
     * hooks help us execute the repeatitive and common utilities
     * of the project.
     */
    onPrepare: function () {
        console.log('<<< WEB TESTS STARTED >>>');
    },

    afterStep: function (scenario) {
        browser.takeScreenshot();

    },

    afterScenario: function () { browser.reloadSession() },

    onComplete: function () {
        console.log('<<< TESTING FINISHED >>>');
    }
};
