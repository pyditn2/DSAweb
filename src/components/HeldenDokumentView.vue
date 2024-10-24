<template>
  <div class="helden-dokument">
    <h2>Heldendokument</h2>
    
    <!-- Display attributes in read-only mode -->
    <AttributesEditor :editable="false" />
    
    <!-- Add other character information here -->
    <div class="character-info">
      <!-- You can add more sections here later -->
    </div>
  </div>
</template>

<script setup>
import AttributesEditor from './AttributesEditor.vue'
</script>

<style scoped>
.helden-dokument {
  padding: 1rem;
}

.character-info {
  margin-top: 2rem;
}
</style>