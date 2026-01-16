<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-layout">
    <!-- 固定區塊（之後可放 Header / Sidebar） -->
    <header class="app-header">
      <h1>My App</h1>
    </header>

    <!-- 動態頁面區 -->
    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 12px 16px;
  background-color: #333;
  color: #fff;
}

.app-main {
  flex: 1;
  padding: 16px;
}
</style>
