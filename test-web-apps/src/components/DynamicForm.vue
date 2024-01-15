<script setup>
import { BForm, BButton, BFormInput, BFormGroup } from 'bootstrap-vue'
import { reactive } from 'vue'
import { getLabel } from '@/utils'
import $ from 'jquery'

const props = defineProps([
  'fields',
  'initialValues',
  'submitUrl',
  'submitMethod',
  'submitSuccess'
])

const model = reactive(props.initialValues)

const onSubmit = () => {
  $.ajax({
    method: props.submitMethod,
    url: props.submitUrl,
    data: model,
    success: props.submitSuccess
  })
}
const onReset = () => {
  Object.assign(model, props.initialValues)
}
</script>

<template>
  <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="mb-4">
    <b-form-group
      v-for="field in fields"
      :key="field.name"
      :id="`input-group-${field.name}`"
      :label="getLabel(field)"
      :label-for="`input-${field.name}`"
    >
      <b-form-input
        :id="`input-${field.name}`"
        v-model="model[field.name]"
        :placeholder="`Masukkan ${getLabel(field)}`"
        :type="field.type"
        :maxlength="field.maxlength"
        required
      />
    </b-form-group>

    <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
  </b-form>
</template>
