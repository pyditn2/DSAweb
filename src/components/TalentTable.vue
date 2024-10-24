<template>
    <div class="talent-table">
      <h2>{{ title }}</h2>
      <table>
        <thead>
          <tr>
            <th>Talent</th>
            <th>Steigerungsfaktor</th>
            <th>Gewünschte Stufe</th>
            <th>Kosten</th>
            <th>Begabungstufe</th>
            <th>Herausragende Fertigkeit</th>
            <th>Unfähigkeitstufe</th>
            <th>Spezialisierung</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(talent, index) in talents" :key="talent.name">
            <td>{{ talent.name }}</td>
            <td>{{ talent.factor }}</td>
            <td>
              <input 
                type="number" 
                v-model="talent.desiredLevel"
                @input="updateTalent(index, 'desiredLevel', $event.target.value)"
              />
            </td>
            <td>{{ talent.cost }}</td>
            <td>
              <input 
                type="number" 
                v-model="talent.skillLevel"
                min="0" 
                max="3"
              />
            </td>
            <td>
              <input 
                type="number" 
                v-model="talent.outstandingSkill"
                min="0" 
                max="4"
              />
            </td>
            <td>
              <input 
                type="number" 
                v-model="talent.inabilityLevel"
                min="0" 
                max="2"
              />
            </td>
            <td>
              <input 
                type="text" 
                v-model="talent.specialization"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../store/characterStore'
  
  const props = defineProps({
    title: String,
    category: String,
    talents: Array
  })
  
  const store = useCharacterStore()
  
  const updateTalent = (index, field, value) => {
    if (field === 'desiredLevel') {
      store.updateTalentLevel(props.category, index, parseInt(value))
    }
  }
  </script>