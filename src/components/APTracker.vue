<template>
    <div class="ap-tracker">
      <div class="ap-info">
        <h3>AP Übersicht</h3>
        <div class="ap-details">
          <p>Start-AP: {{ store.apStart }}</p>
          <div class="ap-earned">
            <label for="earned-ap">Erhaltene AP:</label>
            <input 
              type="number" 
              id="earned-ap" 
              v-model="store.apEarned"
            />
          </div>
          <p>Verbrauchte AP: {{ store.totalCost }}</p>
          <p class="ap-remaining">Übrig: {{ store.apUebrig }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../store/characterStore'
  
  const store = useCharacterStore()
  </script>