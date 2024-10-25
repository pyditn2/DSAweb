import { defineStore } from 'pinia'
import { COST_TABLES } from '../constants/costTables'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    apStart: 1100,
    apEarned: 0,

    talents: {
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
    },
    stats: {
      attributes: {
        MU: 8,  // Mut
        KL: 8,  // Klugheit
        IN: 8,  // Intuition
        CH: 8,  // Charisma
        FF: 8,  // Fingerfertigkeit
        GE: 8,  // Gewandtheit
        KO: 8,  // Konstitution
        KK: 8   // Körperkraft
      },
      attributeCosts: {
        MU: 0,
        KL: 0,
        IN: 0,
        CH: 0,
        FF: 0,
        GE: 0,
        KO: 0,
        KK: 0
      }
    }
  }),
  getters: {
    totalAttributeCost: (state) => {
      // Access attributeCosts from the correct location in state
      return Object.values(state.stats.attributeCosts).reduce((sum, cost) => sum + cost, 0)
    },
  
    totalTalentCost: (state) => {
      return Object.values(state.talents).reduce((total, category) => {
        return total + category.reduce((sum, talent) => sum + talent.cost, 0)
      }, 0)
    },
  
    totalCost() {
      // We need to access other getters using this
      return this.totalAttributeCost + this.totalTalentCost
    },
  
    apUebrig(state) {
      // Use state to access direct state properties
      return state.apStart + state.apEarned - this.totalCost
    }
  },

  actions: {
    updateTalentLevel(category, index, newLevel) {
      const talent = this.talents[category][index]
      talent.desiredLevel = newLevel
      this.calculateCost(category, index)
    },
 
    calculateCost(category, index) {
      const talent = this.talents[category][index]
      talent.cost = COST_TABLES[talent.factor][talent.desiredLevel] || 0
    },
 
    updateAttribute(name, newValue) {
      const oldValue = this.stats.attributes[name]
      if (oldValue === newValue) return
      
      const validValue = Math.max(8, Math.min(20, newValue))
      
      const oldCost = COST_TABLES.E[oldValue - 1] || 0
      const newCost = COST_TABLES.E[validValue - 1] || 0
      const costDifference = newCost - oldCost
      
      this.stats.attributes[name] = validValue
      this.stats.attributeCosts[name] += costDifference
    }
  }
})
