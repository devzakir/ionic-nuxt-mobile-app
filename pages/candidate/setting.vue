<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="flex flex-col">
        <div class="flex gap-6 w-full px-6 bg-white">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            class="py-3 h-12 border-b-2"
            :class="
              activeTab === index
                ? 'border-[#0A65CC] text-[#0A65CC]'
                : 'border-transparent text-gray-900'
            "
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>
        <div class="">
          <div v-if="activeTab === 0">
            <PersonalTab />
          </div>
          <div v-if="activeTab === 1">
            <ProfileTab />
          </div>
          <div v-if="activeTab === 2">
            <SocialTab />
          </div>
          <div v-if="activeTab === 3">
            <AccountTab />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script>
import ProfileTab from "../../components/candidate/setting/ProfileTab.vue";
import PersonalTab from "../../components/candidate/setting/PersonalTab.vue";
import SocialTab from "../../components/candidate/setting/SocialTab.vue";
import AccountTab from "../../components/candidate/setting/AccountTab.vue";
export default {
  components: {
    PersonalTab,
    ProfileTab,
    SocialTab,
    AccountTab,
  },
  data() {
    return {
      activeTab: 0,
      tabs: ["Personal", "Profile", "Social", "Account Setting"],
    };
  },
};
</script>

<style>
ion-input.input-field {
  --background: white;
  --color: black;
  --placeholder-color: #767f8c;
  --placeholder-opacity: 0.8;
  --padding-end: 16px;
  --padding-start: 16px !important;
  --padding-top: 8px;
  --padding-bottom: 8px;
  border-color: #e4e5e8;
  line-height: 1.5rem;
}

ion-input.input-field.link {
  --padding-start: 48px !important;
}

ion-item.email-input {
  /* --padding-start: 0px; */
  --min-height: auto;
  --inner-padding-end: 0px;
}

ion-select.select-box {
  --background: white !important;
  --color: black;
  --placeholder-color: #767f8c;
  --placeholder-opacity: 0.8;
  --padding-end: 16px;
  --padding-start: 16px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  background-color: white;
  border: 1px solid #e4e5e8;
  border-radius: 6px;
  line-height: 1.5rem;
  display: flex;
  max-width: 100%;
  width: 100%;
}

ion-select.select-box.rounded-0 {
  border-radius: 0px;
}

ion-item {
  position: relative !important;
  z-index: -1 !important;
}
</style>
