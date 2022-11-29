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
        const data = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = data.data;
        console.log(data.data);

        const unique = data.data
          .map((value) => value.category.name)
          .filter((v, i, a) => a.indexOf(v) === i);

        this.category = [...unique, "All"].sort();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
