<template>
    <div class="bottom-menu-wrap">
        <div class="container">
        <div class="box-menu">
            <b-nav class="bottom-menu">
            <b-nav-item>
                <router-link class="link" :to="{ name: `business` }">Business</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `entertainment` }">Entertainment</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `general` }">General</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `health` }">Health</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `science` }">Science</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `sport` }">Sport</router-link>
            </b-nav-item>
            <b-nav-item>
                <router-link class="link" :to="{ name: `technology` }">Technology</router-link>
            </b-nav-item>
            </b-nav>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
.bottom-menu li a:hover {
  color: #f8c61a !important;
}

.bottom-menu-wrap {
  height: 120px;
  display: flex;
  align-items: center;
}

@media (max-width: 1199px) {
  .bottom-menu ul li a span {
    font-size: 23px;
  }
}
@media (max-width: 991px) {
  .bottom-menu ul li a span {
    font-size: 17px;
  }

  /* .bottom-menu li a a{
    font-size:12px !important;
  } */
}
</style>