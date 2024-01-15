<script setup>
import { BForm, BButton, BFormInput, BFormGroup } from 'bootstrap-vue'
import { reactive } from 'vue'

const props = defineProps(['fields', 'onSubmit', 'initialValues'])

const model = reactive(props.initialValues)
</script>

<template>
  <b-form @submit="onSubmit" class="mb-4">
    <b-form-group
      v-for="field in fields"
      :key="field.name"
      :id="`input-group-${field.name}`"
      :label="field.name"
      :label-for="`input-${field.name}`"
    >
      <b-form-input
        :id="`input-${field.name}`"
        v-model="model[field.name]"
        :placeholder="`Masukkan ${field.name}`"
        :type="field.type"
        :maxlength="field.maxlength"
        required
      />
    </b-form-group>

    <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
  </b-form>
</template>
