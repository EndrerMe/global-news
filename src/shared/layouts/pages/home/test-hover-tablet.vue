
<template>
  <div>
    <!-- Notify -->
    <div class="notify-prompt-wrap">
      <div class="close-wrap">
        <a href="#"></a>
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

<style scoped>
/* Notify */
.notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
}

.notify-prompt-wrap .text-wrap p.dropdown {
  font-size: 32px;
  font-family: initial;
  margin-right: 10px;
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

.notify-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}

.notify-prompt-wrap {
  width: 345px;
  padding-bottom: 56px;
  border: 1px solid;
  position: absolute;
  right: 400px;
  top: 402px;
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
  margin-top: 80px;
  padding: 0px 90px;
  color: #f8c61a;
}

.notify-prompt-wrap .wropdown-arrow {
  margin-left: 10px;
  font-size: 20px;
  font-size: 14px;
}
.notify-prompt-wrap .text-wrap p {
  color: #eaeaea;
  margin-bottom: 0;
}

.notify-prompt-wrap .text-wrap p.dropdown {
  font-size: 28px;
  font-family: initial;
}

.notify-prompt-wrap .send-email-wrap {
  display: inline-flex;
  flex-direction: column;
  margin-top: 18px;
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

.notify-prompt-wrap .button-wrap button {
  width: 242px;
  height: 48px;
  background-color: #f8c61a;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.notify-prompt-wrap .button-wrap button:hover {
  background-color: #ffe076;
}
</style>


