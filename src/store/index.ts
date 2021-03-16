import { createStore } from "vuex";
import axios from "axios";

interface HouseData {
  id: string;
  title: string;
  address: string;
  type: string;
  price: number;
}

export type State = {
  housedata: HouseData;
  houseDataArray: Array<HouseData>;
};

const state: State = {
  housedata: {
    id: "",
    title: "",
    address: "",
    type: "",
    price: 0
  },
  houseDataArray: [{ id: "", title: "", address: "", type: "", price: 0 }]
};

const store = createStore({
  state,
  mutations: {
    getHouseData(state) {
      axios
        .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
        .then(res => {
          state.houseDataArray = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  actions: {
    getHouseData(context) {
      context.commit("getHouseData");
    }
  }
});

export default store;
