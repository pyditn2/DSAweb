import { defineStore } from 'pinia'

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
    calculateAttributeCost(attr, oldValue, newValue) {
      console.log(`Calculating cost from ${oldValue} to ${newValue}`)
      let cost = 0
      // For increasing values
      if (newValue > oldValue) {
        for (let i = oldValue + 1; i <= newValue; i++) {
          if (i > 14) {
            // Changed condition: now applies to the step TO 15 and above
            cost += 15 * (i - 13)  // Changed from (i - 14) to (i - 13)
          } else {
            cost += 15
          }
          console.log(`Level ${i} adds ${cost} cost`)
        }
      }
      // For decreasing values
      else if (newValue < oldValue) {
        for (let i = oldValue; i > newValue; i--) {
          if (i > 14) {
            // Same change here
            cost -= 15 * (i - 13)  // Changed from (i - 14) to (i - 13)
          } else {
            cost -= 15
          }
          console.log(`Level ${i} removes ${cost} cost`)
        }
      }
      console.log(`Final calculated cost: ${cost}`)
      return cost
    },
    updateAttribute(name, newValue) {
      console.log('Starting updateAttribute:', name, newValue)
      const oldValue = this.stats.attributes[name]
      console.log('Old value:', oldValue)
      
      // Don't calculate cost if value hasn't changed
      if (oldValue === newValue) {
        console.log('Value unchanged, skipping cost calculation')
        return
      }
      
      // Ensure value is within valid range
      const validValue = Math.max(8, Math.min(20, newValue))
      console.log('Valid value:', validValue)
      
      // Only calculate and update if the value actually changed
      if (oldValue !== validValue) {
        // Calculate the AP cost
        const cost = this.calculateAttributeCost(name, oldValue, validValue)
        console.log('Calculated cost:', cost)
        
        // Update the attribute value and its cost
        this.stats.attributes[name] = validValue
        this.stats.attributeCosts[name] += cost
        console.log('New attributeCosts:', this.stats.attributeCosts)
      }
    },

    calculateCost(category, index) {
        const talent = this.talents[category][index]
        const costTable = {
          A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 17, 21, 26, 32, 39, 47, 56, 66, 77, 89, 102, 116],
          B: [0, 2, 3, 6, 9, 12, 16, 20, 24, 27, 30, 33, 36, 42, 51, 63, 78, 96, 117, 141, 168, 198, 231, 267, 306, 348],
          C: [0, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 64, 78, 96, 117, 141, 168, 198, 231, 267, 306],
          D: [0, 4, 6, 9, 12, 16, 20, 24, 28, 32, 36, 44, 48, 56, 68, 88, 108, 128, 156, 188, 224, 264, 306, 356, 408, 464],
          E: [0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 45, 60, 75, 90, 120, 165, 225, 300, 375, 465, 555, 645, 735, 825, 915, 1020]
        }
        talent.cost = costTable[talent.factor][talent.desiredLevel] || 0
    }
  }
})
