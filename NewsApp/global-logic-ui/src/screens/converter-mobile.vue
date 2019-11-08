<template>
  <div class="currency-converter-wrap">
    <div class="title-wrap">
      <span class="title-text">Currency Converter</span>
    </div>
    <div class="from">
      <div class="dropdown-wrap" selected>
        <div class="dropdown-title-wrap">
          <span class="dropdown-title">from</span>
        </div>
        <div>
          <span class="first-elem">USD</span>
          <span class="icon-wrap">
            <font-awesome-icon icon="caret-down" />
          </span>
          <ul class="currency-dropdown-from"  v-if='isShowFromList'>
            <li class="hidden-elem">UYF</li>
            <li class="hidden-elem">UIH</li>
            <li class="hidden-elem">VCF</li>
            <li class="hidden-elem">OUU</li>
            <li class="hidden-elem">MVC</li>
          </ul>
        </div>
      </div>
      <div class="value-wrap">
        <input class="value" value="100" type="number" placeholder="Amount" />
      </div>
    </div>
    <div class="convert-icon">
      <img src="../assets/images/header/change-arrows.svg" alt="logo" />
    </div>
    <div class="to">
      <div class="dropdown-wrap" selected>
        <div class="dropdown-title-wrap">
          <span class="dropdown-title">to</span>
        </div>
        <div>
          <span class="first-elem">EUR</span>
          <span class="icon-wrap">
            <font-awesome-icon icon="caret-down" />
          </span>
          <ul class="currency-dropdown-to" v-if='isShowToList'>
            <li class="hidden-elem">UYF</li>
            <li class="hidden-elem">UIH</li>
            <li class="hidden-elem">VCF</li>
            <li class="hidden-elem">OUU</li>
            <li class="hidden-elem">MVC</li>
          </ul>
        </div>
      </div>
      <div class="value-wrap">
        <input class="value" value="123.086" type="number" placeholder="Amount" />
      </div>
    </div>
    <div class="rate-wrap">
      <div>
        <span>EUR/USD = 32.09</span>
      </div>
      <div>
        <span>USD/JPY = 54.00</span>
      </div>
      <div>
        <span>GBP/USD = 13.50</span>
      </div>
    </div>
  </div>
</template>

<script>
// import ratesService from "./../shared/services/rates.service";

export default {
  name: 'converter-mobile',
  data() {
    return {
      isShowToList: false,
      isShowFromList: false,
    }
  }
}
</script>

<style scoped>
/* Mob Converter */
.currency-converter-wrap .title-wrap {
  padding-top: 32px;
}
.currency-converter-wrap .title-wrap .title-text {
  color: white;
  font-family: "Poppins-Regular";
  font-size: 20px;
}

/* Common Custom Drop Down  */
.currency-converter-wrap .from .dropdown-wrap .first-elem,
.currency-converter-wrap .to .dropdown-wrap .first-elem {
  font-size: 40px;
  font-family: "Amiri-Bold";
}
.currency-converter-wrap .to .dropdown-wrap svg,
.currency-converter-wrap .from .dropdown-wrap svg {
  font-size: 14px;
  color: #f8c61a;
  margin-bottom: 8px;
}
.currency-converter-wrap .to .dropdown-wrap li span,
.currency-converter-wrap .from .dropdown-wrap li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
}
.currency-converter-wrap .to .dropdown-wrap .icon-wrap,
.currency-converter-wrap .from .dropdown-wrap .icon-wrap {
  margin-left: 10px;
}
.currency-converter-wrap .to .dropdown-wrap li,
.currency-converter-wrap .from .dropdown-wrap li {
  display: flex;
  width: 100%;
  background: white;
  padding-left: 8px;
}
.currency-converter-wrap .from .dropdown-wrap li:hover,
.currency-converter-wrap .to .dropdown-wrap li:hover {
  background: #f8c61a;
}
.currency-converter-wrap .to .dropdown-wrap .currency-dropdown-to,
.currency-converter-wrap .from .dropdown-wrap .currency-dropdown-from {
  display: none;
  position: absolute;
  list-style: none;
  width: 80px;
  padding-left: 0;
  font-family: "Poppins-Bold";
  height: 150px;
  overflow: auto;
  z-index: 99999;
}

/* Scroll */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #959aa0;
}
::-webkit-scrollbar-thumb {
  background: #052962;
  border-radius: 10px;
}
/* end */

.currency-converter-wrap .rate-wrap {
  margin-top: 50px;
  font-family: "SegoeUIRegular";
}
.currency-converter-wrap .rate-wrap span {
  color: #e2e1e1;
  padding: 14px;
  display: block;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.21612394957983194) 100%,
    rgba(255, 255, 255, 0.5186449579831933) 100%
  );
  margin-top: 12px;
}
.currency-converter-wrap .to .value-wrap,
.currency-converter-wrap .from .value-wrap {
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: "Poppins-Regular";
}
.currency-converter-wrap .to .value-wrap .value,
.currency-converter-wrap .from .value-wrap .value {
  width: 160px;
  display: block;
  border-bottom: 1px solid #b7b7b7 !important;
  text-align: center;
  background: transparent;
  border: none;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 22px;
}
.currency-converter-wrap .to .dropdown-wrap,
.currency-converter-wrap .from .dropdown-wrap {
  height: 81px;
  width: 100px;
  display: flex;
  flex-direction: column;
}
.currency-converter-wrap .to .dropdown-wrap .dropdown-title-wrap  ,
.currency-converter-wrap .from .dropdown-wrap .dropdown-title-wrap  {
  height: 15px;
}
.currency-converter-wrap .to .dropdown-wrap .dropdown-title,
.currency-converter-wrap .from .dropdown-wrap .dropdown-title {
  font-family: "Amiri-Regular";
  font-size: 16px;
  color: #b0bbcc;
}

.currency-converter-wrap .to .dropdown-wrap .dropdown option,
.currency-converter-wrap .from .dropdown-wrap .dropdown option {
  font-size: 16px;
  color: black;
}
.currency-converter-wrap .to .dropdown-wrap .dropdown,
.currency-converter-wrap .from .dropdown-wrap .dropdown {
  background: transparent;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 26px;
  border: none;
}
.currency-converter-wrap .to .dropdown-wrap .dropdown:focus,
.currency-converter-wrap .from .dropdown-wrap .dropdown:focus {
  outline: none;
}
.currency-converter-wrap .to {
  margin-top:22px;
  text-align: start;
  display: flex;
  justify-content: space-between;
  font-family: "Amiri-Bold";
}
.currency-converter-wrap .from {
  margin-top: 58px;
  text-align: start;
  display: flex;
  justify-content: space-between;
  font-family: "Amiri-Bold";
}
.currency-converter-wrap .from,
.currency-converter-wrap .to {
  color: #eaeaea;
  font-size: 12px;
}
.currency-converter-wrap .convert-icon {
  margin-top: 6px;
  text-align: start;
}
.currency-converter-wrap {
  width: 100%;
  border-top: 1px solid #436f9c;
  background-color: #052962;
  z-index: 99999;
  padding: 0 16px 45px 16px;
}
</style>