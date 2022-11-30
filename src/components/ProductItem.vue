<template>
  <div class="wrapper">
    <img :src="product_data?.images[0]" alt="product" class="image" />
    <div class="headline">
      <div class="info">
        <p class="title">{{ sliced }}</p>
        <p>{{ product_data?.price }} $</p>
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
  font-family: sans-serif;
  align-items: center;
  transition: 0.5s;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-height: 770px;
  overflow: hidden;
}

.wrapper:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}

.image {
  max-height: 680px;
  padding-top: 20px;
  width: 100%;
  object-fit: cover;
  object-position: center;
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

.title {
  font-size: 18px;
}
</style>
