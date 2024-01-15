<script setup>
import { ref, onMounted } from 'vue'
import { getLabel } from '@/utils'
import { BContainer, BRow, BCol, BIconTrashFill } from 'bootstrap-vue'
import $ from 'jquery'
import DynamicForm from '@/components/DynamicForm.vue'

const data = ref([])
const errorMessage = ref(null)

const fetchData = () => {
  $.ajax({
    url: 'http://localhost:8080/api/pengguna/',
    success: (result) => {
      data.value = result
    }
  })
}
const onSubmit = (values) => {
  errorMessage.value = null
  return new Promise((resolve) => {
    $.ajax({
      method: 'post',
      url: 'http://localhost:8080/api/pengguna/',
      data: values,
      success: () => {
        fetchData()
        resolve(true)
      },
      error: (err) => {
        errorMessage.value = err.responseJSON.message
        resolve(false)
      }
    })
  })
}
const onReset = () => {
  errorMessage.value = null
}

const deleteItem = (id) => {
  errorMessage.value = null
  $.ajax({
    method: 'delete',
    url: `http://localhost:8080/api/pengguna/${id}/`,
    success: () => fetchData(),
    error: (err) => {
      errorMessage.value = err.responseJSON.message
    }
  })
}

const formProps = {
  fields: [
    { name: 'nama' },
    { name: 'alamat', type: 'textarea' },
    { name: 'nomor_telepon' },
    { name: 'jenis_kelamin', type: 'radio', choices: ['Pria', 'Wanita'] }
  ],
  initialValues: {
    id: 0,
    nama: '',
    alamat: '',
    nomor_telepon: '',
    jenis_kelamin: ''
  },
  onSubmit,
  onReset
}
const table = [
  { name: 'id', label: 'ID', type: 'number', disabled: true },
  ...formProps.fields
]

onMounted(() => fetchData())
</script>

<template>
  <b-container class="py-4">
    <h1 class="mb-4">Pendaftaran</h1>

    <dynamic-form v-bind="formProps" />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <b-container>
      <b-row>
        <b-col v-for="field in table" :key="field.name" class="cell text-bold">
          {{ getLabel(field) }}
        </b-col>
        <b-col class="cell text-bold"> Actions </b-col>
      </b-row>
      <b-row v-for="d in data" :key="d.id">
        <b-col v-for="{ name } in table" :key="name" class="cell">
          {{ d[name] }}
        </b-col>
        <b-col class="cell">
          <b-icon-trash-fill variant="danger" @click="deleteItem(d.id)" />
        </b-col>
      </b-row>
    </b-container>
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
