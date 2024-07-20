const ID_TOKEN_KEY = "id_token" as string;
const ID_YEAR_KEY = "year" as string;
const ID_PEMAKAI_KEY = "pemakai" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description get token form localStorage
 */
export const getYear = (): string | null => {
  return window.localStorage.getItem(ID_YEAR_KEY);
};

/**
 * @description get token form localStorage
 */
export const getPemakai = (): string | null => {
  return window.localStorage.getItem(ID_PEMAKAI_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveYear = (year: string): void => {
  window.localStorage.setItem(ID_YEAR_KEY, year);
};
/**
 * @description save token into localStorage
 * @param token: string
 */
export const savePemakai = (pemakai: string): void => {
  window.localStorage.setItem(ID_PEMAKAI_KEY, pemakai);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem(ID_YEAR_KEY);
};

export default {
  getToken,
  saveToken,
  destroyToken,
  saveYear,
  getYear,
  savePemakai,
  getPemakai,
};
