<template>
  <cd-label label-name="portfolio-quantity"> Quantity </cd-label>
  <cd-input
    input-type="number"
    input-name="quantity"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    required
    start="0.0" 
    step="0.1"
  />
</template>

<script setup lang="ts">
import CdLabel from '../atoms/cd-label.vue'
import CdInput from '../atoms/cd-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>
