<template>
  <div class="character-sheet">
    <h1>DSA Charakterbogen</h1>
    
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        :class="{ active: activeTab === 'talents' }"
        @click="activeTab = 'talents'"
      >
        Persönlickeit
      </button>
      <button 
        :class="{ active: activeTab === 'heldendokument' }"
        @click="activeTab = 'heldendokument'"
      >
        Heldendokument
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <PersonlichkeitView v-if="activeTab === 'talents'" />
      <HeldenDokumentView v-if="activeTab === 'heldendokument'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PersonlichkeitView from './components/PersönlichkeitView.vue'
import HeldenDokumentView from './components/HeldenDokumentView.vue'

const activeTab = ref('talents')
</script>

<style>
.character-sheet {
  padding: 20px;
}

.tab-navigation {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding: 0 1rem;
}

.tab-navigation button {
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.1rem;
}

.tab-navigation button.active {
  border-bottom: 2px solid #42b983;
  font-weight: bold;
}

.tab-content {
  padding: 1rem;
}
</style>