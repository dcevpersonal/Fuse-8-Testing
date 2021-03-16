<template>
  <div>
    <DashboardSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DashboardSection from "@/components/Advance-Components/Dashboard-Section.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    DashboardSection
  }
});
</script>
<style scoped lang="scss"></style>
