<style scoped lang="scss" src="./site-footer.scss"></style>
<script lang="ts" src="./site-footer.ts"></script>

<style scoped>
.menu-label {
  color: white;
  font-size: 1.1rem;
}
</style>
<template>
  <div class="site-footer">
    <footer class="footer">
      <div
        class="grid md:grid-cols-3 sm:grid-cols-1 border-solid border-gray-300"
      >
        <div
          class="col-span-1 border-solid border-gray-300 md:border-r sm:border-b text-white"
        >
          <b-menu-list label="QUICK LINKS">
            <b-menu-item label="FAQ"></b-menu-item>
            <b-menu-item label="CONTACT US"></b-menu-item>
            <b-menu-item label="BECOME A RIDER"></b-menu-item>
          </b-menu-list>
        </div>
        <div
          class="col-span-1 border-gray-300 md:border-r sm:border-b sm:pt-4 grid grid-cols-1"
        >
          <span class="text-white text-center" style="font-size: 1.1rem">
            NEED HELP?
          </span>
          <span class="text-white text-center" style="font-size: 1.1rem">
            CONTACT US OR CALL
          </span>
          <div class="grid gap-2 grid-cols-1 p-6">
            <span class="text-white">
              <b-icon icon="phone" size="is-small" type="is-primary"> </b-icon>
              876 333-5478
            </span>
            <span class="text-white">
              <b-icon icon="phone" size="is-small" type="is-primary"> </b-icon>
              876 341-2910
            </span>
            <span class="text-white">
              <b-icon icon="phone" size="is-small" type="is-primary"> </b-icon
              >876 341-2901
            </span>
            <span class="text-white">
              <b-icon icon="nvelope" size="is-small" type="is-primary">
              </b-icon>
              info@info.com</span
            >
          </div>
        </div>
        <div class="col-span-1 grid grid-cols-1 md:border-l sm:border-b">
          <span
            class="text-white text-center sm:pt-4"
            style="font-size: 1.1rem"
          >
            Company Information
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 border-solid border-gray-300 mt-8">
        <div class="flex pt-4">
          <span class="text-white px-4 border-gray-300 border-r">
            <router-link class="hover:text-red" to="/">
              Privacy Policy
            </router-link>
          </span>
          <span class="text-white px-4 border-gray-300 border-r">
            <router-link class="hover:text-red" to="/">
              Terms and Conditions
            </router-link>
          </span>
          <span class="text-white px-4">
            <router-link class="hover:text-red" to="/">
              Delivery Policy
            </router-link>
          </span>
        </div>
        <span class="text-white pt-8">
          Copyright © {{ new Date().getFullYear() }} Rapio Eat Delivery System
        </span>
      </div>
    </footer>
  </div>
</template>