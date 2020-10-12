<style scoped lang="scss" src="./default.scss"></style>
<script lang="ts" src="./default.ts">
</script>
<template>
  <div class="[ default grid ][ ]">
    <!-- Header -->

    <div class="[  ]">
      <navbar> </navbar>
    </div>

    <!-- Body -->
    <div class="[ grid ]">
      <transition name="fade">
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ grid ]">
   <site-footer> </site-footer>
    </div>
  </div>
</template>