<template>
  <ion-button href="#">
    <ion-card
      class="flex w-full gap-4 items-center shadow-none m-0 bg-transparent"
    >
      <div
        class="w-14 h-14 rounded-full bg-white inline-flex justify-center items-center"
      >
        <component :is="icon" :size="24" color="#0a65cc" />
      </div>
      <div class="flex gap-2 flex-col">
        <h2 class="my-0 text-base text-left text-gray-900 font-medium">
          {{ title }}
        </h2>
        <p class="my-0 text-sm text-left text-gray-600">{{ text }}</p>
      </div>
    </ion-card>
  </ion-button>
</template>
<script>
import {
  PhPenNib,
  PhMusicNotesSimple,
  PhMegaphone,
  PhMonitorPlay,
  PhCode,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhPenNib,
    PhMusicNotesSimple,
    PhMegaphone,
    PhMonitorPlay,
    PhCode,
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
      default: "ph-pen-nib",
    },
  },
};
</script>
