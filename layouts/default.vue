<template>
  <ion-app>
    <ion-tabs>
      <ion-router-outlet>
        <slot />
      </ion-router-outlet>
      <app-footer-navigation />
    </ion-tabs>
  </ion-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
