<template>
  <div class="p-6">
    <h3 class="text-lg font-semibold mt-0 mb-4">Contact Information</h3>
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-1.5">Title/Headline</label>
          <ion-input
            placeholder="First name"
            class="input-field border text-base rounded"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="block body-sm-500 mb-1.5">Phone</label>
          <div class="bg-white relative">
            <ion-select
              interface="action-sheet"
              placeholder="+880"
              class="select-box rounded-0"
            >
              <ion-select-option value="facebook">
                <div>+890</div>
              </ion-select-option>
              <ion-select-option value="twitter">
                <div>+880</div>
              </ion-select-option>
            </ion-select>
            <ion-input
              id="search"
              type="text"
              placeholder="Phone number..."
              class="input-field border text-base rounded-0"
            />
          </div>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="block body-sm-500 mb-1.5">Email</label>
          <ion-input
            type="email"
            placeholder="Email address"
            class="input-field text-base"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div class="inline-flex w-auto">
          <ion-button class="primary-button">Save Changes</ion-button>
        </div>
      </ion-item>
    </ion-list>
    <h3 class="text-lg font-semibold mt-0 mb-4">Change Password</h3>
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-1.5">Current Password</label>
          <ion-input
            type="password"
            placeholder="Password"
            class="input-field border text-base rounded"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-1.5">New Password</label>
          <ion-input
            type="password"
            placeholder="Password"
            class="input-field border text-base rounded"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div class="w-full">
          <label class="body-sm-400 block mb-1.5">Confirm Password</label>
          <ion-input
            type="password"
            placeholder="Password"
            class="input-field border text-base rounded"
          ></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div class="inline-flex w-auto">
          <ion-button class="primary-button">Save Changes</ion-button>
        </div>
      </ion-item>
    </ion-list>
    <h3 class="text-lg font-semibold mt-0 mb-4">Delete Company</h3>
    <ion-list class="card-list flex flex-col gap-4 bg-transparent">
      <ion-item>
        <div class="w-full body-sm-400">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </div>
      </ion-item>
      <ion-item>
        <div class="inline-flex w-auto">
          <ion-button class="anchor-button">
            <div class="flex gap-2 items-center">
              <ph-x-circle :size="24" color="#E05151" />
              <span class="text-[#E05151]">Close Company</span>
            </div>
          </ion-button>
        </div>
      </ion-item>
    </ion-list>
  </div>
</template>
<script>
import { PhXCircle } from "@phosphor-icons/vue";
export default {
  components: {
    PhXCircle,
  },
};
</script>
