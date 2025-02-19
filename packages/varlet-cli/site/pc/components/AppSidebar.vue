<template>
  <div class="varlet-site-sidebar var-elevation--3">
    <var-cell
      class="varlet-site-sidebar__item"
      :id="item.doc"
      :class="{
        'varlet-site-sidebar__item--active': item.doc === menuName,
        'varlet-site-sidebar__link': item.type !== menuTypes.TITLE,
        'varlet-site-sidebar__title': item.type === menuTypes.TITLE,
      }"
      :key="index"
      v-for="(item, index) in menu"
      v-ripple="{
        disabled: item.type === menuTypes.TITLE,
      }"
      @click="changeRoute(item)"
    >
      <span class="varlet-site-sidebar__indicator"></span>
      <span class="varlet-site-sidebar__item--title" v-if="item.type === menuTypes.TITLE">{{ item.text[language]
        }}</span>
      <span v-else>{{ item.text[language] }}</span>
    </var-cell>
  </div>
</template>

<script lang="ts">
import { MenuTypes, type Menu } from '../../utils'
import { reactive, defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'AppSidebar',
  props: {
    menu: {
      type: Array as PropType<Menu[]>
    },
    menuName: {
      type: String
    },
    language: {
      type: String,
      default: ''
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const menuTypes = reactive(MenuTypes)

    const changeRoute = (item: Menu) => {
      if (item.type === MenuTypes.TITLE || props.menuName === item.doc) {
        return
      }

      emit('change', item)
    }

    return {
      menuTypes,
      changeRoute
    }
  }
})
</script>

<style lang="less">
@keyframes indicator-fade-in {
  from {
    transform: scaleY(0);
    opacity: .3;
  }

  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

.varlet-site-sidebar {
  padding: 0 0 15px;
  position: fixed;
  width: 246px;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 6;
  overflow-y: scroll;
  box-shadow: 0 8px 12px var(--site-config-color-shadow);
  background: var(--site-config-color-bar);

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    margin: 0 !important;
    user-select: none !important;
    padding: 10px 28px !important;

    &--title {
      font-size: 16px !important;
      font-weight: 600 !important;
      color: var(--site-config-color-text) !important;
      line-height: 28px !important;
      padding: 8px 0 8px !important;
    }

    &--active {
      position: relative;
      background: var(--site-config-color-side-bar-active-background);

      span {
        color: var(--site-config-color-side-bar);
      }

      &::before {
        display: block;
        content: '';
        background: var(--site-config-color-side-bar);
        width: 4px;
        height: 40px;
        position: absolute;
        left: 0;
        animation: indicator-fade-in .25s;
      }
    }
  }

  &__link {
    cursor: pointer !important;
    font-size: 14px !important;
    color: var(--site-config-color-text) !important;
    transition: color 0.2s !important;

    &:hover {
      color: var(--site-config-color-side-bar) !important;
    }
  }

  &__title {
    margin-top: 10px !important;
  }
}
</style>
