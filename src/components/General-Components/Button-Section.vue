<template>
  <button class="ButtonSection">
    <h2 class="ButtonSection__Text">{{ text }}</h2>
    <IconSection
      class="ButtonSection__Arrow"
      v-if="icon === 'Arrow'"
      type="Arrow"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconSection from "@/components/General-Components/Icon-Section.vue";
export default defineComponent({
  name: "Button-Section",
  components: {
    IconSection
  },
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
    letter-spacing: 0.3px;
    font-weight: bold;
  }
  &__Arrow {
    width: 4.04px;
    height: 14.83px;
    padding-left: 8px;
  }
}
</style>
