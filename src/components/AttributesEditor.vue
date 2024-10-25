<template>
  <div class="attributes-section">
    <h2>Attribute</h2>
    <div class="attributes-container">
      <div class="attributes-grid">
        <div v-for="(value, attr) in store.stats.attributes" 
             :key="attr" 
             class="attribute-item">
          <div class="attribute-header">
            <label :for="attr">{{ getAttributeName(attr) }}</label>
            <span class="attribute-cost">
              AP: {{ store.stats.attributeCosts[attr] }}
            </span>
          </div>
          <div class="attribute-controls">
            <input 
                :id="attr"
                type="number"
                :value="store.stats.attributes[attr]"
                @input="(e) => updateAttribute(attr, parseInt(e.target.value))"
                min="8"
                max="20"
                :disabled="!editable"
            />
            <div v-if="editable" class="cost-preview">
              <span v-if="getNextLevelCost(attr)" class="next-level">
                Nächste Stufe: {{ getNextLevelCost(attr) }} AP
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="total-costs">
        Gesamtkosten Attribute: {{ store.totalAttributeCost }} AP
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCharacterStore } from '../store/characterStore'
import { COST_TABLES } from '@/constants/costTables';

const props = defineProps({
  editable: {
    type: Boolean,
    default: true
  }
})

const store = useCharacterStore()

const getAttributeName = (attr) => {
  const names = {
    MU: 'Mut',
    KL: 'Klugheit',
    IN: 'Intuition',
    CH: 'Charisma',
    FF: 'Fingerfertigkeit',
    GE: 'Gewandtheit',
    KO: 'Konstitution',
    KK: 'Körperkraft'
  }
  return `${attr} (${names[attr]})`
}

const getNextLevelCost = (attr) => {
  const currentValue = store.stats.attributes[attr]
  if (currentValue >= 20) return null
  
  return COST_TABLES.E[currentValue] - COST_TABLES.E[currentValue - 1]
}

const updateAttribute = (attr, value) => {
  if (props.editable && !isNaN(value) && value !== store.stats.attributes[attr]) {
    console.log(`Updating ${attr} from ${store.stats.attributes[attr]} to ${value}`)
    store.updateAttribute(attr, value)
  }
}
</script>

<style scoped>
.attributes-section {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.attributes-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.attributes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.attribute-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.attribute-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.attribute-cost {
  font-size: 0.9rem;
  color: #666;
}

.attribute-controls {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.attribute-controls input {
  width: 60px;
  padding: 0.25rem;
  text-align: center;
}

.cost-preview {
  font-size: 0.8rem;
  color: #666;
}

.total-costs {
  text-align: right;
  font-weight: bold;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}

input:disabled {
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  color: #666;
}
</style>