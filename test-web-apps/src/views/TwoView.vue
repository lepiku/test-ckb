<script setup>
import { reactive } from 'vue'
import { BCard, BForm, BButton, BFormInput, BFormGroup } from 'bootstrap-vue'
import MahasiswaCard from '@/components/MahasiswaCard.vue'
import MataKuliahCard from '@/components/MataKuliahCard.vue'
import NilaiMahasiswaCard from '@/components/NilaiMahasiswaCard.vue'
const formMahasiswa = reactive({
  nim: '',
  nama_mahasiswa: '',
  jurusan: ''
})
const formMataKuliah = reactive({
  kode_mata_kuliah: '',
  nama_mata_kuliah: '',
  sks: 0
})
const formNilaiMahasiswa = reactive({
  nim: '',
  kode_mata_kuliah: '',
  tugas: 0,
  uas: 0
})
const form = {
  mahasiswa: {
    title: 'Mahasiswa',
    model: formMahasiswa,
    fields: [
      { name: 'nim', maxlength: 50 },
      { name: 'nama_mahasiswa', maxlength: 50 },
      { name: 'jurusan', maxlength: 50 }
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
      { name: 'sks', type: 'number' }
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
      { name: 'uas', type: 'number' }
    ],
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(formNilaiMahasiswa))
    }
  }
}
</script>

<template>
  <b-container class="py-4">
    <h1 class="mb-2">Test Web Apps II</h1>
    <b-card header="Mahasiswa" class="my-2">
      <mahasiswa-card />
    </b-card>
    <b-card header="Mata Kuliah" class="my-2">
      <mata-kuliah-card />
    </b-card>
    <b-card header="Nilai Mahasiswa" class="my-2">
      <nilai-mahasiswa-card />
    </b-card>
  </b-container>
</template>

<style scoped></style>
