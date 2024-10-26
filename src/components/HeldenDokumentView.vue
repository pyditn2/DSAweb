<template>
  <div class="helden-dokument">
    <h2>Heldendokument</h2>
    
    <!-- Display attributes in read-only mode -->
    <CharacterInfoEditor :editable="false" />
    <AttributesEditor :editable="false" />
      <!-- You can add more sections here later -->
    
  </div>
</template>

<script setup>
import CharacterInfoEditor from './CharacterInfoEditor.vue'
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