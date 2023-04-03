<template>
  <ion-card
    class="flex w-full gap-3 flex-col items-center bg-transparent shadow-none m-0"
  >
    <ion-card-header
      class="w-14 h-14 rounded-full bg-white inline-flex justify-center items-center"
    >
      <component :is="icon" :size="24" color="#0A65CC" />
    </ion-card-header>
    <ion-card-content class="flex gap-1.5 flex-col items-center p-0">
      <h2 class="mt-0 mb-0 text-base text-gray-900 font-medium">{{ title }}</h2>
      <p class="mt-0 mb-0 text-sm text-gray-600 text-center">{{ text }}</p>
    </ion-card-content>
  </ion-card>
</template>
<script>
import {
  PhSealCheck,
  PhCloudArrowUp,
  PhUserPlus,
  PhBagSimple,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhSealCheck,
    PhCloudArrowUp,
    PhUserPlus,
    PhBagSimple,
  },
  props: {
    text: {
      type: String,
      default: "0",
    },
    title: {
      type: String,
      default: "title",
    },
    icon: {
      type: String,
      default: "ph-user-plus",
    },
  },
};
</script>
