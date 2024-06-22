import { $fetch } from "ohmyfetch";
// import { $fetch, FetchOptions } from "ohmyfetch";
import { defineNuxtPlugin } from "#app";
import AuthModule from "~~/repository/modules/auth";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: any = {
    baseURL: nuxtApp.$config.public.NUXT_APP_BASE_API_ENDPOINT,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
