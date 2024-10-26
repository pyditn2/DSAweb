<template>
    <div class="character-info-section">
      <h2>Allgemeine Informationen</h2>
      <div class="character-info-container">
        <!-- Single-line inputs in flex layout -->
        <div class="single-line-grid">
          <div v-for="(value, field) in singleLineFields" :key="field" 
               class="info-item">
            <div class="info-field">
              <label :for="field">{{ value.label }}</label>
              <input
                :id="field"
                type="text"
                :value="store.characterInfo[field]"
                @input="(e) => updateInputInfo(e, field)"
                :disabled="!editable"
                class="dynamic-input"
              />
            </div>
          </div>
        </div>
        
        <!-- Multiline inputs -->
        <div v-for="(value, field) in multiLineFields" :key="field" 
             class="info-item multiline">
          <div class="info-field">
            <label :for="field">{{ value.label }}</label>
            <textarea
              :id="field"
              :value="store.characterInfo[field]"
              @input="(e) => updateInfo(field, e.target.value)"
              :disabled="!editable"
              rows="1"
              @keyup="autoResizeHeight"
              class="auto-resize"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCharacterStore } from '../store/characterStore'
  import { onMounted, computed } from 'vue'
  
  const props = defineProps({
    editable: {
      type: Boolean,
      default: true
    }
  })
  
  const store = useCharacterStore()
  
  const fields = {
    name: { label: 'Name', defaultSize: 20, multiline: false },
    familie: { label: 'Familie', defaultSize: 20, multiline: false },
    spezies: { label: 'Spezies', defaultSize: 15, multiline: false },
    haarfarbe: { label: 'Haarfarbe', defaultSize: 15, multiline: false },
    kultur: { label: 'Kultur', defaultSize: 20, multiline: false },
    titel: { label: 'Titel', defaultSize: 20, multiline: false },
    charakteristika: { label: 'Charakteristika', multiline: true },
    sonstiges: { label: 'Sonstiges', multiline: true }
  }
  
  // Split fields into single-line and multiline
  const singleLineFields = computed(() => {
    return Object.entries(fields)
      .filter(([, value]) => !value.multiline)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  })
  
  const multiLineFields = computed(() => {
    return Object.entries(fields)
      .filter(([, value]) => value.multiline)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  })
  
  const updateInfo = (field, value) => {
    if (props.editable) {
      store.updateCharacterInfo(field, value)
    }
  }
  
  const updateInputInfo = (event, field) => {
    if (props.editable) {
      const value = event.target.value
      store.updateCharacterInfo(field, value)
    }
  }
  
  const autoResizeHeight = (event) => {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }
  
  onMounted(() => {
    document.querySelectorAll('.auto-resize').forEach(textarea => {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    })
  })
  </script>
  
  <style scoped>
  .character-info-section {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f8f8f8;
    border-radius: 8px;
  }
  
  .character-info-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .single-line-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .info-item {
    background-color: white;
    padding: 0.5rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    flex: 1 0 auto;
    min-width: 200px;
  }
  
  .info-item.multiline {
    width: 100%;
  }
  
  .info-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .info-field label {
    font-weight: 500;
    white-space: nowrap;
  }
  
  .dynamic-input {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: auto;
    min-width: 80px;
    box-sizing: border-box;
  }
  
  .auto-resize {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    resize: none;
    overflow: hidden;
    min-height: 2.5em;
    line-height: 1.5;
  }
  
  input:disabled,
  textarea:disabled {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    color: #666;
  }
  
  .info-field input {
    width: 100%;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .info-item {
      width: 100%;
    }
  }
  </style>