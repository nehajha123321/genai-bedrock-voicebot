import { config } from '@dotenvx/dotenvx';

config({ path: '.env.local' });
// Define your configuration interface
interface AppConfig {
    JWT_SECRET: string;
    APPRUNNER_GITHUB_URL: string;
    APPRUNNER_GITHUB_BRANCH_MAIN: string;
    APPRUNNER_GITHUB_BRANCH_SANDBOX: string;
    APPRUNNER_GITHUB_CONNECTION_ARN: string;
    CHAT_PROD_API: string;
}

// Create a configuration object
const _config: AppConfig = {
    JWT_SECRET: process.env.JWT_SECRET || '', //Mandatory
    APPRUNNER_GITHUB_URL: process.env.APPRUNNER_GITHUB_URL || '', //Mandatory
    APPRUNNER_GITHUB_CONNECTION_ARN: process.env.APPRUNNER_GITHUB_CONNECTION_ARN || '', //Mandatory
    APPRUNNER_GITHUB_BRANCH_MAIN: process.env.APPRUNNER_GITHUB_BRANCH_MAIN || 'main',
    APPRUNNER_GITHUB_BRANCH_SANDBOX: process.env.APPRUNNER_GITHUB_BRANCH_SANDBOX || 'sandbox',
    CHAT_PROD_API: process.env.CHAT_PROD_API || 'UPDATE_ENVIRONMENT_VARIABLE_:_CHAT_PROD_API',
};


// Export the configuration
export default _config;