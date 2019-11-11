<template>
  <div>
    <paginate
      :page-count="pageNumber"
      :initial-page='1'
      :page-range="3"
      :margin-pages="1"
      :click-handler="clickCallback"
      :container-class="'pagination-wrap'"
      :page-class="'page-number'"
      :active-class="'active'"
      :no-li-surround="false">
      </paginate>
  </div>
</template>

<script>
export default {
  props: ["pageNumber", 'isFirstPage'],
  name: "categoryPagination",
  data() {
    return {
      toFirstPage: false,
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.$emit("changePage", pageNum);
    }
  },
  watch: {
    isFirstPage(newVal) {
      this.toFirstPage = newVal;
    }
  }
};
</script>

