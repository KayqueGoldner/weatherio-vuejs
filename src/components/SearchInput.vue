<script setup lang="ts">
import { ref, computed } from "vue";
import { MapPinIcon, SearchIcon } from "lucide-vue-next";

interface City {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

const mockCities: City[] = [
  { id: 1, name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { id: 2, name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
  { id: 3, name: "Belo Horizonte", lat: -19.9167, lon: -43.9345 },
  { id: 4, name: "Curitiba", lat: -25.4284, lon: -49.2733 },
  { id: 5, name: "Recife", lat: -8.0476, lon: -34.877 },
];

const search = ref("");

const filteredCities = computed(() =>
  mockCities.filter((city) =>
    search.value
      ? city.name.toLowerCase().startsWith(search.value.toLowerCase())
      : null
  )
);
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
    </div>

    <ul
      v-if="filteredCities.length"
      class="absolute top-[110%] left-0 w-full rounded-xl overflow-hidden bg-surface shadow-lg"
    >
      <li
        v-for="city in filteredCities"
        :key="city.id"
        class="hover:bg-zinc-800/80 transition"
      >
        <router-link
          :to="`/pesquisar?lat=${city.lat}&lon=${city.lon}`"
          class="flex items-center gap-x-5 px-5 py-2"
        >
          <div>
            <MapPinIcon color="#fff" />
          </div>
          <div>
            <p class="text-zinc-300 text-lg leading-6">{{ city.name }}</p>
            <p class="text-zinc-500 text-[15px] leading-5">
              {{ city.lat }} - {{ city.lon }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
