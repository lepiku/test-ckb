<script setup>
import { RouterView } from 'vue-router'
import { BNavbarBrand, BNavbar, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue';
</script>

<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Test Web Apps</b-nav-item>
        <b-nav-item to="/two">Test Web Apps II</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <router-view />
</template>

<style scoped></style>
