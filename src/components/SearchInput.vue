<script setup lang="ts">
import { ref, watch } from "vue";
import { Loader2Icon, MapPinIcon, SearchIcon } from "lucide-vue-next";

import api from "../services/api";
import type { ICity } from "../types";

const search = ref("");
const data = ref<ICity[]>([]);
const loading = ref(false);
const error = ref("");

const getWeatherByCity = async (query: string) => {
  if (!query) {
    data.value = [];
    return;
  }

  try {
    loading.value = true;
    error.value = "";
    const response = await api.get("/geo/1.0/direct", {
      params: {
        q: query,
        limit: 5,
      },
    });
    data.value = response.data;
  } catch (err) {
    console.error("Erro ao buscar cidade:", err);
    error.value = "Erro ao buscar cidade.";
    data.value = [];
  } finally {
    loading.value = false;
  }
};

let debounceTimeout: number;
watch(search, (newQuery) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    getWeatherByCity(newQuery);
  }, 500);
});
</script>

<template>
  <div
    class="relative border-2 btn-border rounded-full px-4 py-1.5 w-full transition-colors"
  >
    <div class="flex items-center justify-center gap-3">
      <SearchIcon class="text-white size-5" />
      <input
        v-model="search"
        type="text"
        class="w-full rounded-full border-none border-gray-300 p-2 focus:outline-none placeholder:text-neutral-500"
        placeholder="Pesquisar cidade"
      />
      <Loader2Icon v-if="loading" class="animate-spin" />
    </div>

    <ul
      v-if="data.length"
      class="absolute top-[110%] left-0 w-full rounded-xl overflow-hidden bg-surface shadow-lg"
    >
      <li
        v-for="city in data"
        :key="`${city.name}-${city.lat}-${city.lon}`"
        class="hover:bg-zinc-800/80 transition"
      >
        <router-link
          :to="`/pesquisar?lat=${city.lat}&lon=${city.lon}`"
          class="flex items-center gap-x-5 px-5 py-2"
        >
          <MapPinIcon color="#fff" />
          <div>
            <p class="text-zinc-300 text-lg leading-6">{{ city.name }}</p>
            <p className="text-zinc-500 text-[15px] leading-5">
              {{ city.state }} - {{ city.country }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
