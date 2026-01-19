<script setup>
import { onMounted, ref } from 'vue';
import { get } from '@/api/http';

const data = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    data.value = await get('/api/OpenData'); // 假設你後端有這個
  } catch (e) {
    error.value = e.message;
  }
});
</script>

<template>
  <div>
    <h1>WWM Open Data</h1>

    <div v-if="error" style="color:red">
      {{ error }}
    </div>

    <pre v-if="data">
      {{ data }}
    </pre>
  </div>
</template>