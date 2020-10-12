<style scoped lang="scss" src="./login.scss"></style>
<script lang="ts" src="./login.ts"></script>
<template>
  <div class="[ login ][ grid h-screen ] ">
    <authform-template>
      <form class="[ grid  gap-4  animate__animated animate__fadeInUp  ]" v-on:submit.prevent="login">
  
          <div class="[ text-center ]">
            <h2 class="[ text-4xl font-medium ]">Welcome!</h2>
            <p class="[ text-xl ]">We're glad you're here!</p>
          </div>
          <div>
            <b-field label="Email" label-position="on-border">
              <b-input
                placeholder="Email"
                type="email"
                icon="envelope"
                v-model="username"
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
          <div class="[ text-center ]">
            <p class="text-red" v-if="error">Invail username or Password</p>
          </div>

          <div class="[ text-center ]">
            <router-link to="/auth/forget" class="text-red"
              >Forgot Your Password?</router-link
            >
          </div>

          <div>
            <b-button type=" is-primary " class="w-full" native-type="submit"
              >Login</b-button
            >
          </div>

          <div class="[ text-center ]">
            <p>
              Not Registered
              <router-link to="/auth/register" class="text-red"
                >Join {{ name }}</router-link
              >
            </p>
          </div>
      
      </form>
    </authform-template>
  </div>
</template>