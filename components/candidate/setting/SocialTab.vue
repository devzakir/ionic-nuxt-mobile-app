<template>
  <div class="p-6">
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item v-for="(item, index) in socialMedias" :key="index">
        <div class="w-full">
          <div class="flex justify-between mb-2 body-sm-500">
            <p>Link {{ index + 1 }}</p>
            <ion-button class="anchor-button" @click="removeItem(index)">
              <span class="text-[#E05151] body-sm-500">Remove</span>
            </ion-button>
          </div>
          <div class="bg-white relative">
            <ion-select
              interface="action-sheet"
              placeholder="Social Media"
              class="select-box rounded-0"
            >
              <ion-select-option value="facebook">
                <div>
                  <ph-facebook-logo :size="24" color="#0a65cc" /> Facebook
                </div>
              </ion-select-option>
              <ion-select-option value="twitter">
                <div>
                  <ph-twitter-logo :size="24" color="#0a65cc" /> Twitter
                </div>
              </ion-select-option>
            </ion-select>
            <ion-input
              id="search"
              type="text"
              placeholder="Links/url"
              class="input-field border text-base rounded-0"
            />
          </div>
        </div>
      </ion-item>
      <ion-item>
        <ion-button class="anchor-button" @click="itemAdd">
          <div class="inline-flex gap-2 items-center text-[#0a65cc]">
            <ph-plus-circle :size="24" color="#0a65cc" />
            <span>Add New Social Link</span>
          </div>
        </ion-button>
      </ion-item>
      <ion-item>
        <div class="inline-flex w-auto">
          <ion-button class="primary-button">Save Changes</ion-button>
        </div>
      </ion-item>
    </ion-list>
  </div>
</template>
<script>
import { PhFacebookLogo, PhPlusCircle } from "@phosphor-icons/vue";
export default {
  components: {
    PhFacebookLogo,
    PhPlusCircle,
  },
  data() {
    return {
      socialMedias: ["", "", ""],
    };
  },
  methods: {
    itemAdd() {
      this.socialMedias.push("");
    },
    removeItem(index) {
      this.socialMedias.splice(index, 1);
    },
  },
};
</script>
