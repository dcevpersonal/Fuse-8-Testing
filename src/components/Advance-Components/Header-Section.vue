<template>
  <header class="HeaderSection">
    <h1 class="HeaderSection__Text">Our Latest Developments</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header-Section"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.HeaderSection {
  display: flex;
  align-items: center;
  justify-content: center;
  &__Text {
    font-size: 2.25rem;
    color: var(--green-1);
    padding: 38px;
    font-weight: bold;
    text-align: center;
  }
}

@media only screen and (min-width: 1200px) {
  .HeaderSection {
    padding: 0 20px 0 0;
  }
}
</style>
