<template>
  <div class="currency-converter-wrap" v-if="isShowConverterProps">
    <div class="close-wrap" @click="closeConverterModal()">
      <a href="#"></a>
    </div>
    <div class="from">
      <div class="dropdown-wrap" selected>
        <span>from</span>
        <div>
          <span class="first-elem" @click="toggleCurrentRates()">{{ currentRate }}</span>
          <span class="icon-wrap">
            <font-awesome-icon icon="caret-down" />
          </span>

          <ul class="currency-dropdown-from" v-if="isShowRatesFrom">
            <template v-for="value of ratesName">
              <li
                class="hidden-elem"
                :key="value"
                v-if="value !== exchangeName || value !== currentRate"
                @click="changeCurrentRate(value)"
              >
                <span>{{ value }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="value-wrap">
        <input
          class="value"
          value="100"
          v-on:input="changeAmount($event)"
          type="number"
          placeholder="Amount"
        />
      </div>
    </div>

    <div class="convert-icon">
      <img src="../../assets/images/header/change-arrows.svg" alt="logo" />
    </div>
    <div class="to">
      <div class="dropdown-wrap" selected>
        <span>to</span>
        <div>
          <span class="first-elem" @click="toggleExchangeRates()">{{ exchangeName }}</span>
          <span class="icon-wrap">
            <font-awesome-icon icon="caret-down" />
          </span>

          <ul class="currency-dropdown-to" v-if="isShowRatesTo">
            <template v-for="value of getRatesName">
              <li
                class="hidden-elem"
                :key="value"
                v-if="value !== currentRate || value !== exchangeName"
                @click='changeRateTo(value)'
              >
                <span>{{ value }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="value-wrap">
        <span class="value">{{ exchangeTo[0] }}.{{exchangeTo[1]}}</span>
      </div>
    </div>
    <div class="rate-wrap">
      <div>
        <span>EUR/USD = {{ retesCouples.first.usd[0] }}.{{ retesCouples.first.usd[1] }}</span>
      </div>
      <div>
        <span>USD/JPY = {{ retesCouples.secound.jpy[0] }}.{{ retesCouples.secound.jpy[1] }}</span>
      </div>
      <div>
        <span>GBP/USD = {{ retesCouples.third.usd[0] }}.{{ retesCouples.third.usd[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ratesService from "./../services/rates.service";
import EventBus from "./../../eventBus";
import _ from "lodash";
import {mapGetters} from 'vuex'

export default {
  name: "converterDesctop",
  props: ["isShowConverterProps"],
  computed: mapGetters(['getRatesName', 'getRatesValue', 'getMainRates']),
  data() {
    return {
      isShowRatesFrom: false,
      isShowRatesTo: false,
      ratesName: [],
      ratesValue: {},
      currentRate: "USD",
      currentRateValue: "",
      exchangeTo: "",
      exchangeName: "EUR",
      rateAmount: 100,
      retesCouples: {
        first: {
          eur: this.rateAmount,
          usd: ""
        },

        secound: {
          usd: this.rateAmount,
          jpy: ""
        },

        third: {
          gbp: this.rateAmount,
          usd: ""
        }
      }
    };
  },
  created() {
    ratesService.getRates(this.currentRate).then(res => {
      for (let i in res.data.rates) {
        this.ratesName.push(i);
      }
      this.ratesValue = res.data.rates;
      this.exchangeTo = this.ratesValue[this.exchangeName] * this.rateAmount;
      this.exchangeTo = this.exchangeTo + "";
      this.exchangeTo = this.exchangeTo.split(".");
      let array = this.exchangeTo[0].split("");
      this.exchangeTo[0] = "";
      for (let i = 0; i < array.length; i++) {
        if (array.length > 3) {
          if (i % 3 == 0) {
            if (i < array.length - 1) {
              array[i] = array[i] + ",";
            } else {
              continue;
            }
          }
        }
      }
      this.exchangeTo[0] = array.join("");
      this.exchangeTo[1] = this.exchangeTo[1].slice(0, 4);
    });

    ratesService.getRates("EUR").then(res => {
      this.retesCouples.first.usd = res.data.rates.USD;
      this.retesCouples.first.usd = this.retesCouples.first.usd + "";
      this.retesCouples.first.usd = this.retesCouples.first.usd.split(".");
      let array = this.retesCouples.first.usd[0].split("");
      this.retesCouples.first.usd[0] = "";
      for (let i = 0; i < array.length; i++) {
        if (array.length > 3) {
          if (i % 3 == 0) {
            if (i < array.length - 1) {
              array[i] = array[i] + ",";
            } else {
              continue;
            }
          }
        }
      }
      this.retesCouples.first.usd[0] = array.join("");
      this.retesCouples.first.usd[1] = this.retesCouples.first.usd[1].slice(
        0,
        4
      );
    });

    ratesService.getRates("USD").then(res => {
      this.retesCouples.secound.jpy = res.data.rates.JPY;
      this.retesCouples.secound.jpy = this.retesCouples.secound.jpy + "";
      this.retesCouples.secound.jpy = this.retesCouples.secound.jpy.split(".");
      let array = this.retesCouples.secound.jpy[0].split("");
      this.retesCouples.secound.jpy[0] = "";
      for (let i = 0; i < array.length; i++) {
        if (array.length > 3) {
          if (i % 3 == 0) {
            if (i < array.length - 1) {
              array[i] = array[i] + ",";
            } else {
              continue;
            }
          }
        }
      }
      this.retesCouples.secound.jpy[0] = array.join("");
      this.retesCouples.secound.jpy[1] = this.retesCouples.secound.jpy[1].slice(
        0,
        4
      );
    });

    ratesService.getRates("GBP").then(res => {
      this.retesCouples.third.usd = res.data.rates.USD;
      this.retesCouples.third.usd = this.retesCouples.third.usd + "";
      this.retesCouples.third.usd = this.retesCouples.third.usd.split(".");
      let array = this.retesCouples.third.usd[0].split("");
      this.retesCouples.third.usd[0] = "";
      for (let i = 0; i < array.length; i++) {
        if (array.length > 3) {
          if (i % 3 == 0) {
            if (i < array.length - 1) {
              array[i] = array[i] + ",";
            } else {
              continue;
            }
          }
        }
      }
      this.retesCouples.third.usd[0] = array.join("");
      this.retesCouples.third.usd[1] = this.retesCouples.third.usd[1].slice(
        0,
        4
      );
    });
  },
  methods: {
    toggleCurrentRates() {
      this.isShowRatesFrom = !this.isShowRatesFrom;
    },

    toggleExchangeRates() {
      this.isShowRatesTo = !this.isShowRatesTo;
    },

    closeConverterModal() {
      EventBus.$emit("closeConverterModal", { state: false });
    },

    changeCurrentRate(value) {
      let target = value;
      this.currentRate = target + "";
      ratesService.getRates(this.currentRate).then(res => {
        this.rates = res.data.rates;
        this.currentRateValue = this.rates[this.currentRate];

        this.exchangeTo = this.rates[this.exchangeName] * this.rateAmount;
        this.exchangeTo = this.exchangeTo + "";
        this.exchangeTo = this.exchangeTo.split(".");
        let array = this.exchangeTo[0].split("");
        this.exchangeTo[0] = "";
        for (let i = 0; i < array.length; i++) {
          if (array.length > 3) {
            if (i % 3 == 0) {
              if (i < array.length - 1) {
                array[i] = array[i] + ",";
              } else {
                continue;
              }
            }
          }
        }
        this.exchangeTo[0] = array.join("");
        this.exchangeTo[1] = this.exchangeTo[1].slice(0, 4);
        this.isLoaderShow = false;
      });
    },

    changeRateTo(value) {
      this.isLoaderShow = true;
      let target = value;

      ratesService.getRates(this.currentRate).then(res => {
        this.rates = res.data.rates;
        this.exchangeTo = this.rates[target] * this.rateAmount;
        this.exchangeTo = this.exchangeTo + "";
        this.exchangeTo = this.exchangeTo.split(".");
        let array = this.exchangeTo[0].split("");
        this.exchangeTo[0] = "";
        for (let i = 0; i < array.length; i++) {
          if (array.length > 3) {
            if (i % 3 == 0) {
              if (i < array.length - 1) {
                array[i] = array[i] + ",";
              } else {
                continue;
              }
            }
          }
        }
        this.exchangeTo[0] = array.join("");
        this.exchangeTo[1] = this.exchangeTo[1].slice(0, 4);
        this.exchangeName = target;

        this.isLoaderShow = false;
      });
    },

    changeAmount: _.debounce(async function(event) {
      const value = event.target.value;

      this.rateAmount = value;

      const res = await ratesService.getRates(this.currentRate);

      if (value) {
        if (this.exchangeTo === 0) {
          this.exchangeTo = res.data.rates[this.exchangeName];
          this.exchangeTo = this.exchangeTo * value;
        } else {
          this.exchangeTo = res.data.rates[this.exchangeName] * value;
          this.exchangeTo = this.exchangeTo + "";
          this.exchangeTo = this.exchangeTo.split(".");
          let array = this.exchangeTo[0].split("");
          this.exchangeTo[0] = "";
          for (let i = 0; i < array.length; i++) {
            if (array.length > 3) {
              if (i % 3 == 0) {
                if (i < array.length - 1) {
                  array[i] = array[i] + ",";
                } else {
                  continue;
                }
              }
            }
          }
          this.exchangeTo[0] = array.join("");
          this.exchangeTo[1] = this.exchangeTo[1].slice(0, 4);
        }
      } else {
        this.rateAmount = 100;
        this.exchangeTo = res.data.rates[this.exchangeName] * this.rateAmount;
        this.exchangeTo = this.exchangeTo + "";
        this.exchangeTo = this.exchangeTo.split(".");
        let array = this.exchangeTo[0].split("");
        this.exchangeTo[0] = "";
        for (let i = 0; i < array.length; i++) {
          if (array.length > 3) {
            if (i % 3 == 0) {
              if (i < array.length - 1) {
                array[i] = array[i] + ",";
              } else {
                continue;
              }
            }
          }
        }
        this.exchangeTo[0] = array.join("");
        this.exchangeTo[1] = this.exchangeTo[1].slice(0, 4);
      }

      this.rates = res.data.rates;

      for (let item in this.rates) {
        if (typeof this.rates[item] == "number") {
          this.rates[item] = this.rates[item] * value;
        }
        continue;
      }
    }, 1000),

    focusOn() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.$emit("toggleHeadAndFoot", false);
      }
    },

    focusOut() {
      this.$emit("toggleHeadAndFoot", true);
    }
  }
};
</script>

<style scoped>
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

/* Custom Drop Down From */
.currency-converter-wrap .from .dropdown-wrap .currency-dropdown-from {
  position: absolute;
  list-style: none;
  width: 80px;
  padding-left: 0;
  font-family: "Poppins-Bold";
  height: 150px;
  overflow: auto;
  z-index: 99999;
}
.currency-converter-wrap .from .dropdown-wrap .icon-wrap {
  margin-left: 10px;
}
.currency-converter-wrap .from .dropdown-wrap .first-elem {
  font-size: 28px;
  font-family: "Poppins-Bold";
}
.currency-converter-wrap .from .dropdown-wrap svg {
  font-size: 14px;
  color: #f8c61a;
  margin-bottom: 4px;
}
.currency-converter-wrap .from .dropdown-wrap li {
  display: flex;
  width: 100%;
  background: white;
  padding-left: 8px;
}
.currency-converter-wrap .from .dropdown-wrap li:hover {
  background: #f8c61a;
}
.currency-converter-wrap .from .dropdown-wrap li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
}
/* end */

/* Custom Drop Down To */
.currency-converter-wrap .to .dropdown-wrap .currency-dropdown-to {
  /* display: none; */
  position: absolute;
  list-style: none;
  width: 80px;
  padding-left: 0;
  font-family: "Poppins-Bold";
  height: 167px;
  overflow: auto;
  z-index: 99999;
}
.currency-converter-wrap .to .dropdown-wrap .icon-wrap {
  margin-left: 10px;
}
.currency-converter-wrap .to .dropdown-wrap .first-elem {
  font-size: 28px;
  font-family: "Poppins-Bold";
}
.currency-converter-wrap .to .dropdown-wrap svg {
  font-size: 14px;
  color: #f8c61a;
  margin-bottom: 4px;
}
.currency-converter-wrap .to .dropdown-wrap li {
  display: flex;
  width: 100%;
  background: white;
  padding-left: 8px;
}
.currency-converter-wrap .to .dropdown-wrap li:hover {
  background: #f8c61a;
}
.currency-converter-wrap .to .dropdown-wrap li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
}
/* end */

.currency-converter-wrap .rate-wrap {
  margin-top: 70px;
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
  margin-top: 10px;
}
.currency-converter-wrap .to .value-wrap {
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: "Poppins-Regular";
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
}
.currency-converter-wrap .to .dropdown-wrap .dropdown:focus {
  outline: none;
}
.currency-converter-wrap .to {
  margin-top: 15px;
  text-align: start;
  display: flex;
  justify-content: space-between;
  font-family: "Amiri-Bold";
}
.currency-converter-wrap .from .value-wrap {
  display: flex;
  align-items: center;
}
.currency-converter-wrap .from .value-wrap .value {
  width: 103px;
  display: block;
  border-bottom: 1px solid #b7b7b7 !important;
  text-align: center;
  background: transparent;
  border: none;
  color: white;
  font-family: "Poppins-Regular";
  font-size: 18px;
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
}
.currency-converter-wrap .from .dropdown-wrap .dropdown:focus {
  outline: none;
}
.currency-converter-wrap .from {
  margin-top: 70px;
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
  margin-top: 20px;
  text-align: start;
}
.currency-converter-wrap {
  width: 355px;
  position: absolute;
  right: -82px;
  top: 63px;
  background-color: #052962;
  z-index: 99999;
  padding: 0 40px 45px 40px;
}
.currency-converter-wrap .close-wrap {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.currency-converter-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 0px;
}
.currency-converter-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(45deg);
}
.currency-converter-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(-45deg);
}

@media (max-width: 1139px) {
  .currency-converter-wrap {
    top: 60px;
  }
}
</style>