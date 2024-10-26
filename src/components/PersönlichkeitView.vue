<template>
    <div class="personlichkeit-view">
      <h2>Persönlichkeit</h2>
      <CharacterInfoEditor />
      <AttributesEditor />
      <APTracker />
      <div class="talent-sections">
        <TalentTable 
          v-for="(talents, category) in store.talents" 
          :key="category"
          :title="categoryTitles[category]"
          :category="category"
          :talents="talents"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../store/characterStore'
  import TalentTable from './TalentTable.vue'
  import APTracker from './APTracker.vue'
  import AttributesEditor from './AttributesEditor.vue'
  import CharacterInfoEditor from './CharacterInfoEditor.vue'
  
  const store = useCharacterStore()
  
  const categoryTitles = {
    koerpertalente: 'Körpertalente',
    naturtalente: 'Naturtalente',
    gesellschaftstalente: 'Gesellschaftstalente',
    wissentalente: 'Wissentalente',
    handwerkstalente: 'Handwerkstalente'
  }
  </script>
  
  <style scoped>
  .personlichkeit-view {
    width: 100%;
  }
  
  .talent-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  </style>