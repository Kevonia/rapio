<style scoped lang="scss" src="./mininalcard.scss"></style>
<script lang="ts" src="./mininalcard.ts"></script>
<template>
  <div class="mininalcard grid">
    <div
      class="[ p-10 ][ bg-white ][ self-center ][ grid grid-col-1 gap-6 ]"
    >
      <slot> </slot>
    </div>
  </div>
</template>