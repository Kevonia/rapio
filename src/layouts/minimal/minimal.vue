<style scoped lang="scss" src="./minimal.scss"></style>
<script lang="ts" src="./minimal.ts">
</script>
<template>
  <div class="[ default grid ][ ]">
    <!-- Header -->
    <div class="[ ]"></div>

    <!-- Body -->
    <div class="[ grid ]">
      <transition>
        <router-view />
      </transition>
    </div>

    <!-- Footer -->
    <div class="[ grid ]"></div>
  </div>
</template>