<template>
  <div class="bottom-menu-wrap">
    <div class="container">
      <div class="box-menu">
        <b-nav class="bottom-menu">
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'business'} }"
            >Business</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'entertainment'} }"
            >Entertainment</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'general'} }"
            >General</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'health'} }"
            >Health</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'science'} }"
            >Science</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" :to="{ name: `category`, params: {category: 'sport'} }">Sport</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link
              class="link"
              :to="{ name: `category`, params: {category: 'technology'} }"
            >Technology</router-link>
          </b-nav-item>
        </b-nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigationDesctop"
};
</script>

<style scoped>
.bottom-menu-wrap {
  height: 120px;
  display: flex;
  align-items: center;
}
.bottom-menu-wrap {
  font-family: "Amiri-Bold";
}

.bottom-menu {
  background-color: unset !important;
  justify-content: center !important;
}
.bottom-menu li a a {
  color: #3f3f3f;
  font-size: 26px;
  font-weight: bold;
  text-decoration: none;
}
.bottom-menu li .nav-link:hover a::before {
  display: block;
}

.bottom-menu-wrap {
  height: 120px;
  display: flex;
  align-items: center;
}
.bottom-menu li a a {
  position: relative;
}
.bottom-menu li .nav-link a {
  display: flex;
  justify-content: center;
  line-height: 20px;
}

.bottom-menu li .nav-link a::before {
  display: none;
  content: "";
  width: 93%;
  height: 7px;
  background: #f8c61a;
  position: absolute;
  z-index: -1;
  bottom: 2px;
}

/* Media */
@media (max-width: 1199px) {
  .bottom-menu ul li a span {
    font-size: 23px;
  }
}
@media (min-width: 1140px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 26px !important;
  }
}
@media (max-width: 1139px) {
  .bottom-menu-wrap .bottom-menu li a {
    font-size: 16px;
  }
  .bottom-menu-wrap {
    height: 100px;
  }
}
@media (max-width: 767px) {
  .bottom-menu-wrap .bottom-menu {
    flex-wrap: unset;
  }
  .bottom-menu-wrap .box-menu {
    overflow: auto !important;
    display: flex;
  }
  .bottom-menu-wrap {
    height: 72px;
  }
}
</style>