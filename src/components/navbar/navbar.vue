<style scoped lang="scss" src="./navbar.scss"></style>
<script lang="ts" src="./navbar.ts"></script>
<template>
  <b-navbar fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="logo" alt="Rapio Eat Delivery System" />
      </b-navbar-item>
    </template>
    <template slot="start"> </template>

    <template slot="end">
      <b-navbar-item tag="router-link" to="/" class="[ flex ]">
        <b-icon icon="home" size="is-small" type="is-primary"> </b-icon>
        <span class="pl-2"> Home</span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/auth/login" class="[ flex ]">
        <b-icon icon="sign-in-alt" size="is-small" type="is-primary"> </b-icon>
        <span class="pl-2"> Login </span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/auth/register"  class="[ flex ]">
        <b-icon icon="user-times" size="is-small" type="is-primary"> </b-icon>
        <span class="pl-2">Sign Up </span>
      </b-navbar-item>
      <b-navbar-item tag="router-link" to="/"  class="[ flex ]">
        <b-icon icon="address-book" size="is-small" type="is-primary"> </b-icon>
        <span class="pl-2"> Contact </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>