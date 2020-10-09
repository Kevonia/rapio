<style scoped lang="scss" src="./hero-banner.scss"></style>
<script lang="ts" src="./hero-banner.ts"></script>
<template>
  <div
    class="hero-banner [ h-3/4-screen ][ grid ] bg-fixed"
    style="background-image: url(../background-home.jpg)"
  >
    <div class="[ h-full ][ grid ] [ hero-content ]">
      <div class="[ grid self-center text-center gap-4 ]">
        <h1 class="[ text-4xl text-white font-semibold ]">
          Tickle Your Tastebuds
        </h1>
        <span class="[ text-white text-center ]">
          Find amazing selection of local restaurant delivering food to your
          door
        </span>
        <div class="flex">
          <div class="flex w-3/4 mx-auto">
            <b-field class="w-full">
              <b-input
                type="email"
                placeholder="Search Website e.g. Jerk Chicken, Redbones"
                custom-class="w-full"
              >
              </b-input>
            </b-field>
            <b-button type="is-primary" icon-left="search"> Search </b-button>
          </div>
        </div>

        <hr class="border-gray-500 w-1/2 mx-auto" />

        <div class="grid justify-around">
          <b-button type="is-primary" icon-left="globe">
            Browse All Restaurants
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>