<script setup>
import { ref, onMounted } from 'vue'
import { getLabel } from '@/utils'
import { BContainer, BRow, BCol, BIconTrashFill } from 'bootstrap-vue'
import $ from 'jquery'
import DynamicForm from '@/components/DynamicForm.vue'

const data = ref([])
const fetchData = async () => {
  const result = await $.ajax({
    url: 'http://localhost:8080/api/pengguna/'
  })
  data.value = result
}
onMounted(fetchData)

const deleteItem = (id) => {
  $.ajax({
    method: 'delete',
    url: `http://localhost:8080/api/pengguna/${id}/`,
    success: fetchData
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
  submitUrl: 'http://localhost:8080/api/pengguna/',
  submitMethod: 'post'
}
const table = [
  { name: 'id', label: 'ID', type: 'number', disabled: true },
  ...formProps.fields
]
</script>

<template>
  <b-container class="py-4">
    <h1 class="mb-4">Pendaftaran</h1>

    <dynamic-form v-bind="formProps" @refetch="fetchData" />

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
</style>
