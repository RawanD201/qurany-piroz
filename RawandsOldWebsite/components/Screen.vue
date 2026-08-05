  <script setup>
  import { inject } from 'vue';
  import iPhone15ProMockup from '~/components/iPhone15ProMockup.vue';

  const __ = inject('locale');
</script>

  <template>
    <div
      v-motion
      :initial="{ paddingTop: '5rem' }"
      :visible="{
        paddingTop: '0rem',
        transition: {
          duration: 1000,
          ease: 'easeInOut'
        }
      }"
      :delay="300"
      class="grid items-center justify-center w-full grid-cols-2 gap-4 p-4 mt-20 justify-items-center lg:gap-4 lg:flex lg:flex-row center"
    >

      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            ease: 'easeOut'
          }
        }"
        src="/images/6.png"
        class="w-full max-h-fit lg:pt-24"
      />
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            delay: 150,
            ease: 'easeOut'
          }
        }"
        src="/images/13.png"
        class="w-full max-h-fit lg:pt-12"
      />
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            delay: 300,
            ease: 'easeOut'
          }
        }"
        src="/images/8.png"
        class="w-full max-h-fit"
      />
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            delay: 450,
            ease: 'easeOut'
          }
        }"
        src="/images/12.png"
        class="w-full max-h-fit lg:pt-12"
      />
      <iPhone15ProMockup
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            delay: 600,
            ease: 'easeOut'
          }
        }"
        src="/images/11.png"
        class="w-full max-h-fit lg:pt-24"
      />
    </div>

    <div>
      <div class="flex flex-col items-center justify-center gap-4 lg:gap-8">
        <div class="flex flex-col items-center justify-center gap-2 py-4 lg:flex-row">
          <iPhone15ProMockup
            v-motion
            :initial="{ opacity: 0, x: 60 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 800,
                ease: 'easeOutQuint'
              }
            }"
            src="/images/10.png"
            :height="500"
            class="w-11/12 lg:w-1/2 max-h-fit lg:pt-24"
          />
          <span
            v-motion
            :initial="{ opacity: 0, x: -60 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 800,
                ease: 'easeOut'
              }
            }"
            class="w-full p-4 lg:w-1/3"
          >
            بەشێک بە ناوی 'پۆلنامەی قورئان' بۆ پۆلێنکارییی ئایەتەکان؛ ئایەتەکان بۆ چەند پۆلێک پۆلێن کراون تاکو بەئاسانی
            و بەبێ شارەزابوون لە زمانی عەرەبی بدۆزرێنەوە.
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 p-4">
          <iPhone15ProMockup
            v-motion
            :initial="{ opacity: 0, y: 80 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1000,
                ease: 'easeOut'
              }
            }"
            src="/images/4.png"
            :height="500"
            class="w-full max-h-fit lg:pt-24"
          />
          <iPhone15ProMockup
            v-motion
            :initial="{ opacity: 0, y: 80 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2000,
                ease: 'easeOut'
              }
            }"
            src="/images/5.png"
            :height="500"
            class="w-full max-h-fit lg:pt-24"
          />

        </div>

      </div>

    </div>
  </template>
