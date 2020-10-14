<style scoped lang="scss" src="./restaurant.scss"></style>
<script lang="ts" src="./restaurant.ts"></script>
<template>
  <div class="[ restaurant min-h-3/4-screen ] bg-pagebg pb-20">
    <section class="hero is-black is-bold pb-10">
      <div class="hero-body">
        <h2 class="text-center text-3xl font-bold tex text-white">
          Restaurant Listing
        </h2>
        <h2 class="text-center text-lg font-bold tex text-white">
          Best deals at your favourite restaurants
        </h2>
      </div>
    </section>

    <section class="grid pt-10 px-10">
      <div class="[ grid grid-cols-5 gap-4 ]">
        <div class="col-span-1">
          <div
            class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 ]"
          >
            <span class="text-center text-lg"> Filter </span>
            <span> Sort by </span>

            <div class="grid">
              <span> Popularity - high to low </span>
              <span> Rating - high to low</span>
              <span> Cost - high to low</span>
              <span> Cost - low to high</span>
            </div>
          </div>
        </div>
        <div class="col-span-4">
          <!-- Card -->
          <div class="grid grid-cols-3 gap-4">
            <div
              class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 ]"
              v-for="index in 6"
              :key="index"
            >
              <div class="grid gap-2">
                <div class="p-4">
                  <div class="w-full rounded overflow-hidden">
                    <b-image
                      src="https://www.foxcoders.com/demo/mezban/assets/images/popular-food/03.jpg"
                      alt="Trending"
                      ratio="6by4"
                      class="transition duration-500 ease-in-out transform hover:scale-110"
                    ></b-image>
                  </div>
                </div>
                <div class="grid -mt-16">
                  <b-image
                    src="https://content.7krave.com/restaurants/141/141_logo.png"
                    alt="Trending"
                    :rounded="true"
                    class="mx-auto w-1/5"
                  ></b-image>
                </div>
              </div>
              <div class="font-semibold text-xl text-center">
                100 One Hundred
              </div>

              <span class="text-base text-center">CUISINES:Jamaican </span>

              <span class="text-base text-center"
                >DESCRIPTION : Welcome to the premier destination for
                entertainment in Kingston</span
              >
              <div
                class="grid col-span-1 border-t border-red w-10/12 mx-auto grid-cols-3"
              >
                <div class="pl-2 py-4 grid grid-cols-5 col-span-1">
                  <span v-for="index in 5" :key="index">
                    <b-icon
                      icon="star"
                      size="is-small"
                      type="is-primary"
                      v-if="ratings - index > 0"
                    >
                    </b-icon>

                    <b-icon
                      icon="star-half"
                      size="is-small"
                      type="is-primary"
                      v-if="ratings - index == -0.5"
                    >
                    </b-icon>
                  </span>
                </div>
                <div
                  class="border-l border-red mx-auto grid-cols-2 pl-2 py-4 col-span-2"
                >
                  <b-icon icon="home" size="is-small" type="is-primary">
                  </b-icon>
                  <span class="font-bold"> 100 Hope Road, Kingston 6 </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>