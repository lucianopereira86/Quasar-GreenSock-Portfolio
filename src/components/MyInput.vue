<template>
  <!-- Q-input customizado -->
  <q-input
    bottom-slots
    :label="label"
    v-model="form[model]"
    counter
    :maxlength="max"
    class="full-width"
  >
    <template v-if="form[model]" v-slot:append>
      <q-icon name="cancel" @click.stop="form[model] = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script>
export default {
  props: {
    label: String,
    form: Object,
    model: String,
    max: Number
  }
}
</script>

<style>
</style>
