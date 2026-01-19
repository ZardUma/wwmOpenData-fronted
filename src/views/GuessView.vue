<script setup>
  import { ref } from 'vue'
  import { post } from '@/api/http'

  // 使用者輸入
  const question = ref('')

  // 狀態
  const loading = ref(false)
  const error = ref('')
  const result = ref(null)

  // 呼叫後端 API
  const searchGuess = async () => {
    error.value = ''
    result.value = null

    // if (!question.value.trim()) {
    //   error.value = '請輸入問題'
    //   return
    // }

    loading.value = true
    try {
      // 呼叫 POST /api/Guess/Search
      const res = await post('/api/Guess/Search', {
        question: question.value
      })

      /**
       * 如果你 http.js 尚未幫你拆 JsonResponse
       * 這裡會拿到：
       * { success, code, message, data }
       */
      if (res.success) {
        result.value = Array.isArray(res.data) ? res.data : [res.data]
      } else {
        error.value = res.message || '搜尋失敗'
      }
    } catch (e) {
      console.error(e)
      error.value = e.message || '系統錯誤'
    } finally {
      loading.value = false
    }
  }
</script>

<template>
  <div style="max-width: 600px; margin: 0 auto">
    <h2>射覆查詢</h2>

    <!-- 輸入 -->
    <div style="margin-bottom: 12px">
      <input v-model="question" type="text" placeholder="請輸入 Question" @keyup.enter="searchGuess"
        style="width: 100%; padding: 8px" />
    </div>

    <!-- 按鈕 -->
    <div style="margin-bottom: 12px">
      <button @click="searchGuess" :disabled="loading">
        {{ loading ? '搜尋中...' : '搜尋' }}
      </button>
    </div>

    <!-- 錯誤訊息 -->
    <div v-if="error" style="color: red; margin-bottom: 12px">
      {{ error }}
    </div>

    <!-- 結果 -->
    <div v-if="result && result.length">
      <h3>搜尋結果</h3>
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%">
        <thead>
          <tr>
            <th>Quest</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in result" :key="index">
            <td>{{ item.question }}</td>
            <td>{{ item.answer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>