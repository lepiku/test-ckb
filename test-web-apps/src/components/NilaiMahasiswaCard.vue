<script setup>
import { ref, onMounted } from 'vue'
import FormAndTable from './FormAndTable.vue'
import $ from 'jquery'

const data = ref([])
const errorMessage = ref(null)

const fetchData = () => {
  $.ajax({
    url: 'http://localhost:8080/api/nilai-mahasiswa/',
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
      url: 'http://localhost:8080/api/nilai-mahasiswa/',
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

const deleteItem = (item) => {
  errorMessage.value = null
  $.ajax({
    method: 'delete',
    url: `http://localhost:8080/api/nilai-mahasiswa/${item.nim}/${item.kode_mata_kuliah}/`,
    success: () => fetchData(),
    error: (err) => {
      errorMessage.value = err.responseJSON.message
    }
  })
}

const formProps = {
  fields: [
    { name: 'nim', label: 'NIM' },
    { name: 'kode_mata_kuliah' },
    { name: 'tugas', type: 'number' },
    { name: 'uas', label: 'UAS', type: 'number' }
  ],
  initialValues: {
    nim: '',
    kode_mata_kuliah: '',
    tugas: null,
    uas: null
  },
  onSubmit,
  onReset
}

onMounted(() => fetchData())
</script>

<template>
  <form-and-table
    :form-props="formProps"
    :data="data"
    :table="formProps.fields"
    :delete-item="deleteItem"
    :error-message="errorMessage"
  />
</template>
