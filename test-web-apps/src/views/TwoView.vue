<script setup>
import { reactive } from 'vue'
import {
  BCard,
  BForm,
  BButton,
  BFormInput,
  BFormGroup,
} from 'bootstrap-vue'
const formMahasiswa = reactive({
  nim: '',
  nama_mahasiswa: '',
  jurusan: '',
})
const formMataKuliah = reactive({
  kode_mata_kuliah: '',
  nama_mata_kuliah: '',
  sks: 0,
})
const formNilaiMahasiswa = reactive({
  nim: '',
  kode_mata_kuliah: '',
  tugas: 0,
  uas: 0,
})
const form = {
  mahasiswa: {
    title: 'Mahasiswa',
    model: formMahasiswa,
    fields: [
      { name: 'nim', maxlength: 50 },
      { name: 'nama_mahasiswa', maxlength: 50 },
      { name: 'jurusan', maxlength: 50 },
    ],
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(formMahasiswa))
    }
  },
  mataKuliah: {
    title: 'Mata Kuliah',
    model: formMataKuliah,
    fields: [
      { name: 'kode_mata_kuliah', maxlength: 50 },
      { name: 'nama_mata_kuliah', maxlength: 50 },
      { name: 'sks', type: 'number' },
    ],
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(formMataKuliah))
    }
  },
  nilaiMahasiswa: {
    title: 'Nilai Mahasiswa',
    model: formNilaiMahasiswa,
    fields: [
      { name: 'nim', maxlength: 50 },
      { name: 'kode_mata_kuliah', maxlength: 50 },
      { name: 'tugas', type: 'number' },
      { name: 'uas', type: 'number' },
    ],
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(formNilaiMahasiswa))
    }
  },
}
</script>

<template>
  <main>
    <h1 class="mb-4">Test Web Apps II</h1>
    <div>
      <b-card
        v-for="f in [form.mahasiswa, form.mataKuliah, form.nilaiMahasiswa]"
        :key="f.title"
        :header="f.title"
        class="m-2"
      >
        <b-form
          @submit="f.onSubmit"
          class="mb-4"
        >

          <b-form-group
            v-for="field in f.fields" 
            :key="field.name"
            :id="`input-group-${field.name}`"
            :label="field.name"
            :label-for="`input-${field.name}`"
          >
            <b-form-input
              :id="`input-${field.name}`"
              v-model="f.model[field.name]"
              :placeholder="`Masukkan ${field.name}`"
              :type="field.type"
              :maxlength="field.maxlength"
              required
            />
          </b-form-group>

          <b-button type="submit" variant="primary" class="mt-2">Submit</b-button>
        </b-form>
      </b-card>
      

      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </main>
</template>

<style scoped>

</style>
