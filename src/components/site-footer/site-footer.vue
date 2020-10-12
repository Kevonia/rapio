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
    

      <div class="grid grid-cols-1 border-solid border-gray-300 ">
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
        <span  class="text-white pt-8 px-4">
          Copyright © {{ new Date().getFullYear() }} Rapio Eats Delivery System
        </span>
      </div>
    </footer>
  </div>
</template>