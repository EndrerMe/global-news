<template>
  <div>
    <div
      class="subscribe-prompt-wrap"
      v-wow="{ 'animation-name': 'bounceInRight','animation-duration': '1s' }"
      v-if="isShowSubscribe"
    >
      <div class="close-wrap" @click="closeSubSubscribe()">
        <a href="#"></a>
      </div>
      <div class="text-wrap">
        <span>Do you want to receive more news ?</span>
      </div>
      <div class="button-wrap">
        <button href="#" @click="showFullSubscribe()">Subscribe Us</button>
      </div>
    </div>
    <div class="notify-prompt-wrap" v-if="isShowSubscribeFull">
      <div class="close-wrap" @click="closeSubscribeFull()">
        <a class="close-button" href="#"></a>
      </div>
      <div class="text-wrap">
        <p>You subscribe on</p>
        <p class="dropdown"></p>
        <div class="dropdown-wrap">
          <span class="first-elem" @click="toggleCategories">
            {{ currentCategory }}
            <span class="icon-wrap">
              <font-awesome-icon icon="caret-down" />
            </span>
          </span>
          <ul class="currency-dropdown" v-if="isShowCatogories">
            <li class="hidden-elem" v-for="category of categoriesArray" :key="category" @click='changeCategory(category)'>
              <span>{{ category }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="send-email-wrap">
        <div class="email-wrap">
          <input value="E-mail" v-model='email'/>
        </div>
        <div class="button-wrap">
          <button href="#" @click='subscribe()'>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import subscriptionService from './../services/subscription.service';
import EventBus from './../../eventBus';

export default {
  name: "subscribeDesctop",
  props: ["showSubscribeFull"],
  data() {
    return {
      email: '',
      category: '',
      currentCategory: 'All News',
      isShowCatogories: false,
      isShowSubscribe: true,
      isShowSubscribeFull: false,
      categoriesArray: [
        "All News",
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sport",
        "Technology"
      ]
    };
  },
  methods: {
    closeSubSubscribe() {
      this.isShowSubscribe = false;
    },

    showFullSubscribe() {
      this.isShowSubscribe = false;
      this.isShowSubscribeFull = true;
    },

    closeSubscribeFull() {
      this.isShowSubscribeFull = !this.isShowSubscribeFull;
      if (this.isShowCatogories) {
        this.isShowCatogories = !this.isShowCatogories;
      }
    },

    toggleCategories() {
      this.isShowCatogories = !this.isShowCatogories;
    },

    changeCategory(category) {
      this.category = category;
      this.currentCategory = category;
      this.isShowCatogories = !this.isShowCatogories;
    },

    subscribe() {
      subscriptionService.addSubscroption(this.email, this.category);  
    }
  },
  mounted() {
    EventBus.$on("ShowSubscribe", () => {
      this.isShowSubscribeFull = !this.isShowSubscribeFull;
    });
  },
  watch: {
    showSubscribeFull: function(newValue) {
      if (this.isShowSubscribeFull !== newValue) {
        this.isShowSubscribe = false;
        this.isShowSubscribeFull = newValue;
      } else {
        return;
      }
    }
  }
};
</script>

<style scoped>
/* Custom Drop Down From */
.notify-prompt-wrap .currency-dropdown {
  position: absolute;
  list-style: none;
  padding-left: 0;
  z-index: 99999;
  top: 40px;
}
.notify-prompt-wrap .dropdown-wrap {
  position: relative;
  font-family: "Amiri-Bold";
  display: flex;
  justify-content: center;
}
.notify-prompt-wrap .dropdown-wrap .icon-wrap {
  margin-left: 4px;
  display: flex;
  align-items: center;
}
.notify-prompt-wrap .dropdown-wrap .first-elem {
  font-size: 28px;
  display: flex;
}
.notify-prompt-wrap .dropdown-wrap .first-elem:hover{
  cursor:pointer;

}
.notify-prompt-wrap .dropdown-wrap svg {
  font-size: 14px;
  color: #f8c61a;
}
.notify-prompt-wrap .dropdown-wrap li {
  display: flex;
  width: 100%;
  background: white;
  padding: 0 5px;
}
.notify-prompt-wrap .dropdown-wrap li:hover {
  background: #f8c61a;
  cursor: pointer;
}
.notify-prompt-wrap .dropdown-wrap li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
}
/* end */

/* Notify Subscribe*/
.notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}
.notify-prompt-wrap .news-dropdown {
  background: transparent;
  color: white;
  border: none;
}
.notify-prompt-wrap .news-dropdown option {
  color: black;
}
.notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.notify-prompt-wrap .button-wrap {
  margin-top: 23px;
}
.notify-prompt-wrap .email-wrap input {
  color: #eaeaea;
  display: block;
  width: 100%;
  text-align: start;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
}
.notify-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins-SemiBold";
  color: #052962;
}
.notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.notify-prompt-wrap {
  width: 355px;
  padding-bottom: 56px;
  border: 1px solid;
  position: absolute;
  right: 0;
  top: 101px;
  background-color: #052962;
  z-index: 999;
}
.notify-prompt-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.notify-prompt-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}
.notify-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}
.notify-prompt-wrap .text-wrap {
  margin-top: 86px;
  padding: 0px 90px;
  color: white;
}
.notify-prompt-wrap .wropdown-arrow {
  margin-left: 10px;
  font-size: 20px;
  font-size: 14px;
}
.notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}
.notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.notify-prompt-wrap .button-wrap {
  margin-top: 23px;
}
.notify-prompt-wrap .email-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
}

/* Subscribe Prompt Auto*/
.subscribe-prompt-wrap {
  width: 381px;
  padding-bottom: 40px;
  border: 1px solid;
  position: absolute;
  right: 0px;
  top: 101px;
  background-color: #052962;
  z-index: 999;
}
.subscribe-prompt-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.subscribe-prompt-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}
.subscribe-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}
.subscribe-prompt-wrap .text-wrap {
  margin-top: 90px;
  padding: 0px 100px;
  font-family: "Poppins-Regular";
  font-size: 16px;
}
.subscribe-prompt-wrap .text-wrap span {
  color: #eaeaea;
}
.subscribe-prompt-wrap .button-wrap {
  margin-top: 37px;
}
.subscribe-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins-SemiBold";
  color: #052962;
}
.subscribe-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
</style>