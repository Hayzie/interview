<script  lang="ts" setup>
import { useProjectStore } from "../stores/store";
import { computed } from 'vue';
// Import dayjs library
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const store = useProjectStore();
const filteredProjects = computed(() => { // Filter projects based on the search query
  return store.projects.filter(project =>
    project.name.toLowerCase().includes(store.searchTerm.toLowerCase())
  ); 
});

dayjs.extend(relativeTime); 
const formatDate = (date: string) => { 
  return dayjs(date).fromNow(); // Format the date in a human-readable format (e.g., "2 days ago")
};
</script>
<template>
    <!-- projects list -->
    <div class="flex project-list flex-wrap justify-center mt-40 mb-0 ml-auto mr-auto w-full md:w-80 lg:ml-2 overflow-hidden lg:justify-normal lg:w-80">
        <div v-for="project in filteredProjects" :key="project.id" class="bg-white w-36 m-1 border-gray-300 py-2 rounded-lg overflow-hidden card mb-4">
          <div class="px-4">
            <h3 class="text-gray-600">{{ project.customer }}</h3>
            <p class="font-semibold">{{ project.name }}</p>
            <div class="h-20"></div>
            <p class="text-gray-400 text-sm">{{ formatDate(project.dateCreated) }}</p>
          </div>
      </div>
    </div>
</template>