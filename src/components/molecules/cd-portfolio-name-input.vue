<template>
  <cd-label label-name="portfolio-name"> Portfolio Name </cd-label>
  <cd-input
    input-type="text"
    input-name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    required
  />
</template>

<script setup lang="ts">
import CdLabel from '../atoms/cd-label.vue'
import CdInput from '../atoms/cd-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>
