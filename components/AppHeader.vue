<script setup>
import { inject, ref, onMounted, watch } from 'vue';
import { navigations } from '~/assets/contents/main.json';
import { useColorMode } from '@vueuse/core'; // We'll use VueUse for better theme handling

const navigation = inject('navigation');
const __ = inject('locale');

// Use VueUse's color mode composable for better theme management
const colorMode = useColorMode({
  attribute: 'class',
  modes: {
    light: 'light',
    dark: 'dark'
  },
  storage: localStorage,
  storageKey: 'entensy-theme-preference',
  emitAuto: true,
});

// Function to toggle theme with proper system detection
function toggleTheme() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
}

// Initialize based on user preference or system preference
onMounted(() => {
  if (!localStorage.getItem('entensy-theme-preference')) {
    colorMode.value = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
});
</script>

<template>
  <div
    v-motion
    :initial="{ y: -50, opacity: 0.15 }"
    :enter="{ y: 0, opacity: 1, transition: { delay: 25, duration: 500 } }"
    class="ease bg-transparent translate-z-0 sticky top-0 z-50 flex w-full transform items-center justify-between transition-[height,transform,background-color,color] duration-300 will-change-[height,transform] p-4 lg:p-2"
  >
    <NuxtLink to="/">
      <span class="text-xl font-semibold">{{ __.translate(navigations.title) }}</span>
    </NuxtLink>


    <!-- Theme toggle and contact button container -->
    <div class="flex items-center gap-1.5">

      <!-- Theme Toggle Button -->
      <button
        @click="toggleTheme"
        class="ease translate-z-0 transform rounded-xl p-3 text-sm capitalize transition-all duration-300 will-change-[height,transform]"
        :class="[
          colorMode === 'dark'
            ? 'text-primary bg-white shadow-[inset_0_1px_1px_0_hsla(0,0%,100%,0.15)]'
            : 'text-white bg-primary shadow-[inset_0_1px_1px_0_hsla(0,0%,0%,0.05)]'
        ]"
        aria-label="Toggle theme"
      >
        <Transition
          name="theme-toggle"
          mode="out-in"
        >
          <svg
            v-if="colorMode === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-all duration-300"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
            ></circle>
            <line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
            ></line>
            <line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
            ></line>
            <line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
            ></line>
            <line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
            ></line>
            <line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
            ></line>
            <line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
            ></line>
            <line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
            ></line>
            <line
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
            ></line>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-all duration-300"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </Transition>
      </button>

    </div>

  </div>
</template>
