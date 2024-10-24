// APTracker.vue
<template>
  <div class="ap-tracker">
    <h2>AP Übersicht</h2>
    <div>
      <p>Start-AP: {{ store.apStart }}</p>
      <div>
        <label for="earned-ap">Erhaltene AP:</label>
        <input 
          type="number" 
          id="earned-ap" 
          v-model.number="store.apEarned"
        />
      </div>
      <p>Verbrauchte AP: {{ store.totalCost }}</p>
      <p>Attribute AP: {{ store.totalAttributeCost }}</p>
      <p>Talent AP: {{ store.totalTalentCost }}</p>
      <p>AP Übrig: {{ store.apUebrig }}</p>
    </div>
  </div>
</template>

<script setup>
import { useCharacterStore } from '../store/characterStore'

const store = useCharacterStore()
</script>