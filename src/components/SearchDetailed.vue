<template></template>

<script setup lang="ts">
const props = defineProps({
  results: {
    type: Array,
    required: true,
  },
  accountStart: { type: String },
})

const inAccountNumberRange = (accountNumber: string) => {
  if (!props.accountStart) {
    return true
  }
  return false
}
</script>
