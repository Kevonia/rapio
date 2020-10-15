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
            class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 p-8 ]"
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
              class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 transition duration-1000 ease-in-out transform hover:scale-105 hover:-translate-y-3 ]"
              v-for="index in 6"
              :key="index"
            >
              <div
                class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"
              >
                <div>
                  <img
                    class="w-full"
                    src="https://source.unsplash.com/random/400x225"
                    alt="Sunset in the mountains"
                  />
                  <div
                    class="overlay absolute inset-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-red hover:bg-opacity-75 items-center transition duration-1000 ease-in-out"
                  >
                    <div class="text">
                      Welcome to the premier destination for entertainment in
                      Kingston
                    </div>
                  </div>
                </div>

                <div class="grid -mt-10">
                  <img
                    class="mx-auto w-20"
                    src="https://content.7krave.com/restaurants/141/141_logo.png"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div class="p-6 flex flex-col justify-between">
                  <h3
                    class="font-medium text-gray-900 mb-4 leading-normal text-center"
                  >
                    24 Seven Cafe - The Jamaica Pegasus
                  </h3>

                  <div
                    class="grid col-span-1 border-t border-red w-10/12 mx-auto grid-cols-1"
                  >
                    <div class="pl-2 py-4 grid gcol-span-1">
                      <h3
                        class="font-medium text-gray-900 mb-4 leading-normal text-center"
                      >
                        100 Hope Road, Kingston 6
                      </h3>
                    </div>
                  </div>

                  <div
                    class="grid col-span-1 w-10/12 mx-auto grid-cols-1"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>