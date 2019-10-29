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
        <button href="#">Subscribe Us</button>
      </div>
    </div>


<<<<<<< HEAD
        <div class="mobile-notify-prompt-wrap" style="display:none">
          <div class="close-wrap">
              <a class="close-button" href="#"></a>
          </div>
          <div class="text-wrap">
              <p>You subscribe on</p>
              <p class="dropdown">
              <span>All News</span>
              <span class="wropdown-arrow">
                  <font-awesome-icon icon="caret-down" />
              </span>
              </p>
          </div>
          <div class="send-email-wrap">
              <div class="email-wrap">
              <span>E-mail</span>
              </div>
              <div class="button-wrap">
              <button href="#">Subscribe</button>
              </div>
          </div>
        </div>
=======
    <div class="mobile-notify-prompt-wrap" >
      <div class="close-wrap">
        <a class="close-button" href="#"></a>
      </div>
      <div class="text-wrap">
        <p>You subscribe on</p>
        <p class="dropdown">
          <span>All News</span>
          <span class="wropdown-arrow">
            <font-awesome-icon icon="caret-down" />
          </span>
        </p>
      </div>
      <div class="send-email-wrap">
        <div class="email-wrap">
          <input value="E-mail"/>
        </div>
        <div class="button-wrap">
          <button href="#">Subscribe</button>
        </div>
      </div>
>>>>>>> 8c643f02b7c7f1a11ae44cee3d6e6794f8153b8e
    </div>

  </div>
  
</template>

<script>
export default {
  name: "subscribeDesctop",
  data() {
    return {
      isShowSubscribe: true
    };
  },
  methods: {
    closeSubSubscribe() {
      this.isShowSubscribe = false;
    }
  }
};
</script>

<style scoped>
/* Notify */
.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}
.mobile-notify-prompt-wrap .text-wrap p.dropdown {
  font-size: 22px;
  font-family: initial;
  margin-right: 10px;
  font-weight: bold;
}
.mobile-notify-prompt-wrap .send-email-wrap {
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
.mobile-notify-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
.mobile-notify-prompt-wrap {
  right: 0px;
  top: 101px;
  position: absolute;
  padding-bottom: 45px;
  border: 1px solid;
  background-color: #052962;
  z-index: 999;
}
.mobile-notify-prompt-wrap .close-wrap {
  position: relative;
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
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(45deg);
}
.mobile-notify-prompt-wrap .close-wrap a::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 1px;
  background-color: white;
  top: 8px;
  right: 2px;
  transform: rotate(-45deg);
}
.mobile-notify-prompt-wrap .text-wrap {
  margin-top: 50px;
  padding: 0px 90px;
  color: #f8c61a;
}
.mobile-notify-prompt-wrap .wropdown-arrow {
  margin-left: 10px;
  font-size: 20px;
  font-size: 14px;
}
.mobile-notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
  margin-bottom: 2px;
}
.mobile-notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .button-wrap {
  margin-top: 10px;
}
.mobile-notify-prompt-wrap .email-wrap span {
  color: #eaeaea;
  display: block;
  width: 100%;
  border-bottom: 1px solid;
  text-align: start;
}
.mobile-notify-prompt-wrap .button-wrap button {
  height: 32px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}

/* /// */
.subscribe-prompt-wrap {
  width: 381px;
  padding-bottom: 40px;
  border: 1px solid;
  position: absolute;
  right: -15px;
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
  padding: 0px 115px;
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