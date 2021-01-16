<style scoped lang="scss" src="./signup.scss"></style>
<script lang="ts" src="./signup.ts"></script>
<template>
  <div class="signup [ grid h-screen ]">
    <authform-template>
      <form
        class="[ grid gap-4 ] [ animate__animated animate__fadeInUp ]"
        v-on:submit.prevent="signup"
      >
        <div class="[ text-center ]">
          <h2 class="[ text-4xl font-medium ]">Sign up, it's easy and free!</h2>
          <p class="[ text-xl ]">
            Thank you for choosing {{ name }}, we're glad you're here!
          </p>
        </div>

        <div>
          <b-field label="Full Name" label-position="on-border">
            <b-input
              placeholder="Full Name"
              type="text"
              icon="user"
              v-model="fullName"
            ></b-input>
          </b-field>
        </div>

        <div>
          <b-field label="Email" label-position="on-border">
            <b-input
              placeholder="Email"
              type="email"
              icon="envelope"
              v-model="email"
            ></b-input>
          </b-field>
        </div>

        <div>
          <b-field label="Password" label-position="on-border">
            <b-input
              placeholder="Password"
              type="password"
              icon="lock"
              v-model="password"
              password-reveal
            ></b-input>
          </b-field>
        </div>

        <div>
          <b-field label="Confrim Password" label-position="on-border">
            <b-input
              placeholder="confrimPassword"
              type="password"
              icon="lock"
              v-model="confrimPassword"
              password-reveal
            ></b-input>
          </b-field>
        </div>

        <div>
          <b-button
            type=" is-primary "
            class="w-full"
            native-type="submit"
            :loading="isLoading"
            >Register</b-button
          >
        </div>

        <div class="[ text-center ]">
          <p>
            Already a memebr

            <router-link to="/auth/login" class="text-red">Login</router-link>
          </p>
        </div>

        <div class="[ text-center ]">
          <p>
            <router-link to="/" class="text-red"> Back to Home </router-link>
          </p>
        </div>
        <vue-recaptcha
          ref="invisibleRecaptcha"
          size="invisible"
          @verify="onCaptchaVerified"
          @expired="onCaptchaExpired"
          :sitekey="siteKey"
        ></vue-recaptcha>
      </form>
    </authform-template>
  </div>
</template>