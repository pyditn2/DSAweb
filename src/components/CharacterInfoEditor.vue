<template>
    <div class="editor-section">
      <h2>Allgemeine Informationen</h2>
      <div class="editor-grid">
        <div v-for="(value, field) in singleLineFields" :key="field" class="editor-item">
          <label>{{ value.label }}</label>
          <div class="growing-input-container">
            <span class="size-calculator" aria-hidden="true">{{ store.characterInfo[field] }}&nbsp;</span>
            <input
              type="text"
              :value="store.characterInfo[field]"
              @input="(e) => updateInfo(field, e.target.value)"
              :disabled="!editable"
            />
          </div>
        </div>
        
        <div v-for="(value, field) in multiLineFields" :key="field" class="editor-item full-width">
          <label>{{ value.label }}</label>
          <textarea
            :value="store.characterInfo[field]"
            @input="(e) => {
              updateInfo(field, e.target.value);
              autoResize(e.target);
            }"
            :disabled="!editable"
            rows="1"
          ></textarea>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../store/characterStore'
  import { computed, onMounted } from 'vue'
  
  const props = defineProps({
    editable: {
      type: Boolean,
      default: true
    }
  })
  
  const store = useCharacterStore()
  
  const fields = {
    name: { label: 'Name', multiline: false },
    familie: { label: 'Familie', multiline: false },
    spezies: { label: 'Spezies', multiline: false },
    haarfarbe: { label: 'Haarfarbe', multiline: false },
    kultur: { label: 'Kultur', multiline: false },
    titel: { label: 'Titel', multiline: false },
    charakteristika: { label: 'Charakteristika', multiline: true },
    sonstiges: { label: 'Sonstiges', multiline: true }
  }
  
  const singleLineFields = computed(() => 
    Object.entries(fields)
      .filter(([, value]) => !value.multiline)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  )
  
  const multiLineFields = computed(() => 
    Object.entries(fields)
      .filter(([, value]) => value.multiline)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  )
  
  const updateInfo = (field, value) => {
    if (props.editable) {
      store.updateCharacterInfo(field, value)
    }
  }
  
  const autoResize = (textarea) => {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }
  
  onMounted(() => {
    // Initialize textarea heights
    document.querySelectorAll('textarea').forEach(textarea => {
      autoResize(textarea)
    })
  })
  </script>
  
  <style scoped>
.editor-section {
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
}

.editor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.editor-item {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.editor-item.full-width {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.growing-input-container {
  position: relative;
  display: inline-block;
  width: fit-content;
  min-width: 80px;
}

.size-calculator {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  white-space: pre;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;
  min-width: 80px;
}

input {
  width: 100%;
  min-width: 80px;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  width: 100%;
  padding: 0.5rem 0.5rem;  
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  overflow: hidden;
  line-height: 1.2;  
  min-height: 2em;  
  box-sizing: border-box;
  display: block;
}

input:disabled,
textarea:disabled {
  background-color: #f0f0f0;
  color: #666;
}
</style>