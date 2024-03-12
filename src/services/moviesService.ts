import client from "@/services";
import type { MoviesInterface } from "@/interfaces/IMovies";
import store from '@/store'

export default class Movies {
  searchMovies(search: any, page: number) {
    const name = search.name != "" ? `&s=${search.name}` : "";
    const year = search.year != 0 ? `&y=${search.year}` : "";
    const stringSearch = `${name}${year}&type=movie&page=${page}`;
    store.dispatch("defineLoading", true);
    return new Promise((resolve, reject) => {
      client
        .get<MoviesInterface>(
          `/?apikey=${process.env.VUE_APP_KEY}${stringSearch}`
        )
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

  searchDetailsMovie(idMovie: string) {
    store.dispatch("defineLoading", true);
    return new Promise((resolve, reject) => {
      client
        .get<MoviesInterface>(
          `/?apikey=${process.env.VUE_APP_KEY}&i=${idMovie}`
        )
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
