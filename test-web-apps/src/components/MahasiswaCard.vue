<script setup>
import { ref, onMounted } from 'vue'
import FormAndTable from './FormAndTable.vue'
import $ from 'jquery'

const data = ref([])
const errorMessage = ref(null)

const fetchData = () => {
  $.ajax({
    url: 'http://localhost:8080/api/mahasiswa/',
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
      url: 'http://localhost:8080/api/mahasiswa/',
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
    url: `http://localhost:8080/api/mahasiswa/${item.nim}/`,
    success: () => fetchData(),
    error: (err) => {
      errorMessage.value = err.responseJSON.message
    }
  })
}

const formProps = {
  fields: [
    { name: 'nim', label: 'NIM' },
    { name: 'nama_mahasiswa' },
    { name: 'jurusan' }
  ],
  initialValues: {
    nim: '',
    nama_mahasiswa: '',
    jurusan: ''
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
