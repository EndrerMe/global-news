<template>
  <div>
    <div class="mobile-notify-prompt-wrap" v-if="isShowSubscribeMobile">
      <div class="close-wrap" @click="closeSubscribeFull()">
        <a class="close-button" href="#" @click="closeSubSubscribe()"></a>
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
          <ul class="currency-dropdown"  v-if="isShowCatogories">
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
// Events
import EventBus from '@/eventBus';
// Services
import subscriptionService from '@/shared/services/subscription.service';

export default {
  name: 'subscribeMobile',
  data() {
    return {
      currentCategory: 'All News',
      isShowCatogories: false,
      categoryForSubscrive: '',
      isShowSubscribeMobile: false,
      email: '',
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
  mounted() {
    EventBus.$on("toggleMobileSubscrive", () => {
      this.isShowSubscribeMobile = !this.isShowSubscribeMobile;
    });
  },
  methods: {
    closeSubSubscribe() {
      this.isShowSubscribeMobile = false;
    },
    toggleCategories() {
      this.isShowCatogories = !this.isShowCatogories;
    },
    closeSubscribeMobile() {
      this.isShowSubscribeMobile = !this.isShowSubscribeMobile;
      if (this.isShowCatogories) {
        this.isShowCatogories = !this.isShowCatogories;
      }
    },
    subscribe() {
      subscriptionService.addSubscroption(this.email, this.categoryForSubscrive);  
    },
    changeCategory(category) {
      this.categoryForSubscrive = category;
      this.currentCategory = category;
      this.isShowCatogories = !this.isShowCatogories;
    },
  },
};
</script>

<style scoped>
.mobile-notify-prompt-wrap .currency-dropdown {
  position: absolute;
  list-style: none;
  padding-left: 0;
  z-index: 99999;
  top: 50px;
}
.mobile-notify-prompt-wrap .dropdown-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  font-family: "Amiri-Bold";
}
.mobile-notify-prompt-wrap .dropdown-wrap .icon-wrap {
  margin-left: 4px;
  display: flex;
  align-items: center;
}
.mobile-notify-prompt-wrap .dropdown-wrap .first-elem {
  font-size: 40px;
  display: flex;
}
.mobile-notify-prompt-wrap .dropdown-wrap .first-elem:hover{
  cursor:pointer;

}
.mobile-notify-prompt-wrap .dropdown-wrap svg {
  font-size: 14px;
  color: #f8c61a;
}
.mobile-notify-prompt-wrap .dropdown-wrap li {
  display: flex;
  width: 100%;
  background: white;
  padding: 0 5px;
}
.mobile-notify-prompt-wrap .dropdown-wrap li:hover {
  background: #f8c61a;
  cursor: pointer;
}
.mobile-notify-prompt-wrap .dropdown-wrap li span {
  color: #3f3f3f;
  font-size: 16px;
  padding: 2px 0;
}

.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}
.mobile-notify-prompt-wrap .news-dropdown {
  background: transparent;
  color: white;
  border: none;
}
.mobile-notify-prompt-wrap .news-dropdown option {
  color: black;
}
.mobile-notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .button-wrap {
  margin-top: 23px;
}
.mobile-notify-prompt-wrap .email-wrap input {
  color: #eaeaea;
  display: block;
  width: 100%;
  text-align: start;
  background: transparent;
  border: none;
  border-bottom: 1px solid;
  font-family: 'Poppins-Regular';
  font-size: 22px;
}
.mobile-notify-prompt-wrap .button-wrap button {
  width: 100%;
  height: 40px;
  background-color: #f8c61a;
  border: none;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Poppins-SemiBold";
  color: #052962;
}
.mobile-notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.mobile-notify-prompt-wrap {
  width: 100%;
  padding: 55px 16px;
  border: 1px solid;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  background-color: #052962;
  z-index: 9999999;
  text-align: center;
}
.mobile-notify-prompt-wrap .close-wrap a {
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 24px;
  right: 23px;
}
.mobile-notify-prompt-wrap .close-wrap a::before {
  position: absolute;
  content: "";
  width: 27px;
  height: 2px;
  background-color: #F8C61A;
  top: 7px;
  right: 0px;
  transform: rotate(45deg);
}
.mobile-notify-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 27px;
  height: 2px;
  background-color: #F8C61A;
  top: 7px;
  right: 0px;
  transform: rotate(-45deg);
}
.mobile-notify-prompt-wrap .text-wrap {
  margin-top: 35px;
  color: white;
}

.mobile-notify-prompt-wrap .text-wrap .dropdown{
  margin-bottom: 0;
}
.mobile-notify-prompt-wrap .wropdown-arrow {
  margin-left: 10px;
  font-size: 20px;
  font-size: 14px;
}
.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
  font-family: 'Poppins-Regular';
  font-size: 18px;
}
.mobile-notify-prompt-wrap .send-email-wrap {
  width:100%;
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .button-wrap {
  margin-top: 23px;
}
.mobile-notify-prompt-wrap .email-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
}
</style>