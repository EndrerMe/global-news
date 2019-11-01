<template>
  <div>
    <footer>
      <div class="container content">
        <div class="content-wrap">
          <div class="left-item">
            <img src="../../../assets/images/logo.svg" alt="logo" />
          </div>
          <div class="center-item">
            <pre class="text">Created by&#160;<a href="http://anuitex.com">Anuitex</a></pre>
          </div>
          <div class="right-item">
            <button>Subscribe Us</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
/* Footer */
footer {
  background-color: #052962;
  margin-top: 72px;
}
footer .content-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
footer .left-item,
footer .right-item {
  margin: auto 0;
}
footer .center-item {
  display: flex;
}
footer .center-item pre {
  margin: 0;
}
footer .center-item .text {
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  font-size: 10px;
  color: white;
}
footer .right-item button:hover {
  background-color: #ffe076 !important;
}
footer .right-item button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  color: #052962;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  letter-spacing: 1px;
}
@media (max-width: 1199px) {
  footer .right-item button {
    width: 232px !important;
    height: 44px;
  }
}
@media (max-width: 991px) {
  footer .right-item button {
    width: 222px !important;
    height: 40px;
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  footer .container.content {
    height: 100px;
  }
}
@media (max-width: 767px) {
  footer {
    margin-top: 0px;
  }
  footer img {
    width: 100px;
  }
  footer .content-wrap {
    flex-direction: column;
    height: unset !important;
  }
  footer .content-wrap .center-item {
    margin: 0 auto;
  }
  footer .content-wrap :nth-child(2) {
    order: 3;
  }
  footer .content-wrap .left-item {
    padding: 20px 0;
  }
  footer .content-wrap .center-item {
    padding: 20px 0;
  }
}
</style>