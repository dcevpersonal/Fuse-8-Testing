<template>
  <div class="CardSection">
    <div
      :class="
        `CardSection__Image ${
          price > 420000
            ? 'CardSection__Image--High'
            : price > 360000
            ? 'CardSection__Image--Medium'
            : 'CardSection__Image--Low'
        }`
      "
    >
      <div
        class="CardSection__Image__Label"
        v-if="type === 'IndependentLiving'"
      >
        Independent living
      </div>
      <div
        class="CardSection__Image__Label CardSection__Image__Label--Orange"
        v-else
      >
        Restaurant & Support available
      </div>
    </div>
    <div class="CardSection__Description">
      <h2 class="CardSection__Description__Text">{{ title }}</h2>
      <h2 class="CardSection__Description__Text">
        {{ address }}
      </h2>
      <h2 class="CardSection__Description__Text">
        New Properties for Sale from <span>£{{ price }}</span>
      </h2>
      <h2 class="CardSection__Description__Text">Shared Ownership Available</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card-Section",
  components: {},
  props: {
    id: {
      default: "",
      type: String
    },
    title: {
      default: "",
      type: String
    },
    address: {
      default: "",
      type: String
    },
    type: {
      default: "",
      type: String
    },
    price: {
      default: 0,
      type: Number
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.CardSection {
  width: 90%;
  height: fit-content;
  max-width: 379px;
  cursor: pointer;
  background: var(--grey-1);
  margin: 37px 0 0 22px;
  transition: all 0.2s ease-out;
  &:active {
    transform: scale(0.95);
  }
  &__Image {
    display: flex;
    height: 227px;
    align-items: flex-end;
    justify-content: flex-end;
    &--High {
      background: url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
        no-repeat center;
      background-size: cover;
    }

    &--Medium {
      background: url("https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1346&q=80")
        no-repeat center;
      background-size: cover;
    }

    &--Low {
      background: url("https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1206&q=80")
        no-repeat center;
      background-size: cover;
    }
    &__Label {
      display: flex;
      width: fit-content;
      height: 30px;
      color: white;
      background: var(--blue-1);
      font-size: 0.75rem;
      font-weight: bold;
      padding: 11px;
      align-items: center;
      justify-content: center;
      &--Orange {
        background: var(--orange-1);
      }
    }
  }
  &__Description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    &__Text {
      font-size: 1rem;
      font-weight: 400;
      &:nth-child(1) {
        font-weight: bold;
        font-size: 1.25rem;
      }
      &:nth-child(2) {
        margin-top: 2px;
      }
      &:nth-child(3) {
        margin-top: 15px;
        span {
          font-weight: bold;
        }
      }
      &:nth-child(4) {
        margin-top: 7px;
        font-size: 0.875rem;
      }
    }
  }
}
</style>
