<template>
  <div>
    <paginate
      :page-count="pageNumber"
      :page-range="3"
      :margin-pages="1"
      :click-handler="clickCallback"
      :container-class="'pagination-wrap'"
      :page-class="'page-number'"
      :active-class="'active'"
      :no-li-surround="false">
      </paginate>

    <!-- <div class="pagination-wrap">
        <button class="double-arrow-left"></button>
        <button class="arrow-left"></button>

        <div class="numbers-wrap">
          <button href="#" class="page-number">
            <span class="value">1</span>
          </button>
          <button href="#" class="page-number active">
            <span class="value">2</span>
          </button>
          <button href="#" class="page-number">
            <span class="value">3</span>
          </button>

          <div class="separator-wrap">
            <span class="separator">...</span>
          </div>

          <button href="#" class="page-number">
            <span class="value">16</span>
          </button>
        </div>

        <button href="#" class="arrow-right"></button>
        <button href="#" class="double-arrow-right"></button>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["pageNumber"],
  name: "categoryPagination",
  methods: {
    clickCallback(pageNum) {
      this.$emit("changePage", pageNum);
    }
  }
};
</script>

