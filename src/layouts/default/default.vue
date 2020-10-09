<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts">
</script>
<template>
  <div class="[ default ][ ]">
    <!-- Header -->

    <div class="[ ]">
      <navbar> </navbar>
    </div>

    <!-- Body -->
    <div class="[ ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ ]">
   <site-footer> </site-footer>
    </div>
  </div>
</template>