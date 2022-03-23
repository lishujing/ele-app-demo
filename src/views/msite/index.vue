<template>
  <div>
    <van-nav-bar :title="msiteTitle">
      <template #left>
        <van-icon name="search" @click="toSearch()" />
      </template>
      <template #right>
        <span>登录 | 注册</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { cityGuess, msiteAddress } from '@/api/getData'
export default {
  data() {
    return {
      geohash: '779', // city页面传递过来的地址geohash
      msiteTitle: '请选择地址...', // msite页面头部标题
      foodTypes: [], // 食品分类列表
      hasGetData:false, // 是否已经获取地理位置数据,成功之后再获取商铺列表信息
    }
  },
  async beforeMount() {
    if (!this.$route.query.geohash) {
      const address = await cityGuess()
      this.geohash = address.latitude + ',' + address.longitude
    } else {
      this.geohash = this.$route.query.geohash
    }
    // 保存 geohash 到 vuex
    this.SAVE_GEOHASH(this.geohash);
    // 获取当前位置信息
    let res = await msiteAddress(this.geohash)
    this.msiteTitle = res.name
    // 记录当前经纬度
    this.RECORD_ADDRESS(res);
    this.hasGetData = true;
  },
  methods: {
    ...mapMutations(["RECORD_ADDRESS", "SAVE_GEOHASH"]),
    toSearch() {
      this.$router.push({ path: '/search/geohash' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/mixin.scss';
.link_search {
  left: 0.8rem;
  @include wh(0.9rem, 0.9rem);
  @include ct;
}
.msite_title {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -0.5rem;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    display: block;
  }
}
.msite_nav {
  padding-top: 2.1rem;
  background-color: #fff;
  border-bottom: 0.025rem solid $bc;
  height: 10.6rem;
  .swiper-container {
    @include wh(100%, auto);
    padding-bottom: 0.6rem;
    .swiper-pagination {
      bottom: 0.2rem;
    }
  }
  .fl_back {
    @include wh(100%, 100%);
  }
}
.food_types_container {
  display: flex;
  flex-wrap: wrap;
  .link_to_food {
    width: 25%;
    padding: 0.3rem 0rem;
    @include fj(center);
    figure {
      img {
        margin-bottom: 0.3rem;
        @include wh(1.8rem, 1.8rem);
      }
      figcaption {
        text-align: center;
        @include sc(0.55rem, #666);
      }
    }
  }
}
.shop_list_container {
  margin-top: 0.4rem;
  border-top: 0.025rem solid $bc;
  background-color: #fff;
  .shop_header {
    .shop_icon {
      fill: #999;
      margin-left: 0.6rem;
      vertical-align: middle;
      @include wh(0.6rem, 0.6rem);
    }
    .shop_header_title {
      color: #999;
      @include font(0.55rem, 1.6rem);
    }
  }
}
</style>
