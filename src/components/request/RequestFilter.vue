<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать имя" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option value="active">Работает</option>
        <option value="cancelled">Уволен</option>
        <option value="done">На испытательном сроке</option>
        <option value="pending">В отпуске</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
  </div>
</template>

<script>
import {ref, watch, computed} from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style scoped>

</style>
