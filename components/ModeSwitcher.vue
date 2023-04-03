<template>
  <div
    class="switcher-container tw-px-0 tw-w-full tw-border-2 tw-border-red-600 tw-flex"
  >
    <input
      id="switcher-toggle-on"
      class="switcher-toggle switcher-toggle-left tw-w-full"
      name="role"
      value="candidate"
      type="radio"
      checked=""
    />
    <label
      id="web-btn"
      for="switcher-toggle-on"
      class="switcher-button tw-w-full tw-rounded-tl-md tw-rounded-bl-md"
    >
      <span
        ><svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M12.5 15C14.5711 15 16.25 13.3211 16.25 11.25C16.25 9.17893 14.5711 7.5 12.5 7.5C10.4289 7.5 8.75 9.17893 8.75 11.25C8.75 13.3211 10.4289 15 12.5 15Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M6.4812 18.6913C7.04615 17.5806 7.90744 16.6478 8.96973 15.9963C10.032 15.3448 11.2539 15 12.5 15C13.7462 15 14.968 15.3448 16.0303 15.9963C17.0926 16.6478 17.9539 17.5806 18.5189 18.6913"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span>Candidate </span>
    </label>
    <input
      id="switcher-toggle-off"
      class="switcher-toggle switcher-toggle-right tw-w-full"
      name="role"
      value="company"
      type="radio"
    />
    <label
      id="wp-btn"
      for="switcher-toggle-off"
      class="switcher-button tw-w-full tw-rounded-tr-md tw-rounded-br-md"
    >
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 20.2484H22.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.4995 20.2484V3.74841C13.4995 3.5495 13.4205 3.35874 13.2798 3.21808C13.1392 3.07743 12.9484 2.99841 12.7495 2.99841H3.74951C3.5506 2.99841 3.35983 3.07743 3.21918 3.21808C3.07853 3.35874 2.99951 3.5495 2.99951 3.74841V20.2484"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9995 20.2484V9.74841C20.9995 9.5495 20.9205 9.35874 20.7798 9.21808C20.6392 9.07743 20.4484 8.99841 20.2495 8.99841H13.4995"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99951 6.74841H8.99951"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.49951 12.7484H10.4995"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.99951 16.4984H8.99951"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4995 16.4984H17.9995"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.4995 12.7484H17.9995"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span>Employer </span>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* switch mode register page */

.switcher-container {
  max-width: 1140px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
@media (max-width: 525px) {
  .switcher-container {
    flex-wrap: wrap;
  }
}

.switcher-button {
  display: inline-flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;
  position: relative;
  text-align: center;
  transition: background 600ms ease, color 600ms ease;
}

input[type="radio"].switcher-toggle {
  display: none;
}

input[type="radio"].switcher-toggle + label {
  cursor: pointer;
  min-width: 160px;
  position: relative;
  z-index: 999;
}

input[type="radio"].switcher-toggle + label:hover {
  background: none;
  color: #1a1a1a;
}

input[type="radio"].switcher-toggle + label:after {
  background: #042852;
  box-shadow: 0px 3px 16px rgba(24, 25, 28, 0.04);
  border-radius: 5px;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
  z-index: 99;
}

input[type="radio"].switcher-toggle.switcher-toggle-left + label {
  border-right: 0;
}

input[type="radio"].switcher-toggle.switcher-toggle-left + label:after {
  left: 100%;
}

input[type="radio"].switcher-toggle.switcher-toggle-right + label:after {
  left: -100%;
  display: none;
}

input[type="radio"].switcher-toggle:checked + label {
  cursor: default;
  transition: color 200ms;
  color: white;
  position: relative;
  z-index: 999;
}
input[type="radio"].switcher-toggle:checked + label span {
  color: white;
  position: relative;
  z-index: 999;
}

input[type="radio"].switcher-toggle:checked + label:after {
  left: 0;
}
</style>
