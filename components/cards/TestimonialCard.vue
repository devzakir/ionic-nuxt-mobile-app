<template>
  <ion-card
    class="shadow-[0px_2px_18px_rgba(24,25,28,0.03)] p-5 m-0 border border-gray-100 rounded-lg"
  >
    <ion-card-header class="p-0 mb-6">
      <div class="flex gap-[2px] items-center mb-4">
        <ph-star
          v-for="item in star"
          :key="item"
          :size="28"
          color="#FFAA00"
          weight="fill"
        />
      </div>
      <ion-card-title class="text-[#464D61] text-base mt-0">{{
        comment
      }}</ion-card-title>
    </ion-card-header>
    <ion-card-content class="p-0">
      <div class="flex justify-between items-center">
        <div class="flex gap-3 items-center">
          <slot name="avatar"></slot>
          <div class="w-full">
            <h2 class="flex text-base font-medium text-gray-900">{{ name }}</h2>
            <p class="text-gray-500 flex gap-1 items-center">
              {{ position }}
            </p>
          </div>
        </div>
        <span href="#" class="cursor-pointer transform rotate-[180deg]">
          <ph-quotes :size="36" weight="fill" />
        </span>
      </div>
    </ion-card-content>
  </ion-card>
</template>
<script>
import { PhStar, PhQuotes } from "@phosphor-icons/vue";
export default {
  components: {
    PhStar,
    PhQuotes,
  },
  props: {
    comment: {
      type: String,
      default: "job title",
    },
    name: {
      type: String,
      default: "job type",
    },
    position: {
      type: String,
      default: "salary range",
    },
    star: {
      type: Number,
      default: 5,
    },
  },
};
</script>
