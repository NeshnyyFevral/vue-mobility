<template>
  <div :class="$style.root">
    <div :class="$style.sidebar">
      wwefwe
    </div>
    <div :class="$style.content">
      <div :class="$style.wrapper">
        <header :class="$style.header">
          <Header />
        </header>
        <main :class="$style.main" />
      </div>
      <footer :class="$style.footer">
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<style module lang="scss">
  .root {
    display: flex;
    gap: 30px;
    max-width: 1400px;
    padding: 10px 0;
    margin: 0 auto;
  }

  .content {
    width: 100%;
    margin-left: 20px;
  }

  .wrapper {
    min-height: calc(100vh - 40px);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
  }

</style>
