
<template>
  <div class="flex flex-col sub-app-container w-full lg:w-80 overscroll-none">
    <div class="app-header pt-4 fixed top-0 left-1/2 transform -translate-x-1/2 z-45 w-full pb-8 pl-8 md:pl-2.5 lg:pl-2.5 md:w-80 lg:w-80">
    <!-- App title -->
      <h1 class="text-4xl font-bold mb-4">{{store.title}}</h1>
    <!-- Search component -->
    <SearchComponent />
  </div>
    <!-- projects list component -->
    <ProjectsList />
    <!-- add new project form -->
    <div class="flex flex-col h-screen">
    <div class="flex flex-col items-center p-8">
    </div>
   <!-- add new project button -->
    <div class="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-45 w-4/5 lg:w-72">
      <button
        @click="openAddProjectPopup"
        class="flex justify-center button button-large text-white rounded-full p-2 w-full shadow-lg"
      >
        <IconPlus />
        &nbsp;New Project
      </button>
    </div>
    <!-- Add new project popup  -->
    <div v-if="showAddProjectPopup" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-40">
      <div class="bg-white p-8 rounded shadow-lg">
        <h2 class="text-lg font-semibold mb-4">Add New Project</h2>
        <form @submit="addProject">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Project name</label>
            <input
              v-model="newProject.name"
              type="text"
              class="border border-gray-300 rounded-full w-full px-3 py-2"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Customer name</label>
            <input
              v-model="newProject.customer"
              class="border border-gray-300 rounded-full w-full px-3 py-2"
              required
            />
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeAddProjectPopup" class="mr-2 px-4 py-2 text-sm font-medium text-gray-600 rounded-full">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 button text-white rounded-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    <!-- bottom App bar component  -->
    <AppBar />
  </div>
</template>

<script setup lang="ts">
// imports
import { useProjectStore } from './stores/store';
import { ref, onMounted } from 'vue';
import SearchComponent from './components/SearchComponent.vue'
import ProjectsList from './components/ProjectsList.vue';
import AppBar from './components/AppBar.vue';
import IconPlus from './components/icons/IconPlus.vue';
import { v4 as uuidv4 } from 'uuid';
import projects from './api/projects_json';


const store = useProjectStore();

//adding a new project
const showAddProjectPopup = ref(false);
const newProject = ref({
  name: '',
  customer: ''
});

const openAddProjectPopup = () => { // open the add new project popup
  showAddProjectPopup.value = true;
};

const closeAddProjectPopup = () => { // close add new the project popup
  showAddProjectPopup.value = false;
  resetNewProject();
};

const addProject = (event:Event) => {
  event.preventDefault();

  store.addProject({
    id: uuidv4(), // Generate a unique ID for the new project
    name: newProject.value.name,
    customer: newProject.value.customer,
    dateCreated: new Date().toISOString()
  }); // Add the new project to the projects array in the pinia store
  closeAddProjectPopup();
  // Reset newProject values
  resetNewProject();
};

const resetNewProject = () => { //Reset project values
  newProject.value.name = '';
  newProject.value.customer = '';
};

/*fetch the project objects array on App load. 
*/
onMounted(() => { 
  store.projects = projects; //Set the projects array in the pinia store
});
</script>
