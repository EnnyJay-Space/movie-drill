<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
      <!-- <h1>{{header}}</h1>
      <p>{{text}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    closeModalTwo() {
      this.$emit("close");
    },
  },
}
</script>

<style>

</style>