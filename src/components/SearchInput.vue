<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";
</script>

<template>
  <div
    class="relative border-2 btn-border rounded-full px-4 py-1.5 w-full transition-colors"
  >
    <div class="flex items-center justify-center gap-3">
      <SearchIcon class="text-white size-5" />
      <input
        type="text"
        class="w-full rounded-full border-none border-gray-300 p-2 focus:outline-none placeholder:text-neutral-500"
        placeholder="Pesquisar cidade"
      />
    </div>
  </div>
</template>
