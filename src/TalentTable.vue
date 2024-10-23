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
      let talentType = '';

      // Determine the talent type based on the title
      if (this.title.toLowerCase().includes('körpertalente')) {
        talentType = 'koerpertalente';
      } else if (this.title.toLowerCase().includes('naturtalente')) {
        talentType = 'naturtalente';
      } else if (this.title.toLowerCase().includes('gesellschaftstalente')) {
        talentType = 'gesellschaftstalente';
      } else if (this.title.toLowerCase().includes('wissentalente')) {
        talentType = 'wissentalente';
      } else if (this.title.toLowerCase().includes('handwerkstalente')) {
        talentType = 'handwerkstalente';  // Ensure Handwerkstalente is handled here
      }

      // Emit the update-cost event with the index and talent type
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
  