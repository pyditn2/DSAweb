<template>
  <div class="character-sheet">
    <h1>DSA Charakterbogen</h1>
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
import { useCharacterStore } from './store/characterStore'
import TalentTable from './components/TalentTable.vue'
import APTracker from './components/APTracker.vue'

const store = useCharacterStore()

const categoryTitles = {
  koerpertalente: 'Körpertalente',
  naturtalente: 'Naturtalente',
  gesellschaftstalente: 'Gesellschaftstalente',
  wissentalente: 'Wissentalente',
  handwerkstalente: 'Handwerkstalente'
}
</script>