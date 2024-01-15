<script setup>
import {
  BForm,
  BButton,
  BFormInput,
  BFormGroup,
  BFormTextarea,
  BFormRadio
} from 'bootstrap-vue'
import { reactive, nextTick, ref } from 'vue'
import { getLabel } from '@/utils'

const props = defineProps(['fields', 'initialValues', 'onSubmit', 'onReset'])

const model = reactive({ ...props.initialValues })
const show = ref(true)

const onFormSubmit = async () => {
  if (await props.onSubmit({ ...model })) {
    onFormReset()
  }
}
const onFormReset = () => {
  props.onReset()
  Object.assign(model, props.initialValues)
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
</script>

<template>
  <b-form
    v-if="show"
    @submit.prevent="onFormSubmit"
    @reset.prevent="onFormReset"
    class="mb-4"
  >
    <b-form-group
      v-for="field in fields"
      :key="field.name"
      :id="`input-group-${field.name}`"
      :label="getLabel(field)"
      :label-for="`input-${field.name}`"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-textarea
        v-if="field.type === 'textarea'"
        :id="`input-${field.name}`"
        v-model="model[field.name]"
        :placeholder="`Masukkan ${getLabel(field)}`"
        :maxlength="field.maxlength"
        required
      />
      <b-form-radio
        v-else-if="field.type === 'radio'"
        v-for="c in field.choices"
        :key="c"
        v-model="model[field.name]"
        :aria-describedby="ariaDescribedby"
        :name="field.name"
        :value="c"
      >
        {{ c }}
      </b-form-radio>
      <b-form-input
        v-else
        :id="`input-${field.name}`"
        v-model="model[field.name]"
        :placeholder="`Masukkan ${getLabel(field)}`"
        :type="field.type"
        :maxlength="field.maxlength"
        required
      />
    </b-form-group>

    <div class="my-2">
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
    </div>
  </b-form>
</template>
