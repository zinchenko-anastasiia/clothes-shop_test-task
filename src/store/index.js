import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "https://fakestoreapi.com/";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [],
    category: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const data = await axios.get("https://fakestoreapi.com/products");
        this.products = data.data;

        const unique = data.data
          .map((value) => value.category)
          .filter((v, i, a) => a.indexOf(v) === i);

        this.category = [...unique, "all"].sort();
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
