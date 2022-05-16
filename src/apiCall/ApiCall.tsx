export const API_URL_ALL = "https://restcountries.com/v3.1/all";

export const API_URL_NAME = (name: string) =>
  `https://restcountries.com/v3.1/name/${name}`;

export const API_URL_REGION = (region: string) =>
  `https://restcountries.com/v3.1/region/${region}`;

export const API_URL_CODE = (borders: any[])=>
  `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`;
