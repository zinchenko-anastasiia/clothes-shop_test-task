<template>
  <div class="filter-wrapper">
    <ul class="filter-list">
      <li class="list-item" v-for="brand in brandName" :key="brand">
        <a class="list-link" v-on:click="addFilter('Nike', products)">
          {{ brand }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useProductStore } from "../store/index";

const store = useProductStore();

const brandName = computed(() => {
  return store.brandName;
});

const products = computed(() => {
  return store.products;
});

onMounted(() => {
  store.fetchProducts();
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      activeFilter: [],
      data: [],
    };
  },
  methods: {
    addFilter: function (filterBy: string, data: any) {
      return [...data].filter((d) => d.brandName === filterBy);
    },
  },
};
</script>

<style>
.filter-wrapper {
  margin: 0 60px 0 60px;
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
