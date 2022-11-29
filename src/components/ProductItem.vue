<template>
  <div class="wrapper">
    <img :src="product_data?.image" alt="product" class="image" />
    <div class="headline">
      <div class="info">
        <p class="title">{{ sliced }}</p>
        <p>{{ product_data?.price }}$</p>
      </div>
      <img :src="FavoriteIcon" alt="fav" class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import Image from "./photo/photo.png";
import FavoriteIcon from "./icons/heart.svg";
import FavoriteIconHover from "./icons/heart-hover.svg";

export default {
  name: "ProductItem",
  props: {
    product_data: {
      type: Object,
    },
  },
  data() {
    return {
      ProductImage: Image,
      FavoriteIcon,
      FavoriteIconHover,
    };
  },
  computed: {
    sliced() {
      let res = this.product_data?.title.slice(0, 25);
      if (res.length < this.product_data?.title.length) {
        res += "...";
      }

      return res;
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 280px;
  font-family: sans-serif;
  align-items: center;
  transition: 0.5s;
}

.wrapper:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

.image {
  height: 355px !important;
  width: 250px !important;
  padding-top: 20px;
}

.icon {
  height: 18px;
  width: 20px;
  transition: transform 300ms linear, color 300ms linear;
}

.icon:hover {
  transform: scale(1.2);
}

.headline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 17px;
  width: 100%;
  box-sizing: border-box;
}
.info {
  gap: 5px;
  display: flex;
  flex-direction: column;
}
</style>
