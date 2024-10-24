<template>
  <div class="character-sheet">
    <h1>DSA Charakterbogen</h1>
    
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        :class="{ active: activeTab === 'talents' }"
        @click="activeTab = 'talents'"
      >
        Talente
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
      <!-- Talents Tab -->
      <div v-if="activeTab === 'talents'">
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

      <!-- Heldendokument Tab -->
      <div v-if="activeTab === 'heldendokument'">
        <HeldenDokumentView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCharacterStore } from './store/characterStore'
import TalentTable from './components/TalentTable.vue'
import APTracker from './components/APTracker.vue'
import AttributesEditor from './components/AttributesEditor.vue'
import HeldenDokumentView from './components/HeldenDokumentView.vue'

const store = useCharacterStore()
const activeTab = ref('talents')

const categoryTitles = {
  koerpertalente: 'Körpertalente',
  naturtalente: 'Naturtalente',
  gesellschaftstalente: 'Gesellschaftstalente',
  wissentalente: 'Wissentalente',
  handwerkstalente: 'Handwerkstalente'
}
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

.talent-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>