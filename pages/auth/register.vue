<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">
          <img src="/assets/svg/logo.svg" />
        </ion-title>
        <ion-buttons slot="end">
          <ion-button href="/auth/login">
            Login
            <img src="/assets/svg/exit.svg" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :scroll-y="false" class="">
      <div class="ion-content-scroll-host ion-padding px-6 py-8 bg-gray-50">
        <h3 class="mb-4 text-2xl font-semibold text-custom-green">
          Create new account
        </h3>
        <ion-card class="m-0 mb-2 p-3 shadow-none">
          <h4 class="pb-2 uppercase font-medium text-xs">
            CREATE ACCOUNT AS A
          </h4>
          <!-- <ion-toggle enable-on-off-labels="true"></ion-toggle> -->
          <mode-switcher />
        </ion-card>

        <div class="flex justify-between gap-3">
          <ion-input
            placeholder="First name"
            class="input-field border text-base rounded mb-2"
          ></ion-input>
          <ion-input
            placeholder="Last name"
            class="input-field border text-base rounded mb-2"
          ></ion-input>
        </div>
        <ion-item ref="item" class="email-input mb-2 rounded border">
          <ion-input
            type="email"
            placeholder="Email address"
            class="input-field text-base"
            @ionInput="validate"
            @ionBlur="markTouched"
          ></ion-input>
        </ion-item>

        <ion-input
          type="password"
          placeholder="Password"
          class="input-field border text-base rounded mb-2"
        ></ion-input>
        <ion-input
          type="password"
          placeholder="Confirm Password"
          class="input-field border text-base rounded mb-2"
        ></ion-input>
        <ion-item class="checkbox mt-5">
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label class="!ml-2"
            >I have read & agree with Jobpilot Privacy Policy and Terms &
            Condition</ion-label
          >
        </ion-item>
        <ion-button
          theme="primary"
          expand="block"
          class="rounded mt-5 text-base submit"
        >
          Create Account
          <img src="/assets/svg/arrow-right.svg" />
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import ModeSwitcher from "~~/components/ModeSwitcher.vue";
export default {
  components: { ModeSwitcher },
  methods: {
    validateEmail(email) {
      return email.match(
        /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    },

    validate(ev) {
      const value = ev.target.value;

      this.$refs.item.$el.classList.remove("ion-valid");
      this.$refs.item.$el.classList.remove("ion-invalid");

      if (value === "") return;

      this.validateEmail(value)
        ? this.$refs.item.$el.classList.add("ion-valid")
        : this.$refs.item.$el.classList.add("ion-invalid");
    },

    markTouched() {
      this.$refs.item.$el.classList.add("ion-touched");
    },
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
  --padding-start: 16px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  border-color: #e4e5e8;
  line-height: 1.5rem;
}
ion-item.email-input {
  /* --padding-start: 0px; */
  --min-height: auto;
  --inner-padding-end: 0px;
}
</style>
