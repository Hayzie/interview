<script lang="ts" setup>
import SearchIcon from './icons/SearchIcon.vue';
import { useProjectStore } from "../stores/store";
const store = useProjectStore();
/* The search input value references a search term in the pinia store */
</script>
<template>
    <div>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <SearchIcon />
        </div>
        <!-- search input -->
        <input v-model="store.searchTerm" type="search" id="default-search" class="block search-input w-40 p-2 pl-10 text-sm border border-slate-500 rounded-full" placeholder="Search" required>
    </div>
    </div>
</template>