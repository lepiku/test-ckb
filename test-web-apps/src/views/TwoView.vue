<script setup>
import { BCard } from 'bootstrap-vue'
import MahasiswaCard from '@/components/MahasiswaCard.vue'
import MataKuliahCard from '@/components/MataKuliahCard.vue'
import NilaiMahasiswaCard from '@/components/NilaiMahasiswaCard.vue'
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
