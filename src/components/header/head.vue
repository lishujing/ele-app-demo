<template>
  <header id="head_top">
    <!-- 标题logo -->
    <slot name="logo"></slot>

    <!-- 点击返回 -->
    <section class="head_goback" v-if="goack" @click="$router.go(-1)">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <polyline
          points="12,18 4,9 12,0"
          style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2"
        />
      </svg>
    </section>

    <!-- signinUp 登录/注册 -->
    <router-link
      :to="userInfo ? '/profile' : 'login'"
      v-if="signinUp"
      class="head_login"
    >
      <!-- 客户已登录的图标 -->
      <svg class="user_avatar" v-if="userInfo">
        <use
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#user"
        ></use>
      </svg>

      <!-- 客户未登录，点击登录 -->
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: ["signinUp", "goBack"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    // 获取用户信息
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getUserInfo"]),
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/style/mixin.scss";

#head_top {
  background-color: $blue;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 1.95rem);
}
.head_goback {
  left: 0.4rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  @include sc(0.65rem, #fff);
  @include ct;
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
    @include wh(0.8rem, 0.8rem);
  }
}
.title_head {
  @include center;
  width: 50%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(0.8rem, #fff);
    text-align: center;
    font-weight: bold;
  }
}
</style>
