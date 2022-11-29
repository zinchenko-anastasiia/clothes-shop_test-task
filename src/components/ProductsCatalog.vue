<script lang="ts">
import ProductItem from "../components/ProductItem.vue";
import { mapState } from "pinia";
import { useProductStore } from "../store/index";
import { vAutoAnimate } from "@formkit/auto-animate";
export default {
  data() {
    return {
      activeFilter: "",
      filtered: [],
    };
  },
  props: {
    perPage: Number,
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
        if (filterBy.toLocaleLowerCase() === "all") {
          return d;
        }
        return d.category.name === filterBy;
      });
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
  <div class="filter-wrapper">
    <ul class="filter-list" v-auto-animate>
      <li class="list-item" v-for="brand in category" :key="brand">
        <a class="list-link" v-on:click="addFilter(brand, products)">
          {{ brand }}
        </a>
      </li>
    </ul>
  </div>
  <div class="catalog" v-auto-animate>
    <ProductItem
      v-for="product in isFiltered"
      :key="product.id"
      :product_data="product"
    />
  </div>
</template>

<style>
.catalog {
  display: grid;
  grid-template-columns: repeat(v-bind(perPage), 1fr);
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
