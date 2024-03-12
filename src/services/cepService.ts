import client from "@/services";
import store from '@/store'

export default class CEP {
  searchCep(search: Array<string>) {
    store.dispatch("defineLoading", true);
    return new Promise((resolve, reject) => {
      client
        .get(`https://viacep.com.br/ws/${search}/json`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error.message);
        })
        .finally(() => {
          store.dispatch("defineLoading", false);
        });
    });
  }
}