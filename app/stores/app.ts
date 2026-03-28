import { defineStore } from 'pinia'

export const useAppStore = defineStore(
  'app',
  () => {
    const theme = ref<App.Themes>('dark')
    const typeface = ref<App.Typeface>('saans')
    const aussieMode = ref(false)

    const getTheme = computed(() => theme.value)
    const getTypeface = computed(() => typeface.value)
    const getAussieMode = computed(() => aussieMode.value)

    function setTheme(value: App.Themes) {
      theme.value = value
    }

    function setTypeface(value: App.Typeface) {
      typeface.value = value
    }

    function setAussieMode(value: boolean) {
      aussieMode.value = value
    }

    return {
      theme,
      typeface,
      aussieMode,
      getTheme,
      getTypeface,
      getAussieMode,
      setTheme,
      setTypeface,
      setAussieMode,
    }
  },
  {
    persist: {
      pick: ['theme', 'typeface'],
      storage: piniaPluginPersistedstate.cookies(),
    },
  },
)
