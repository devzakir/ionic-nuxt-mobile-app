<template>
  <ion-card
    class="cta-card flex justify-start items-center shadow-[0px_2px_18px_rgba(24,25,28,0.03)] p-6 m-0 border border-gray-100 rounded-[0px] h-[272px]"
    :class="candidate ? 'candidate' : 'employer'"
  >
    <ion-card-content class="p-0">
      <ion-card-title
        class="text-[#464D61] text-xl mt-0 mb-1.5 font-semibold"
        :class="candidate ? 'text-gray-900' : 'text-white'"
      >
        {{ title }}
      </ion-card-title>
      <div class="mb-4 mt-0 max-w-[65%]">
        <ion-text :class="candidate ? 'text-gray-700' : 'text-white/80'"
          >{{ text }}
        </ion-text>
      </div>

      <ion-button>
        Register Now
        <ph-arrow-right :size="24" color="#fff" />
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>
<script>
import { PhArrowRight } from "@phosphor-icons/vue";
export default {
  components: {
    PhArrowRight,
  },
  props: {
    title: {
      type: String,
      default: "cta title",
    },
    text: {
      type: String,
      default: "cta text",
    },
    candidate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.cta-card.candidate {
  background: url("/assets/images/become-candidate.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.cta-card.employer {
  background: url("/assets/images/become-employer.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
</style>
