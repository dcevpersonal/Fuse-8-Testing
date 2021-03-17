<template>
  <div class="SearchSection">
    <h2 class="SearchSection__Text">Filter</h2>
    <input
      type="text"
      class="SearchSection__Input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search-Section",
  props: {
    modelValue: {}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.SearchSection {
  display: flex;
  justify-content: center;
  align-items: center;
  &__Text {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.3px;
  }
  &__Input {
    width: 70%;
    height: 50px;
    max-width: 418px;
    border: 1px solid var(--grey-2);
    border-radius: 25px;
    outline: none;
    font-size: 1.25rem;
    transition: border-color 0.1s ease-out;
    padding: 16px;
    margin-left: 14px;
    margin-top: 3px;
    &:focus {
      border-color: var(--green-1);
    }
  }
}

@media only screen and (min-width: 1200px) {
  .SearchSection {
    justify-content: flex-start;
  }
}
</style>
