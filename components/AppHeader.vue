<template>
  <ion-header class="border-b border-gray-100">
    <ion-toolbar>
      <ion-button href="/home" class="logo">
        <ion-title slot="start">
          <!-- <img src="/assets/svg/logo.svg" /> -->
          <img src="/assets/svg/logo.svg" />
        </ion-title>
      </ion-button>
      <ion-buttons slot="end">
        <ion-button href="/auth/login">
          Login
          <img src="/assets/svg/exit.svg" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {};
</script>

<style></style>
