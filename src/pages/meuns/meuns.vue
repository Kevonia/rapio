<style scoped lang="scss" src="./meuns.scss"></style>
<script lang="ts" src="./meuns.ts"></script>
<template>
  <div class="[ meuns min-h-3/4-screen ] bg-pagebg pb-20">
    <section
      class="hero is-black is-bold pb-10"
      style="
        background-image: url(https://www.7krave.com/img/restaurant-listing-v2.png);
        background-size: cover;
      "
    >
      <div class="hero-body flex border-b">
        <img
          class="white-bg img-rounded"
          src="https://content.7krave.com/restaurants/141/141_logo.png"
          width="170"
          alt="resturant"
        />
        <div class="grid">
          <h2 class="text-lg font-bold tex text-white">100 One Hundred</h2>
          <h2 class="text-lg font-bold tex text-white">100 Hope Road1</h2>
          <h2 class="text-lg font-bold tex text-white">
            Welcome to the premier destination for entertainment in Kingston
          </h2>
          <h2 class="text-lg font-bold tex text-white">
            Opening Hours: Mon - Sun 12:00 PM - 06:00 PM
          </h2>
          <div class="flex flex-row pt-2">
            <span> Closed </span>
            <span> · Jamaican </span>
          </div>
        </div>
        <div class="grid bg-red h-10 p-2 rounded justify-end ml-auto">
          <div class="text-xl font-bold tex text-white justify-end ml-auto">
            3.2<span>/5.0</span>
          </div>
        </div>
      </div>
    </section>

    <div class="grid grid-cols-6 pt-10">
      <div class="col-span-1"></div>
      <div class="col-span-5 grid grid-cols-4">
        <div
          class="w-full flex flex-col mb-8 px-3 transition duration-1000 ease-in-out transform hover:scale-105 hover:-translate-y-3"
          v-for="item in 9"
          :key="item"
          v-if="isloading"
        >
          <div
            class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition"
          >
            <b-skeleton active height="200px"></b-skeleton>
            <div class="grid gap-2 p-4 justify-between">
              <h3 class="font-bold mb-4 leading-normal text-xl">
                <b-skeleton width="100%"></b-skeleton>
              </h3>
              <p class="inline-flex items-center">
                <span class="text-base">
                  <b-skeleton width="100%"></b-skeleton>
                </span>
              </p>
              <p class="inline-flex items-center">
                <b-skeleton active></b-skeleton>
              </p>

              <b-skeleton active></b-skeleton>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1"></div>
      <div class="col-span-5 grid grid-cols-4">
        <div
          class="w-full flex flex-col mb-8 px-3"
          v-for="item in menus"
          :key="item.id"
        >
          <div
            class="overflow-hidden bg-white rounded-lg shadow hover:shadow-raised hover:translateY-2px transition transition duration-1000 ease-in-out transform hover:scale-105 hover:-translate-y-3"
          >
            <img
              class="w-full"
              :src="item.display_img"
              alt="Sunset in the mountains"
            />
            <div class="grid gap-2 p-4 justify-between">
              <h3 class="font-bold mb-4 leading-normal text-xl">
                {{ item.name }}
              </h3>
              <p class="inline-flex items-center h-32">
                <span class="text-base">
                  {{ item.description }}
                </span>
              </p>
              <p class="inline-flex items-center">
                <span class="text-red text-xl">
                  {{ item.currency }} ${{ item.prices | number("0,0") }}</span
                >
              </p>

              <b-button
                type="is-primary"
                icon-left="shopping-basket"
                @click="Update()"
              >
                Add to Cart
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template  #default="props">
        <menumodal></menumodal>
      </template>
    </b-modal>
  </div>
</template>