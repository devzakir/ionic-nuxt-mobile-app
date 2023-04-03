<template>
  <ion-page>
    <ion-nav :root="SidebarMenu"></ion-nav>
  </ion-page>
</template>

<script>
import SidebarMenu from "~~/components/SidebarMenu.vue";

export default {
  data() {
    return {
      SidebarMenu,
    };
  },
};
</script>

<style></style>
