<style scoped lang="scss" src="./authform-template.scss"></style>
<script lang="ts" src="./authform-template.ts"></script>
<template>
  <div class="[ authform-template grid ]">
    <div class="[ grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ]">
      <div
        class="lg:col-span-2 md:col-span-1 md:block sm:hidden bg-fixed"
        style="
          background-image: url(../assets/img/background-home.jpg);
          background-position: center;
        "
      >
        <div class="[ h-full ][ grid ] [ food-cover ]">
          <div>
            <div class=" flex absolute bottom-0 left-0 ">
              <div class="h-20 w-20  animate__animated animate__flip ">
                <b-image :src="logo" alt="logo"></b-image>
              </div>
              <div class="pl-4 pt-3">
                <h3 class=" text-white "> {{ name }}!</h3>
                <span class=" text-white "> Delivery first, satisfaction all time </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="[ grid col-span-1 md:border-t-6 sm:border-l-6  md:border-l-0 border-red  ]">
        <div class="[ grid ] [ ]">
          <mininalcard>
            <slot> </slot>
          </mininalcard>
        </div>
      </div>
    </div>
  </div>
</template>