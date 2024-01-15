<script setup>
import { ref, onMounted } from 'vue'
import { getLabel } from '@/utils'
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import $ from 'jquery'
import DynamicForm from '@/components/DynamicForm.vue'

const data = ref([])
const fetchData = () => {
  $.ajax({
    url: 'http://localhost:8080/api/pengguna/',
    success: (result) => {
      data.value = result
    }
  })
}
onMounted(fetchData)

const formProps = {
  fields: [
    { name: 'id', label: 'ID', type: 'number', disabled: true },
    { name: 'nama' },
    { name: 'alamat', type: 'textarea' },
    { name: 'nomor_telepon' },
    { name: 'jenis_kelamin' }
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
</script>

<template>
  <main>
    <h1 class="mb-4">Pendaftaran</h1>
    <div>
      <dynamic-form v-bind="formProps" />

      <b-container>
        <b-row>
          <b-col
            v-for="field in formProps.fields"
            :key="field.name"
            class="cell text-bold"
          >
            {{ getLabel(field) }}
          </b-col>
        </b-row>
        <b-row v-for="d in data" :key="d.id">
          <b-col v-for="{ name } in formProps.fields" :key="name" class="cell">
            {{ d[name] }}
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
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
</style>
