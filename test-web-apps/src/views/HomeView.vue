<script setup>
import { ref, reactive, onMounted } from 'vue'
import {
  BForm,
  BButton,
  BFormInput,
  BFormGroup,
  BFormTextarea,
  BFormRadio,
  BContainer,
  BRow,
  BCol
} from 'bootstrap-vue'
const form = reactive({
  ID: 0,
  nama: '',
  alamat: '',
  nomor_telepon: '',
  jenis_kelamin: ''
})
import $ from 'jquery'

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

const table = [
  { name: 'id', label: 'ID' },
  { name: 'nama', label: 'Nama' },
  { name: 'alamat', label: 'Alamat' },
  { name: 'nomor_telepon', label: 'Nomor Telepon' },
  { name: 'jenis_kelamin', label: 'Jenis Kelamin' }
]

const show = ref(true)
// const foods = ref([{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'])
const onSubmit = (event) => {
  event.preventDefault()
  // alert(JSON.stringify(form))
  $.ajax({
    method: 'post',
    url: 'http://localhost:8080/api/pengguna/',
    data: form
    // contentType: 'application/json'
  })
}

const onReset = (event) => {
  event.preventDefault()
  // Reset our form values
  form.ID = 0
  form.nama = ''
  form.alamat = ''
  form.nomor_telepon = ''
  form.jenis_kelamin = ''
}
</script>

<template>
  <main>
    <h1 class="mb-4">Pendaftaran</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="ID:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.id" type="number" disabled></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Nama:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.nama"
            placeholder="Masukkan Nama"
            required
            maxlength="50"
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Alamat:" label-for="input-3">
          <b-form-textarea
            id="input-3"
            v-model="form.alamat"
            placeholder="Masukkan Alamat"
            required
            maxlength="16"
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="Nomor Telepon:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.nomor_telepon"
            placeholder="Masukkan Nomor Telepon"
            type="tel"
            required
            maxlength="16"
          />
        </b-form-group>

        <b-form-group label="Jenis Kelamin:" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="form.jenis_kelamin"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Pria"
          >
            Pria
          </b-form-radio>
          <b-form-radio
            v-model="form.jenis_kelamin"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Wanita"
          >
            Wanita
          </b-form-radio>
        </b-form-group>

        <div class="my-4">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
        </div>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->

      <b-container>
        <b-row class="">
          <b-col v-for="{ label } in table" :key="label" class="cell text-bold">
            {{ label }}
          </b-col>
        </b-row>
        <b-row v-for="d in data" :key="d.id">
          <b-col v-for="{ name } in table" :key="name" class="cell">
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
