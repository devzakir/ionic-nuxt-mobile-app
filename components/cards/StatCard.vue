<script>
import {
  PhSuitcase,
  PhBuildings,
  PhUsers,
  PhTrophy,
} from "@phosphor-icons/vue";
export default {
  components: {
    PhSuitcase,
    PhBuildings,
    PhUsers,
    PhTrophy,
  },
  props: {
    count: {
      type: String,
      default: "0",
    },
    title: {
      type: String,
      default: "title",
    },
    icon: {
      type: String,
      default: "ph-suitcase",
    },
  },
};
</script>
<template>
  <div class="state-card bg-white rounded p-4">
    <div>
      <!-- <slot name="icon"></slot> -->
      <component :is="icon" :size="32" color="#0a65cc" />
    </div>
    <div>
      <h2>{{ count }}</h2>
      <p>{{ title }}</p>
    </div>
  </div>
</template>
<style>
.state-card {
  display: flex;
  gap: 12px;
  align-items: center;
}
.state-card h2 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #18191c;
  margin-top: 0px;
  margin-bottom: 2px;
}
.state-card p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5e6670;
  margin: 0px;
}
</style>
