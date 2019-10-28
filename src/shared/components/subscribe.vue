<template>
    <div>
        <div class="subscribe-prompt-wrap"  v-wow="{ 'animation-name': 'bounceInRight','animation-duration': '1s' }">
            <div class="close-wrap">
                <a href="#"></a>
            </div>
            <div class="text-wrap">
                <span>Do you want to receive more news ?</span>
            </div>
            <div class="button-wrap">
                <button href="#">Subscribe Us</button>
            </div>
        </div>


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
    </div>
</template>

<script>
export default {
    name: 'subscribeDesctop'
}
</script>

<style scoped>
.subscribe-prompt-wrap {
  width: 381px;
  padding-bottom: 40px;
  border: 1px solid;
  position: absolute;
  right: -15px;
  top: 102px;
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
}
.subscribe-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
</style>