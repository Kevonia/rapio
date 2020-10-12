<style scoped lang="scss" src="./home.scss"></style>
<script lang="ts" src="./home.ts"></script>
<template>
  <div class="[ home grid ]">
    <hero-banner> </hero-banner>

    <section>
      <div class="grid -mt-12">
        <div class="col-span-1">
          <div class="grid justify-items-center">
            <ul class="grid grid-cols-6 text-white h-12 w-3/4">
              <li
                class="hover:bg-red w-full text-center md:flex sm:hidden justify-center items-center transition duration-1000 ease-in-out"
                v-for="item in menu"
                v-bind:key="item.id"
              >
                <span class="icon text-lg">
                  <b-icon
                    pack="fas"
                    :icon="item.icon"
                    size="is-medium"
                    type="is-white"
                  >
                  </b-icon
                  >{{ item.name }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div
            class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center"
          >
            <div class="grid gap">
              <img :src="Icon1" class="mx-auto sm:w-full md:w-1/3" />
              <h3 class="text-center font-semibold text-lg">
                Pick a restaurant
              </h3>
            </div>

            <div class="grid gap">
              <img :src="Icon2"  class="mx-auto sm:w-full md:w-1/3"" />
              <h3 class="text-center font-semibold text-lg">
                Order a takeaway
              </h3>
            </div>

            <div class="grid gap-4">
              <img :src="Icon3" class="mx-auto sm:w-full md:w-1/3" />
              <h3 class="text-center font-semibold text-lg">
                Your food is delivered
              </h3>
            </div>

            <div class="grid gap">
              <img :src="Icon4" class="mx-auto sm:w-full md:w-1/3" />
              <h3 class="text-center font-semibold text-lg">Happy, enjoy</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="hero is-bold bg-fixed"
      style="background-image: url(../assets/img/2664646.jpg)"
    >
      <div class="hero-body bg-content">
        <div class="pb-8">
          <h1 class="text-3xl font-bold text-center text-white">Collections</h1>
          <h2 class="text-lg text-center text-white">
            Explore lists of top restaurants and meals
          </h2>
        </div>

        <div class="grid justify-items-center">
          <div
            class="w-full grid "
          >
            <!-- skeletons -->
            <section class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" v-if="isLoading">
              <div
                class="col-span-1 shadow-2xl"
                v-for="index in 4"
                :key="index"
              >
                <div class="card">
                  <div class="card-image">
                    <b-skeleton height="15rem"></b-skeleton>
                    <div class="overlay">
                      <div class="text">
                        <b-skeleton active></b-skeleton>
                      </div>
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="content text-center">
                      <b-skeleton active></b-skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" v-if="!isLoading">
              <div
                class="col-span-1 shadow-2xl"
                v-for="collection in collections"
                v-bind:key="collection.id"
              >
                <div
                  class="card transition duration-1000 ease-in-out transform hover:scale-105 hover:-translate-y-3"
                >
                  <div class="card-image">
                    <b-image
                      :src="collection.displayImg"
                      alt="Trending"
                      ratio="6by4"
                    ></b-image>
                    <div
                      class="overlay absolute inset-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-red hover:bg-opacity-75 items-center transition duration-1000 ease-in-out"
                    >
                      <div class="text">
                        {{ collection.description }}
                      </div>
                    </div>
                  </div>

                  <div class="card-content">
                    <div class="content text-center">{{ collection.name }}</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="pb-4 pt-8">
        <h1 class="text-center text-3xl font-bold">Want More?</h1>
        <h2 class="text-center text-lg">
          Reviews from some of our loyal customers
        </h2>

        <b-carousel
          v-model="currentTestimonials"
          :interval="5000"
          :pause-info="false"
          :pause-hover="false"
          :indicator-inside="true"
          indicator-mode="hover"
          indicator-style="is-lines"
        >
          <b-carousel-item>
            <section class="hero is-medium is-white" v-if="isLoading">
              <div class="p-16 has-text-centered grid grid-cols-1 gap-2">
                <span class="[ grid]">
                  <b-skeleton
                    position="is-centered"
                    width="20%"
                    :animated="true"
                  ></b-skeleton>
                  <b-skeleton width="100%" :animated="true"></b-skeleton>
                </span>
              </div>
            </section>
          </b-carousel-item>

          <b-carousel-item v-for="(testimonial, i) in testimonials" :key="i">
            <section class="hero is-medium is-white" v-if="!isLoading">
              <div class="p-16 has-text-centered grid grid-cols-1 gap-2">
                <span class="[ grid mx-auto ]">
                  <b-icon
                    pack="fas"
                    icon="quote-left"
                    size="is-large"
                    type="is-black"
                  >
                  </b-icon>
                </span>
                <span>
                  <span>{{ testimonial.description }} </span>
                  <br>
                  <span class="font-semibold"> - {{ testimonial.name }}</span>
                </span>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </section>
  </div>
</template>