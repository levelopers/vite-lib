<template>
  <el-button v-bind="$attrs">
    aaa
  </el-button>
</template>

<script lang="ts">
// using defineComponent for inferring types
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'sf-button',
  components: {
    ElButton
  }
})
</script>