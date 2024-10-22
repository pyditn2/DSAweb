<template>
    <div>
      <h2>{{ title }}</h2>
      <!-- Dynamic Table -->
      <table>
        <thead>
          <tr>
            <th>Talent</th>
            <th>Steigerungsfaktor</th>
            <th>Gewünschte Stufe</th>
            <th>Kosten</th>
            <th>Begabungstufe (max 3)</th>
            <th>Herausragende Fertigkeit (max 4)</th>
            <th>Unfähigkeitstufe (max 2)</th>
            <th>Spezialisierung</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in talents" :key="index">
            <td>{{ row.name }}</td>
            <td>{{ row.factor }}</td>
            <td><input type="number" v-model="row.desiredLevel" @input="updateCost(index)" /></td>
            <td>{{ row.cost }}</td>
            <td><input type="number" v-model="row.skillLevel" min="0" max="3" /></td>
            <td><input type="number" v-model="row.outstandingSkill" min="0" max="4" /></td>
            <td><input type="number" v-model="row.inabilityLevel" min="0" max="2" /></td>
            <td><input type="text" v-model="row.specialization" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      talents: Array,
      title: String
    },
    methods: {
      updateCost(index) {
        const talentType = this.title.toLowerCase().includes('körpertalente') ? 'koerpertalente' : 'naturtalente';
        this.$emit('update-cost', index, talentType);
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  input {
    width: 100%;
    padding: 4px;
  }
  </style>
  