<template>
  <form :class="n()" @submit="handleSubmit" @reset="handleReset">
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './props'
import { useFormItems, type FormProvider } from './provide'
import { call, createNamespace } from '../utils/components'
import { find } from '@varlet/shared'
import { getParentScroller, getTop, scrollTo, toPxNum } from '../utils/elements'
import { linear } from '../utils/shared'

const { name, n } = createNamespace('form')

export default defineComponent({
  name,
  props,
  setup(props) {
    const disabled = computed(() => props.disabled)
    const readonly = computed(() => props.readonly)
    const { formItems, bindFormItems } = useFormItems()

    const formProvider: FormProvider = {
      disabled,
      readonly,
    }

    bindFormItems(formProvider)

    function scroll(formItemElement: HTMLElement) {
      // wait form-details animation end
      setTimeout(() => {
        const scroller = getParentScroller(formItemElement)
        const scrollerTop = scroller === window ? 0 : getTop(scroller as HTMLElement)
        const top = getTop(formItemElement) - scrollerTop - toPxNum(props.scrollToErrorOffsetY)

        scrollTo(scroller, {
          top,
          animation: linear,
        })
      }, 300)
    }

    async function handleSubmit(event: Event) {
      event.preventDefault()
      const valid = await validate()
      call(props.onSubmit, valid)
    }

    function handleReset(event: Event) {
      event.preventDefault()
      reset()
      call(props.onReset)
    }

    // expose
    async function validate() {
      const res = await Promise.all(formItems.map(({ validate }) => validate()))

      if (props.scrollToError) {
        const [, errorIndex] = find(res, (r) => r === false, props.scrollToError)
        const hasError = errorIndex > -1

        if (hasError) {
          const formItemElement = formItems[errorIndex].instance.proxy?.$el
          scroll(formItemElement)
        }

        return !hasError
      }

      return res.every((result) => result === true)
    }

    // expose
    function reset() {
      return formItems.forEach(({ reset }) => reset())
    }

    // expose
    function resetValidation() {
      return formItems.forEach(({ resetValidation }) => resetValidation())
    }

    return {
      n,
      handleSubmit,
      handleReset,
      validate,
      reset,
      resetValidation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
