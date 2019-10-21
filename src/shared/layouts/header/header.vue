<template>
  <div class="header-wrap">
    <div class="container">
      <div class="header">
        <div class="logo"></div>

        <div class="header-content">
          <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
              <b-navbar-brand href="#">
                <img src="../../../assets/images/logo.svg" alt="logo" />
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#" class="current-date">
                    <span>October 8, 2019</span>
                    <span>Tuesday</span>
                  </b-nav-item>
                  <b-nav-item-dropdown text="Currency Converter">
                    <b-dropdown-item href="#">...</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item href="#">Glasgow</b-nav-item>
                  <b-nav-item href="#">
                          <font-awesome-icon icon="search" />
                  </b-nav-item>
                  <b-nav-item href="#">Notify</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </div>

    <div style="position:absolute;">
      <font-awesome-icon icon="search" />

    </div>
  </div>
</template>

<style scoped>
.header-wrap {
  background-color: #052962 !important;
}

.navbar {
  padding: 20px;
}
.navbar-brand {
  padding: 0;
}
.current-date a {
  display: flex;
  flex-direction: column;
}
.navbar {
  background-color: #052962 !important;
}
</style>