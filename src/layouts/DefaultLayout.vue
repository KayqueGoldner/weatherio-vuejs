<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <div
    class="relative flex flex-col justify-start min-h-screen bg-primary text-on-background max-w-[1400px] mx-auto p-4"
  >
    <Header />
    <router-view />
  </div>
</template>
