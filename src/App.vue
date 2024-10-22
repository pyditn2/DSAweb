<template>
  <div id="app">
    <h1>DSA Talent Tables</h1>
    <h2>Start-AP: {{ apStart }}</h2>
    <label for="earned-ap">Erhaltene AP:</label>
    <input type="number" id="earned-ap" v-model="apEarned" />

    <!-- Display AP Übrig -->
    <h2>AP Übrig: {{ apUebrig }}</h2>

    <!-- Körpertalente Table -->
    <TalentTable title="Körpertalente" :talents="koerpertalente" @update-cost="calculateCosts" />

    <!-- Naturtalente Table -->
    <TalentTable title="Naturtalente" :talents="naturtalente" @update-cost="calculateCosts" />

    <!-- Sum -->
    <h2>Gesamte Kosten: {{ totalCost }}</h2>
  </div>
</template>

<script>
import TalentTable from './TalentTable.vue';

export default {
  components: {
    TalentTable
  },
  data() {
    return {
      apStart: 1100, // Starting AP
      apEarned: 0, // Earned AP (input by the user)

      // Define the Körpertalente talents dynamically
      koerpertalente: [
        { name: 'Fliegen', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Gaukeln', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Klettern', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Kraftakt', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Schwimmen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ],

      // Define Naturtalente dynamically
      naturtalente: [
        { name: 'Fährtensuchen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Fesseln', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ]
    };
  },
  computed: {
  totalCost() {
    const koerpertalenteCost = this.koerpertalente.reduce((sum, row) => sum + row.cost, 0);
    const naturtalenteCost = this.naturtalente.reduce((sum, row) => sum + row.cost, 0);
    return koerpertalenteCost + naturtalenteCost;
  },
  apUebrig() {
    return this.apStart + this.apEarned - this.totalCost;
  }
},
  methods: {
    calculateCosts(index, talentType) {
      const factorCostTable = {
        A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 21, 26, 32, 39, 47, 56, 66, 77, 89, 102, 116],
        B: [0, 2, 3, 6, 9, 12, 16, 20, 24, 27, 30, 33, 36, 42, 51, 63, 78, 96, 117, 141, 168, 198, 231, 267, 306, 348],
        C: [0, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 64, 78, 96, 117, 141, 168, 198, 231, 267, 306],
        D: [0, 4, 6, 9, 12, 16, 20, 24, 28, 32, 36, 44, 48, 56, 68, 88, 108, 128, 156, 188, 224, 264, 306, 356, 408, 464],
        E: [0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 45, 60, 75, 90, 120, 165, 225, 300, 375, 465, 555, 645, 735, 825, 915, 1020]
      };

      // Update the correct talent array based on talentType
      let talentArray = talentType === 'koerpertalente' ? this.koerpertalente : this.naturtalente;
      let row = talentArray[index];

      // Safety check for undefined factor
      if (!row.factor || !factorCostTable[row.factor]) {
        console.error(`Factor is undefined for talent at index ${index} or not a valid factor: ${row.factor}`);
        return;
      }

      // Ensure that the desired level exists in the factorCostTable
      if (row.desiredLevel >= factorCostTable[row.factor].length) {
        console.error(`Desired level out of range for talent: ${row.name}`);
        return;
      }

      // Calculate the cost
      row.cost = factorCostTable[row.factor][row.desiredLevel];
    }
  }
};
</script>

<style>
/* Add any additional styles */
</style>
