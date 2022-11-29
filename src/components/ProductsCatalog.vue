<script lang="ts">
import ProductItem from "../components/ProductItem.vue";
import { mapState } from "pinia";
import { useProductStore } from "../store/index";
import TwoPerPage from "./icons/2-perPage.svg";
import FourPerPage from "./icons/4-perPage.svg";
export default {
  data() {
    return {
      activeFilter: "",
      filtered: [],
      perPage: 4,
      TwoPerPage,
      FourPerPage,
    };
  },
  created() {
    let qp = new URLSearchParams(window.location.search);
    let f = qp.get("activeFilter");
    if (f) {
      this.activeFilter = qp.get("filter");
    }
  },
  computed: {
    isFiltered() {
      this.updateURL();
      if (this.filtered.length) {
        return this.filtered;
      }
      return this.products;
    },
    ...mapState(useProductStore, ["products"]),
  },
  methods: {
    addFilter: function (filterBy: string, data: any) {
      this.activeFilter = filterBy;
      this.filtered = [...data].filter((d) => {
        if (filterBy === "all") {
          return d;
        }
        return d.category === filterBy;
      });
    },
    addPerPage: function (perPage) {
      this.perPage = perPage;
    },
    updateURL() {
      let qp = new URLSearchParams();
      if (this.activeFilter !== "") {
        qp.set("filter", this.activeFilter);
      }
      history.replaceState(null, null, "?" + qp.toString());
    },
  },
};
</script>

<script lang="ts" setup>
import { onMounted, computed } from "vue";

const store = useProductStore();
const category = computed(() => {
  return store.category;
});

onMounted(() => {
  store.fetchProducts();
});
</script>

<template>
  <div>
    <a class="but" v-on:click="addPerPage(2)"><span class="fa"></span></a>
    <a class="butt" v-on:click="addPerPage(4)"><span class="fa"></span></a>
  </div>
  <div class="filter-wrapper">
    <ul class="filter-list">
      <li class="list-item" v-for="brand in category" :key="brand">
        <a class="list-link" v-on:click="addFilter(brand, products)">
          {{ brand }}
        </a>
      </li>
    </ul>
  </div>
  <div class="catalog">
    <ProductItem
      v-for="product in isFiltered"
      :key="product.id"
      :product_data="product"
    />
  </div>
</template>

<style>
.but {
  line-height: 25px;
  cursor: pointer;
}

.butt {
  line-height: 25px;
  cursor: pointer;
}
.but::before {
  content: url("./icons/2-perPage.svg");
}
.butt::before {
  content: url("./icons/4-perPage.svg");
}
.catalog {
  display: grid;
  grid-template-columns: repeat(v-bind(perPage), 270px);
  gap: 20px;
  margin-top: 60px;
}
.filter-wrapper {
  margin: 60px 60px 0 60px;
}
.filter-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.list-item {
  font-family: sans-serif;
  font-size: 18px;
  padding-top: 10px;
  cursor: pointer;
}

.list-item:first-child {
  padding-top: 0;
}

.filter-navigation {
  display: flex;
  margin: 0 60px 0 60px;
}

.list-link {
  text-decoration: none;
}
</style>
