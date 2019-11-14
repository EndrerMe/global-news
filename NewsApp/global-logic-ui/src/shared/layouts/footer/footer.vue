<template>
  <div>
    <footer>
      <div class="container content">
        <div class="content-wrap">
          <div class="left-item">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </div>
          <div class="center-item">
            <pre class="text">Created by&#160;<a href="http://anuitex.com">Anuitex</a></pre>
          </div>
          <div class="right-item">
            <button @click='openSubcribePopup()'>Subscribe Us</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// Events
import EventBus from '@/eventBus';

export default {
  name: "Footer",
  methods: {
    openSubcribePopup() {
      EventBus.$emit("ShowSubscribe");
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
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
footer .left-item img {
  width: 136px;
}
footer .left-item,
footer .right-item {
  margin: auto 0;
}
footer .center-item {
  display: flex;
  justify-content: center;
}
footer .center-item pre {
  margin: 0;
}
footer .center-item .text {
  padding-bottom: 5px;
  display: flex;
  align-items: flex-end;
  font-size: 10px;
  color: #F9F9F9;
  opacity: 0.7;
  font-family: 'Poppins-Light';
}
footer .center-item .text a {
  color: white;
}
footer .right-item button:hover {
  background-color: #ffe076 !important;
}
footer .right-item button {
  width: 243px;
  height: 48px;
  background-color: #f8c61a;
  color: #052962;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  border: none;
  letter-spacing: 1px;
  font-family: "Poppins-SemiBold";
}

/* Media */
@media (min-width: 1140px){
  footer .container {
    max-width: 1638px !important;
  }
  footer .container.content {
    height: 112px !important;
  }
}
@media (max-width: 1139px) {
  footer .right-item button {
    font-size: 14px;
    height: 40px;
    width: 184px;
  }
  footer .container{
    max-width: 814px !important;
  }
  footer .left-item img{
    width: 102px;
  }
}
@media (min-width: 768px) {
  footer .container.content {
    height: 100px;
  }
  footer .right-item{
    text-align:end;
  }   
  footer .left-item{
    text-align: start;
  }
  .left-item, .center-item, .right-item{
    flex:1;
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
  }
  footer .content-wrap .center-item {
    margin: 0 auto;
    padding: 20px 0;
  }
  footer .content-wrap :nth-child(2) {
    order: 3;
  }
  footer .content-wrap .left-item {
    padding: 20px 0;
  }
  footer{
    border-top: 1px solid #1f3a6b;
  }
  footer .right-item button {
    width: 100%;
    font-size: 13px;
  }
  footer .container{
    max-width: unset;
  }
    footer .left-item img{
    width: 90px;
  }
  footer .center-item .text{
    font-size: 8px;
  }
  footer .container.content {
    height: 195px;
  }
}
</style>