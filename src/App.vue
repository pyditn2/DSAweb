<template>
  <div id="app">
    <h1>DSA Talent Tables</h1>
    <h2>Start-AP: {{ apStart }}</h2>
    <label for="earned-ap">Erhaltene AP:</label>
    <input type="number" id="earned-ap" v-model="apEarned" />

    <!-- Display AP Übrig -->
    <h2>AP Übrig: {{ apUebrig }}</h2>
    <div class="tables-container">
      <!-- Körpertalente Table -->
      <TalentTable title="Körpertalente" :talents="koerpertalente" @update-cost="calculateCosts" />
      <h2>AP Übrig: {{ apUebrig }}</h2>
      <h2>Gesamte Kosten: {{ totalCost }}</h2>
      <!-- Naturtalente Table -->
      <TalentTable title="Naturtalente" :talents="naturtalente" @update-cost="calculateCosts" />
      <h2>AP Übrig: {{ apUebrig }}</h2>
      <h2>Gesamte Kosten: {{ totalCost }}</h2>
      <!-- Gesellschaftstalente Table -->
      <TalentTable title="Gesellschaftstalente" :talents="gesellschaftstalente" @update-cost="calculateCosts" />
      <h2>AP Übrig: {{ apUebrig }}</h2>
      <h2>Gesamte Kosten: {{ totalCost }}</h2>
      <!-- Wissentalente Table -->
      <TalentTable title="Wissentalente" :talents="wissentalente" @update-cost="calculateCosts" />
      <h2>AP Übrig: {{ apUebrig }}</h2>
      <h2>Gesamte Kosten: {{ totalCost }}</h2>
      <!-- Handwerkstalente Table -->
      <TalentTable title="Handwerkstalente" :talents="handwerkstalente" @update-cost="calculateCosts" />
      <h2>AP Übrig: {{ apUebrig }}</h2>
      <h2>Gesamte Kosten: {{ totalCost }}</h2>
    </div>

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
        { name: 'Klettern', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Körperbeherrschung', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Kraftakt', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Reiten', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Schwimmen', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Selbstbeherrschung', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Singen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Sinnenschärfe', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Tanzen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Taschendiebstahl', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Verbergen', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Zechen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ],
      gesellschaftstalente: [
        { name: 'Bekehren und Überzeugen', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Betören', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Einschüchtern', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Etikette', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Gassenwissen', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Menschenkenntnis', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Überreden', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Verkleiden', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Willenskraft', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ],
      // Define Naturtalente dynamically
      naturtalente: [
        { name: 'Fährtensuchen', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Fesseln', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Fischen/Angeln', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Orientierung', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Pflanzenkunde', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Tierkunde', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Wildnisleben', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ],
      wissentalente: [
        { name: 'Brett- und Glücksspiel', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Geographie', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Geschichtswissen', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Götter und Kulte', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Kriegskunst', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Magiekunde', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Mechanik', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Rechnen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Rechtskunde', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Sagen und Legenden', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Sphärenkunde', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Sternkunde', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ],
      handwerkstalente: [
        { name: 'Alchimie', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Boote und Schiffe', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Fahrzeuge', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Handel', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Heilkunde Gift', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Heilkunde Krankheiten', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Heilkunde Seele', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Heilkunde Wunden', factor: 'D', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Holzbearbeitung', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Lebensmittelbearbeitung', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Lederbearbeitung', factor: 'B', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Malen und Zeichnen', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Metallbearbeitung', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Musizieren', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Schlösserknacken', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Steinbearbeitung', factor: 'C', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' },
        { name: 'Stoffbearbeitung', factor: 'A', desiredLevel: 0, cost: 0, skillLevel: 0, outstandingSkill: 0, inabilityLevel: 0, specialization: '' }
      ]
    };
  },
  computed: {
    totalCost() {
      const koerpertalenteCost = this.koerpertalente.reduce((sum, row) => sum + row.cost, 0);
      const naturtalenteCost = this.naturtalente.reduce((sum, row) => sum + row.cost, 0);
      const gesellschaftstalenteCost = this.gesellschaftstalente.reduce((sum, row) => sum + row.cost, 0);
      const wissentalenteCost = this.wissentalente.reduce((sum, row) => sum + row.cost, 0);
      const handwerkstalenteCost = this.handwerkstalente.reduce((sum, row) => sum + row.cost, 0);
      return koerpertalenteCost + naturtalenteCost + gesellschaftstalenteCost + wissentalenteCost + handwerkstalenteCost;
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

      let talentArray;
      switch (talentType) {
        case 'koerpertalente':
          talentArray = this.koerpertalente;
          break;
        case 'naturtalente':
          talentArray = this.naturtalente;
          break;
        case 'gesellschaftstalente':
          talentArray = this.gesellschaftstalente;
          break;
        case 'wissentalente':
          talentArray = this.wissentalente;
          break;
        case 'handwerkstalente':  // Ensure Handwerkstalente is handled here
          talentArray = this.handwerkstalente;
        break;
        default:
          console.error(`Unknown talent type: ${talentType}`);
          return;
      }

      let row = talentArray[index];

      // Safety check for undefined factor
      if (!row.factor || !factorCostTable[row.factor]) {
        console.error(`Factor is undefined or invalid for talent at index ${index}: ${row.name}`);
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

<style scoped>
#app {
  padding: 20px;
}

/* Container for the tables */
.tables-container {
  width: 33.33%; /* Restrict to 1/3 of the screen */
  float: left;   /* Align to the left */
}

/* Ensure the tables fit within the container */
table {
  width: 100%; /* Ensure tables take full width of the container */
  border-collapse: collapse;
  margin-bottom: 20px;
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

