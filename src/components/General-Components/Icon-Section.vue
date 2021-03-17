<template>
  <div class="IconSection">
    <svg
      v-if="type === 'Arrow'"
      width="7"
      height="17"
      viewBox="0 0 7 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Chevron"
        d="M1 1L5.043 8.41667L1 15.8333"
        stroke="#363636"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Icon-Section",
  props: {
    type: {
      default: "",
      type: String
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
