<template>
  <div class="container mx-auto p-4">
    <titlePage :title="'Lista de filmes'" />
    <search-movies
      @searchTitle="searchMoviesUser.name = $event"
      @searchYear="searchMoviesUser.year = $event"
      @returnMovies="returnMovies"
    />
    <div class="grid lg:grid-cols-5 gap-2 md:grid-cols-1" v-if="showThumbs">
      <movie-thumbnail
        v-for="(movie, index) in listMovies"
        :titleMovie="movie.Title"
        :imageMovie="movie.Poster"
        :idMovie="movie.imdbID"
        :key="index"
      />
    </div>
    <pagination
      class="col-span-5"
      :nextPage="nextPage"
      :previousPage="previousPage"
      :currentPage="results.currentPage"
      :totalPages="results.finalPage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import MovieThumbnail from "@/components/pages/movieThumbnail.vue";
import Pagination from "@/components/pages/pagination.vue";
import SearchMovies from "@/components/pages/barSearch/searchMovies.vue";
import Movies from "@/services/moviesService";
import titlePage from "@/components/structure/titlePage.vue";

let serviceMovies = new Movies();
let name = ref<string>("");
let year = ref<number>(0);
let listMovies = reactive([]);
let showThumbs = ref<boolean>(false);

let results = reactive({
  currentPage: 1 as number,
  finalPage: 0 as number,
});

let searchMoviesUser = reactive({
  name: "" as string,
  year: 0 as number,
});

async function returnMovies() {
  showThumbs.value = false;
  const res: any = await serviceMovies.searchMovies(
    searchMoviesUser,
    results.currentPage
  );
  listMovies = res.Search;
  results.finalPage = parseInt((res.totalResults / 10).toFixed(0));
  showThumbs.value = true;
}

function nextPage() {
  results.currentPage++;
  returnMovies();
}

function previousPage() {
  results.currentPage--;
  returnMovies();
}
</script>
