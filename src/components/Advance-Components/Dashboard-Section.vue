<template>
  <div class="DashboardSection">
    <HeaderSection />
    <SearchSection v-model="searchData" />
    <CardListSection
      :search="searchData.length >= 3 ? true : false"
      :searchData="searchData"
    />
    <ButtonSection icon="Arrow" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "@/components/Advance-Components/Header-Section.vue";
import CardListSection from "@/components/Advance-Components/CardList-Section.vue";
import SearchSection from "@/components/General-Components/Search-Section.vue";
import ButtonSection from "@/components/General-Components/Button-Section.vue";

export default defineComponent({
  name: "Dashboard-Section",
  data() {
    return {
      searchData: ""
    };
  },
  components: {
    HeaderSection,
    SearchSection,
    CardListSection,
    ButtonSection
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DashboardSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.SearchSection {
  width: 92%;
}

.CardListSection {
  margin-top: 36px;
}

.ButtonSection {
  margin: 40px 0 40px 0;
}
</style>
