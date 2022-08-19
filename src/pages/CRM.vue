<template>
  <div :class="$style.root">
    <div :class="$style.sidebar">
      <Sidebar
        :open="openSidebar"
        @switchSidebar="switchSidebar"
      />
    </div>
    <div
      :class="[
        $style.content,
        openSidebar && $style.openSidebar
      ]"
      @transitionend="scroll"
    >
      <div
        ref="wrapper"
        :class="[
          $style.wrapper,
          active && $style.active
        ]"
      >
        <header :class="$style.header">
          <Header
            :width="headerWidth + 'px'"
            :active="active"
            :language="LanguageVariant.FRENCH"
          />
        </header>
        <main :class="$style.main">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur architecto assumenda optio ipsam consectetur, om
          nis animi ab quibusdam ea minus harum autem distinctio accus
          amus molestias doloremque tempore repudiandae tenetur nostrum.
          Atque et adipisci ratione facilis nobis, repudiandae s
          aepe enim minima dignissimos nihil iusto temporibus nemo a
          rchitecto quas esse. Doloremque necessitatibus, itaque animi a
          sumenda labore nulla ducimus commodi est aliquam blan
          ditiis.
        </main>
      </div>
      <footer :class="$style.footer">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';

import Footer from '@/components/Footer.vue';
import Header, { LanguageVariant } from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

const active = ref(false);
const openSidebar = ref(true);
const wrapper = ref(null);
const headerWidth = ref(0);

const scroll = () => {
  headerWidth.value = wrapper.value?.clientWidth || 0;
  active.value = !!window.scrollY;
};

const switchSidebar = () => {
  openSidebar.value = !openSidebar.value;
};

window.addEventListener('scroll', scroll);
onUnmounted(() => { window.removeEventListener('scroll', scroll); });
</script>

<style module lang="scss">
  .root {
    display: flex;
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .content {
    margin-left: 20px;
    transition: margin 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .openSidebar {
    margin-left: 180px;
  }

  .wrapper {
    min-height: calc(100vh - 40px);
  }

  .header {
    position: relative;
    width: 100%;
  }

  .main {
    height: 1000px;
  }

  .active .main {
    margin-top: 110px;
  }
</style>
