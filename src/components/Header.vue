<script setup lang="ts">
import { MapPinIcon } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { computed } from "vue";

import SearchInput from "./SearchInput.vue";

const pathname = useRoute().path;

const isHome = computed(() => pathname === "/");
</script>

<template>
  <header class="py-2 flex items-center justify-between gap-16">
    <router-link to="/" class="block shrink-0">
      <img src="/logo.png" alt="logo" width="240" height="48" />
    </router-link>

    <div class="w-full" v-if="!isHome">
      <SearchInput />
    </div>

    <button
      class="btn-border rounded-full p-4 lg:px-6 lg:py-3.5 h-auto flex items-center gap-3 shrink-0"
    >
      <MapPinIcon class="size-5" />
      <span class="hidden lg:block">Minha localização</span>
    </button>
  </header>
</template>
