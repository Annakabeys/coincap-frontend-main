<template>
  <div>
    <cd-label label-name="portfolio-holdings">Select Holding</cd-label>
    <cd-select
      select-name="holdings"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="cd-select"
    >
      <option v-for="asset in assets" :key="asset" :value="asset.name">
        {{ asset.name }}
      </option>
    </cd-select>
  </div>
</template>

<script setup lang="ts">
import CdSelect from '../atoms/cd-select.vue'
import CdLabel from '../atoms/cd-label.vue'
import { useCrypto } from '@/composables/useCrypto.ts'

defineProps(['modelValue'])

defineEmits(['update: modelValue'])

const { assets, selectedAsset } = useCrypto();
</script>

<style scoped>
.cd-select {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 30%;
}
</style>

<!-- <template>
  <cd-label label-name="portfolio-holdings"> Holdings </cd-label>
  <cd-input
    input-type="text"
    input-name="holdings"
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
</script> -->
