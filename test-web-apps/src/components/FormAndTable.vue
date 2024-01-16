<script setup>
import { BContainer, BRow, BCol, BIconTrashFill } from 'bootstrap-vue'
import DynamicForm from './DynamicForm.vue'
import { getLabel } from '@/utils'

defineProps(['formProps', 'errorMessage', 'table', 'data', 'deleteItem'])
</script>

<template>
  <dynamic-form v-bind="formProps" />
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

  <b-container>
    <b-row>
      <b-col v-for="field in table" :key="field.name" class="cell text-bold">
        {{ getLabel(field) }}
      </b-col>
      <b-col class="cell text-bold">Actions</b-col>
    </b-row>
    <b-row v-for="d in data" :key="d.id">
      <b-col v-for="{ name } in table" :key="name" class="cell">
        {{ d[name] }}
      </b-col>
      <b-col class="cell">
        <b-icon-trash-fill variant="danger" @click="deleteItem(d)" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.text-bold {
  font-weight: bold;
}
.cell {
  background-color: azure;
  border: 1px solid gray;
  padding: 4px;
}
.b-icon {
  cursor: pointer;
}
.error-message {
  padding: 4px;
  background: red;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  margin: 8px;
}
</style>
