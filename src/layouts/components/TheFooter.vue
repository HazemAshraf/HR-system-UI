<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Human Resources Application
    Author: Hazem Ashraf
    Author URL: https://www.linkedin.com/in/hazem-ashraf-1242169b/
========================================================================================== -->

<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <span>
      COPYRIGHT &copy; {{ new Date().getFullYear() }}
      <a href="/" rel="nofollow"> Human Resources Application </a>, All rights Reserved
    </span>
    <span>
        Powered by GS-Group
    </span>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
};
</script>
