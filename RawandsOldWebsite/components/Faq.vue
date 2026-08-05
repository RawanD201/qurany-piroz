<script setup>
import { heading, list } from '~/assets/contents/faqs.json';
import { inject, ref, reactive, onMounted, watch, nextTick } from 'vue';

// Inject locale
const __ = inject('locale');

// Make faqs reactive
const faqs = reactive(
  list.map(faq => ({
    ...faq,
    isOpen: false, // Changed name for clarity
    contentHeight: 0,
  }))
);

// Refs for content divs (one per FAQ)
const contentRefs = ref([]);

// Measure height for a specific FAQ
const setContentHeight = (index) => {
  const contentDiv = contentRefs.value[index];
  if (contentDiv) {
    contentDiv.style.height = 'auto';
    nextTick(() => {
      faqs[index].contentHeight = contentDiv.scrollHeight;
      contentDiv.style.height = faqs[index].isOpen ? `${faqs[index].contentHeight}px` : '0px';
    });
  }
};

// Toggle accordion item
const toggleFaq = (index) => {
  faqs[index].isOpen = !faqs[index].isOpen;
  nextTick(() => {
    setContentHeight(index);
  });
};

onMounted(() => {
  faqs.forEach((_, index) => setContentHeight(index));

  // Add resize event listener to recalculate heights when window size changes
  window.addEventListener('resize', () => {
    faqs.forEach((_, index) => setContentHeight(index));
  });
});

watch(
  () => faqs.map(faq => faq.content),
  () => {
    faqs.forEach((_, index) => setContentHeight(index));
  },
  { deep: true }
);
</script>

<template>
  <section
    id="faq"
    class="flex flex-col items-center w-full gap-4 px-4 py-8 lg:gap-8 lg:py-16 lg:px-0"
  >
    <div
      class="flex flex-col gap-16"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    >
      <div class="flex flex-col items-center justify-center w-full gap-3">
        <h1 class="w-full py-4 text-2xl text-center lg:text-4xl">
          {{ __.translate(heading) }}
        </h1>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full max-w-3xl gap-4">
      <div
        v-for="(faq, index) in faqs"
        :key="faq.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 600,
            delay: 100 + (index * 50),
            ease: 'easeOut'
          }
        }"
        class="w-full overflow-hidden transition-all duration-500 border-b"
        :class="{ 'shadow-glow': faq.isOpen, 'hover:bg-card/50': !faq.isOpen }"
      >
        <div
          class="flex items-center justify-between w-full p-4 cursor-pointer"
          @click="toggleFaq(index)"
        >
          <h3 class="font-medium select-none">
            {{ __.translate(faq.title) }}
          </h3>
          <div
            class="flex items-center justify-center w-8 h-8 transition-all duration-500 ease-out bg-opacity-0 rounded-full"
            :class="{
              'rotate-180 bg-primary/30': faq.isOpen,
              'hover:bg-card/80': !faq.isOpen
            }"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-500"
              :class="{ 'stroke-primary': faq.isOpen }"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          ref="contentRefs"
          class="overflow-hidden transition-all duration-700 ease-in-out"
          :style="{
            height: faq.isOpen ? `${faq.contentHeight}px` : '0px',
            opacity: faq.isOpen ? 1 : 0
          }"
        >
          <div
            class="p-6 text-xs transition-all duration-700 lg:text-base"
            :class="{ 'content-animation': faq.isOpen }"
          >
            {{ __.translate(faq.content) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-glow {
  box-shadow: 0 8px 25px rgba(var(--primary-rgb), 0.15);
  border-color: rgba(var(--primary-rgb), 0.3);
  background-color: rgba(var(--primary-rgb), 0.03);
  transform: translateY(-2px);
}

.content-animation {
  animation: contentReveal 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes contentReveal {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }

  30% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


/* Define primary RGB color for the glow effect */
:root {
  --primary-rgb: 59, 130, 246;
  /* Change this to match your primary color */
}
</style>
