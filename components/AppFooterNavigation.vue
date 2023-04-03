<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/home" class="bg-white">
      <ph-house :size="24" color="#767F8C" />
      Home
    </ion-tab-button>
    <ion-tab-button tab="findjobs" href="/jobs/" class="bg-white">
      <ph-magnifying-glass :size="24" color="#767F8C" />
      Browse
    </ion-tab-button>
    <ion-tab-button tab="post" class="bg-white">
      <ph-plus-circle :size="24" color="#767F8C" />
      Post Job
    </ion-tab-button>
    <ion-tab-button tab="pricing" class="bg-white">
      <ph-credit-card :size="24" color="#767F8C" />
      Pricing
    </ion-tab-button>
    <ion-tab-button tab="menu" class="bg-white">
      <ph-list :size="24" color="#767F8C" />
      Menu
    </ion-tab-button>
  </ion-tab-bar>
</template>
<script setup>
import {
  PhHouse,
  PhMagnifyingGlass,
  PhPlusCircle,
  PhCreditCard,
  PhList,
} from "@phosphor-icons/vue";
</script>
