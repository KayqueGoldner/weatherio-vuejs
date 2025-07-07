<script setup lang="ts">
import SearchInput from "../components/SearchInput.vue";
</script>

<template>
  <main class="flex-1 size-full flex flex-col items-center pt-24 gap-10">
    <h1 class="text-2xl sm:text-4xl font-semibold tracking-wider text-center">
      PESQUISAR CIDADE
    </h1>
    <div class="w-full max-w-2xl">
      <SearchInput />
    </div>
  </main>
</template>
