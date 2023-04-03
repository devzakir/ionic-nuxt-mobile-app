<script>
import { PhArrowRight } from "@phosphor-icons/vue";
export default {
  components: {
    PhArrowRight,
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
  },
};
</script>
<template>
  <ion-card
    class="flex w-full justify-between items-center m-0 shadow-none bg-transparent"
  >
    <div>
      <h2
        class="text-base font-semibold capitalize text-left text-gray-900 mt-0 mb-1"
      >
        {{ title }}
      </h2>
      <p class="text-gray-700 capitalize text-left text-sm my-0">{{ text }}</p>
    </div>
    <div>
      <ph-arrow-right :size="24" color="#ADB2BA" />
    </div>
  </ion-card>
</template>
