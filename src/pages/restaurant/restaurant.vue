<style scoped lang="scss" src="./restaurant.scss"></style>
<script lang="ts" src="./restaurant.ts"></script>
<template>
  <div class="[ restaurant min-h-3/4-screen ] bg-pagebg pb-20">
    <section
      class="hero is-black is-bold pb-10"
      style="
        background-image: url(https://www.7krave.com/img/restaurant-listing-v2.png);
        background-size: cover;
      "
    >
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
        <div class="col-span-1 sm:hidden lg:block grid gap-4 grid-cols-1">
          <div
            class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 p-8 ]"
          >
            <span class="text-center font-bold text-xl"> Sort by </span>

            <div class="grid">
              <span>
                <router-link to="?sort=popularity&order=desc">
                  <span class="font-bold"> Popularity </span>
                </router-link>
                - high to low
              </span>
              <span>
                <router-link to="?sort=rating&order=desc">
                  <span class="font-bold"> Rating </span>
                </router-link>
                - high to low</span
              >

              <span>
                <router-link to="?sort=cost&order=desc">
                  <span class="font-bold"> Cost </span>
                </router-link>
                - high to low</span
              >
              <span>
                <router-link to="?sort=cost&order=asc">
                  <span class="font-bold"> Cost </span>
                </router-link>
                - low to high</span
              >
            </div>
          </div>

          <div
            class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 p-8 mt-10 ]"
          >
            <span class="text-center font-bold text-xl"> Cuisine </span>

            <div class="grid gap-4">
              <span
                v-for="cuisine in cuisines"
                :key="cuisine.id"
                v-if="!isloading"
              >
                <router-link :to="`?filter=${cuisine.id}`">
                  <span class="font-bold"> {{ cuisine.name }} </span>
                </router-link>

                <b-skeleton
                  v-for="key in 6"
                  :key="key"
                  v-if="isloading"
                ></b-skeleton>
              </span>
            </div>
          </div>
        </div>

        <div class="sm:col-span-5 lg:col-span-4" v-if="isloading">
          <!-- Card -->
          <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
            <div
              class="[ bg-white ] [ self-center rounded shadow-xl ]"
              v-for="items in 12"
              :key="items"
            >
              <div class="overflow-hidden">
                <div>
                  <b-skeleton height="300px" active></b-skeleton>
                  <div>
                    <div class="text">
                      <b-skeleton active></b-skeleton>
                    </div>
                  </div>
                </div>

                <div class="grid -mt-10">
                  <b-skeleton active></b-skeleton>
                </div>
                <div class="p-6 flex flex-col justify-between">
                  <h3
                    class="font-medium text-gray-900 mb-4 leading-normal text-center"
                  >
                    <b-skeleton active></b-skeleton>
                  </h3>

                  <div
                    class="grid col-span-1 border-t border-red w-10/12 mx-auto grid-cols-1"
                  >
                    <div class="pl-2 py-4 grid gcol-span-1">
                      <h3
                        class="font-medium text-gray-900 mb-4 leading-normal text-center"
                      >
                        <b-skeleton active></b-skeleton>
                      </h3>
                    </div>
                  </div>

                  <div class="grid col-span-1 w-10/12 mx-auto grid-cols-1">
                    <div class="pl-2 py-4 grid grid-cols-5 col-span-1">
                      <b-skeleton active></b-skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="sm:col-span-5 lg:col-span-4 [ animate__animated animate__fadeIn ]"
          v-if="!isloading"
        >
          <div
            class="col-span-1 sm:grid lg:hidden grid gap-4 grid-cols-2 pb-10"
          >
            <div
              class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 p-8 ]"
            >
              <span class="text-center font-bold text-xl"> Sort by </span>

              <div class="grid">
                <b-field>
                  <b-select expanded placeholder="Sort Options">
                    <option value="?sort=popularity&order=desc">
                      Popularity - high to low
                    </option>
                    <option value="?sort=rating&order=des">
                      Rating - high to low
                    </option>
                    <option value="?sort=cost&order=desc">
                      Cost - high to low
                    </option>
                    <option value="?sort=cost&order=asc">
                      Cost - low to high
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>

            <div
              class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 p-8 ]"
            >
              <span class="text-center font-bold text-xl"> Cuisine </span>

              <div class="grid">
                <b-field>
                  <b-select expanded placeholder="Select a Cuisine">
                    <option v-for="cuisine in cuisines" :key="cuisine.id">
                      {{ cuisine.name }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </div>
          <!-- Card -->
          <div class="grid sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
            <div
              class="[ bg-white ] [ self-center rounded shadow-xl ][ ][ grid grid-col-1 gap-6 transition duration-1000 ease-in-out transform hover:scale-105 hover:-translate-y-3 ]"
              @click="navigate(`/restaurant/view-restaurant/${items.id}`)"
              v-for="items in restaurant.data"
              :key="items.id"
            >
              <div
                class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"
              >
                <div>
                  <img
                    class="w-full"
                    :src="items.displayImg"
                    alt="Sunset in the mountains"
                  />
                  <div
                    class="overlay absolute inset-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-red hover:bg-opacity-75 items-center transition duration-1000 ease-in-out"
                  >
                    <div class="text">
                      {{ items.description }}
                    </div>
                  </div>
                </div>

                <div class="grid -mt-10">
                  <img
                    class="mx-auto w-20"
                    :src="items.logo"
                    alt="Sunset in the mountains"
                  />
                </div>
                <div class="p-6 flex flex-col justify-between h-64">
                  <h3 class="font-medium text-gray-900 mb-2 text-center">
                    {{ items.name }}
                  </h3>

                  <div
                    class="grid col-span-1 border-t border-b border-red w-10/12 mx-auto grid-cols-1"
                  >
                    <div class="pl-2 py-4 grid gcol-span-1">
                      <h3
                        class="font-medium text-xs text-gray-900 leading-normal text-center"
                      >
                        {{ items.address }}
                      </h3>
                    </div>

                    <div class="flex text-center">
                      <span
                        class="font-medium text-xs text-gray-900 mb-4 mx-auto"
                        v-for="cuisine in items.cuisine"
                        :key="cuisine.id"
                      >
                        <span class="text-center">
                          {{ cuisine.name }}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div class="grid col-span-1 w-10/12 mx-auto grid-cols-1">
                    <div class="pl-2 py-4 grid grid-cols-5 col-span-1">
                      <span v-for="index in 5" :key="index">
                        <b-icon
                          icon="star"
                          size="is-small"
                          type="is-primary"
                          v-if="items.rating - index > 0"
                        >
                        </b-icon>

                        <b-icon
                          icon="star-half"
                          size="is-small"
                          type="is-primary"
                          v-if="items.rating - index == -0.5"
                        >
                        </b-icon>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b-pagination
            class="w-full"
            :total="restaurant.total"
            :per-page="restaurant.per_page"
            :current="restaurant.current_page"
            order="is-centered"
            tag="button"
          >
            <b-pagination-button
              slot-scope="props"
              :page="props.page"
              :id="`page${props.page.number}`"
              tag="router-link"
              :to="`?page=${props.page.number}`"
            >
              {{ props.page.number }}
            </b-pagination-button>

            <b-pagination-button
              slot="previous"
              slot-scope="props"
              :page="props.page"
              tag="router-link"
              :to="`?page=${props.page.number}`"
            >
              <b-icon icon="chevron-left" size="is-small"> </b-icon>
            </b-pagination-button>

            <b-pagination-button
              slot="next"
              slot-scope="props"
              :page="props.page"
              tag="router-link"
              :to="`/?page=${props.page.number}`"
            >
              <b-icon icon="chevron-right" size="is-small"> </b-icon>
            </b-pagination-button>
          </b-pagination>
        </div>
      </div>
    </section>
  </div>
</template>