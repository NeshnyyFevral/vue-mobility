<template>
  <h1>Home</h1>
  <div :class="$style.routes">
    <router-link to="/preview">
      Preview
    </router-link>
    <router-link to="/crm">
      CRM
    </router-link>
  </div>
</template>

<style module lang="scss">
  .routes {
    display: flex;
    gap: 10px;
  }
</style>
