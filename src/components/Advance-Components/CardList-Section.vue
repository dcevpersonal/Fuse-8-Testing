<template>
  <div class="CardListSection">
    <CardSection
      v-for="house in houses"
      :key="house.id"
      :title="house.title"
      :address="house.address"
      :type="house.type"
      :price="house.price"
      @click="housePageRedirect(house.id)"
    />
    <h2 v-if="houses.length === 0">No Results</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardSection from "@/components/Advance-Components/Card-Section.vue";
import store from "@/store";
import router from "@/router";
export default defineComponent({
  name: "CardList-Section",
  components: {
    CardSection
  },
  data() {
    return {
      houses: store.state.houseDataArray
    };
  },
  props: {
    search: {
      default: false,
      type: Boolean
    },
    searchData: {
      default: "",
      type: String
    }
  },
  methods: {
    housePageRedirect(id: string) {
      router.push({ path: "/details/" + id });
    }
  },
  mounted() {
    store.commit("getHouseData");
  },
  watch: {
    houseDataArray() {
      if (this.search === false) {
        this.houses = store.state.houseDataArray;
      }
    },
    searchData() {
      if (this.search === false) {
        this.houses = store.state.houseDataArray;
      } else {
        this.houses = store.state.houseDataArray.filter(element =>
          element.title.includes(this.searchData)
        );
        console.log(this.houses);
      }
    }
  },

  computed: {
    houseDataArray() {
      return store.state.houseDataArray;
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CardListSection {
  display: inline-flex;
  width: calc(95% + 22px);
  flex-wrap: wrap;
  margin: -22px 0 0 -22px;
  justify-content: center;
  align-items: center;
}
</style>
