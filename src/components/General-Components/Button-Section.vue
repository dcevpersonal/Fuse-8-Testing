<template>
  <button class="ButtonSection">
    <h2 class="ButtonSection__Text">{{ text }}</h2>
    <div class="ButtonSection__Arrow" v-if="icon === 'Arrow'"></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button-Section",
  props: {
    text: {
      default: "See more",
      type: String
    },
    icon: {
      default: "",
      type: String
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ButtonSection {
  width: 150px;
  height: 50px;
  display: flex;
  cursor: pointer;
  border: 1px solid var(--grey-2);
  border-radius: 25px;
  background: white;
  outline: none;
  transition: all 0.1s ease-out;
  transition-property: background, transform;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--grey-1);
  }
  &:active {
    transform: scale(0.9);
  }
  &__Text {
    font-size: 1rem;
    font-weight: bold;
  }
  &__Arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    margin-left: 5px;
  }
}
</style>
