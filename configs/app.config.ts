const URL_PRODUCTION = process.env.BASE_URL_PRODUCTION;
const URL_LOCAL = process.env.BASE_URL_DEVELOPMENT;
const isProduction = process.env.NODE_ENV?.includes("production");

interface IAppConfig {
  url: string | undefined;
  accessTokenName: string;
}
console.log(process.env.BASE_URL_DEVELOPMENT);
console.log(URL_LOCAL);
const AppConfig: IAppConfig = {
  url: isProduction ? URL_PRODUCTION : URL_LOCAL,
  accessTokenName: "NEXT_TOKEN" as const,
};

export { isProduction };
export default AppConfig;
