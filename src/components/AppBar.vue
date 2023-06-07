<script setup lang="ts">
 import IconAppBar from './icons/IconAppBar.vue';
 import IconAppBarBlack from './icons/IconAppBarBlack.vue';
 import { useAppBarStore  } from "../stores/store";
 import { useProjectStore  } from "../stores/store";

 const appBarStore = useAppBarStore();
 const store = useProjectStore();
</script>

<template>
    <div class="flex flex-col fixed bg-white bottom-0 left-1/2 transform -translate-x-1/2 border-t-2 border-slate-200 z-45 w-full lg:w-80">
      <div class="flex flex-col items-center">
        <!-- Project App content -->
      </div>
  
      <div class="flex justify-between p-4">
        <div @click="appBarStore.setActiveDiv(0), store.setTitle('Projects')" class="flex flex-col items-center cursor-pointer">
          <IconAppBar v-if="appBarStore.activeDiv === 0" />
          <IconAppBarBlack v-else />
         <span class="text-sm">Projects</span>
        </div>
  
        <div @click="appBarStore.setActiveDiv(1), store.setTitle('Customers')" class="flex flex-col items-center cursor-pointer">
          <IconAppBar v-if="appBarStore.activeDiv === 1" />
          <IconAppBarBlack v-else />
          <span class="text-sm">Customers</span>
        </div>
  
        <div @click="appBarStore.setActiveDiv(2), store.setTitle('Company')" class="flex flex-col items-center cursor-pointer">
          <IconAppBar v-if="appBarStore.activeDiv === 2" />
          <IconAppBarBlack v-else />
          <span class="text-sm">Company</span>
        </div>
      </div>
    </div>
  </template>
  