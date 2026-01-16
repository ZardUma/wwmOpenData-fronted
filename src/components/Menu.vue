<template>
  <div class="menu">
    <div
      class="menu-group"
      v-for="group in menuData"
      :key="group.title"
    >
      <!-- 大分類 -->
      <div class="menu-title">
        {{ group.title }}
      </div>

      <!-- 子項目 -->
      <ul class="menu-items">
        <li
          v-for="item in group.items"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const menuData = [
  {
    title: 'A',
    items: ['Aitem1', 'Aitem2']
  },
  {
    title: 'B',
    items: ['Bitem1', 'Bitem2']
  }
]
</script>

<style scoped>
.menu {
  width: 200px;
  font-family: Arial, sans-serif;
}

.menu-group {
  margin-bottom: 12px;
}

.menu-title {
  font-weight: bold;
  padding: 8px;
  background-color: #f2f2f2;
}

.menu-items {
  list-style: none;
  padding-left: 16px;
  margin: 0;
}

.menu-items li {
  padding: 4px 0;
  cursor: pointer;
}

.menu-items li:hover {
  color: #409eff;
}
</style>
