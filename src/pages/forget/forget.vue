<style scoped lang="scss" src="./forget.scss"></style>
<script lang="ts" src="./forget.ts"></script>
<template>
  <div class="forget [ grid h-screen ]">
    <authform-template>
      <form
        class="[ grid gap-4 ] [ animate__animated animate__fadeInUp ]"
        v-on:submit.prevent="login"
      >
        <div class="[ text-center ]">
          <p class="[ text-xl ]">Forget Password Reset</p>
        </div>

        <div>
          <b-field label="Email" label-position="on-border">
            <b-input placeholder="Email" type="email" icon="envelope"></b-input>
          </b-field>
        </div>

        <div>
          <b-button type=" is-primary " class="w-full" native-type="submit"
            >Reset</b-button
          >
        </div>

        <div class="[ text-center ]">
          <router-link to="/auth/login" class="text-red"
            >Back to login</router-link
          >
        </div>
      </form>
    </authform-template>
  </div>
</template>