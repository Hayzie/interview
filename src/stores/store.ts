import { defineStore } from 'pinia';

// Pinia store to manage the state of the project

// Project interface
interface Project {
  id:string
  name: string;
  customer: string;
  dateCreated: string;
}

export const useProjectStore = defineStore('project', {

  // State
  state: () => ({
    projects: [] as Project[], //array of project objects
    searchTerm: '',
    title:'Projects'
  }),

  // Actions
  actions: {
    // Add a new project
    addProject(project: Project) { //action to add a new project
      this.projects.unshift(project); // Add the new project to the beginning of the projects array
    },
    setTitle(strTitle: string): void { 
      this.title = strTitle;
    },
  },
});

// Pinia store to manage the state of the app bar 

interface AppBarState {
  activeDiv: number | null; //indicates the currently active div (by its index)
}

export const useAppBarStore = defineStore('appBar', {

  // State
  state: (): AppBarState => ({
    activeDiv: 0,
  }),
  
  // Actions
  actions: {
    setActiveDiv(index: number): void { //this action is used to update the active div
      this.activeDiv = index;
    },
  },
});
