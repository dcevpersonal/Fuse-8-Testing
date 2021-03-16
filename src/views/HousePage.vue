<template>
  <div class="HousePage">
    <h1 class="HousePage__Text">No Data Available</h1>
    <ButtonSection text="Back" @click="backRedirect()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonSection from "@/components/General-Components/Button-Section.vue";
import router from "@/router";

export default defineComponent({
  name: "HousePage",
  components: {
    ButtonSection
  },
  methods: {
    backRedirect() {
      router.push({ path: "/" });
    }
  }
});
</script>
<style scoped lang="scss">
.HousePage {
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__Text {
    padding: 45px 0 45px 0;
  }
}
</style>
