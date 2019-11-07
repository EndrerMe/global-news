<template>
    <div class="loader-wrapper" v-if='isShowLoader'>
      <div class="loader loader--style7" title="6">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="54px"
          height="80px"
          viewBox="0 0 24 30"
          style="enable-background:new 0 0 50 50;"
          xml:space="preserve"
        >
          <rect x="0" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="7" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0.2s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="14" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0.4s"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
</template>

<script>
export default {
    name: 'loader',
    props: ['isShowLoader'],
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.loader {
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

svg path,
svg rect {
  fill: #ff6700;
}
.loader-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  background: rgba(0, 0, 0, 0.9);
  color: rgba(0, 0, 0, 0.9);
  z-index: 9999999;
} 
</style>