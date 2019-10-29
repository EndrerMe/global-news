<template>
    <div class="currency-converter-wrap" v-if='isShowConverter'>
      <div class="close-wrap">
        <a href="#"></a>
      </div>
      <div class="from">
        <div class="dropdown-wrap" selected>
          <span>from</span>
          <select class="dropdown">
            <option>USD</option>
            <option>CHF</option>
            <option>MYR</option>
            <option>BGN</option>
          </select>
        </div>
        <div class="value-wrap">
          <input class="value" value="100" />
        </div>
      </div>

      <div class="convert-icon">
                              <img src="../../assets/images/header/change-arrows.svg" alt="logo" />

      </div>
      <div class="to">
        <div class="dropdown-wrap" selected>
          <span>to</span>
          <select class="dropdown">
            <option>EUR</option>
            <option>CHF</option>
            <option>MYR</option>
            <option>BGN</option>
          </select>
        </div>
        <div class="value-wrap">
                    <input class="value" value="91.0249" />
        </div>
      </div>

      <div class="rate-wrap">
        <div>
          <span>EUR/USD = 1.0986</span>
        </div>
        <div>
          <span>USD/JPY = 106.8905</span>
        </div>
        <div>
          <span>GBP/USD = 1.2234</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'converterDesctop',
    props: ['isShowConverter'],
}
</script>

<style scoped>
.currency-converter-wrap .rate-wrap {
  padding: 0 60px;
  margin-top: 45px;
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
  margin-top: 10px;
}

.currency-converter-wrap .to .value-wrap {
  font-size: 19px;
  display: flex;
  align-items: center;
}

.currency-converter-wrap .to .value-wrap .value {
  width: 103px;
  display: block;
  border-bottom: 1px solid #b7b7b7 !important;
  text-align: center;
}

.currency-converter-wrap .to .dropdown-wrap {
  width: 100px;
  display: flex;
  flex-direction: column;
}
.currency-converter-wrap .to .dropdown-wrap .dropdown option {
  font-size: 16px;
  color: black;
}

.currency-converter-wrap .to .dropdown-wrap .dropdown {
  background: transparent;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 26px;
  border: none;
  font-family: initial;
}

.currency-converter-wrap .to .dropdown-wrap .dropdown:focus {
  outline: none;
}

.currency-converter-wrap .to {
  margin-top: 15px;
  text-align: start;
  display: flex;
  justify-content: space-between;
}
.currency-converter-wrap .from .value-wrap {
  font-size: 19px;
  display: flex;
  align-items: center;
}

.currency-converter-wrap .from .value-wrap .value {
  width: 103px;
  display: block;
  border-bottom: 1px solid #b7b7b7 !important;
  text-align: center;
}

.currency-converter-wrap .from .dropdown-wrap {
  width: 100px;
  display: flex;
  flex-direction: column;
}
.currency-converter-wrap .from .dropdown-wrap .dropdown option {
  font-size: 16px;
  color: black;
}

.currency-converter-wrap .from .dropdown-wrap .dropdown {
  background: transparent;
  width: 80px;
  height: 40px;
  color: white;
  font-size: 26px;
  border: none;
  font-family: initial;
}

.currency-converter-wrap .from .dropdown-wrap .dropdown:focus {
  outline: none;
}

.currency-converter-wrap .from {
  margin-top: 70px;
  text-align: start;
  display: flex;
  justify-content: space-between;
}
.currency-converter-wrap .from,
.currency-converter-wrap .to {
  color: #eaeaea;
  font-size: 10px;
  padding: 0 60px;
}

.currency-converter-wrap .convert-icon{
  margin-top:20px;
      padding: 0 60px;
      text-align:start;
}

.currency-converter-wrap {
  width: 380px;
  border: 1px solid;
  position: absolute;
  right: 590px;
  top: 102px;
  background-color: #052962;
  z-index: 999;
  padding-bottom: 45px;
}
.currency-converter-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.currency-converter-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}

.currency-converter-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}
</style>