<script setup>
import VarSwipe from '..'
import VarSwipeItem from '../../swipe-item'
import Snackbar from '../../snackbar'
import { AppType, watchLang } from '@varlet/cli/client'
import { use, pack } from './locale'

watchLang(use)
</script>

<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-swipe class="swipe">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.forbidLoop }}</app-type>
  <var-swipe class="swipe" :loop="false">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.autoplay }}</app-type>
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.vertical }}</app-type>
  <var-swipe class="swipe" vertical>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.navigation }}</app-type>
  <var-swipe class="swipe" navigation>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <var-swipe class="swipe" style="margin-top: 12px" navigation="hover">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.handleChange }}</app-type>
  <var-swipe class="swipe" @change="(index) => Snackbar(String(index))">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
    </var-swipe-item>
  </var-swipe>

  <app-type>{{ pack.customIndicator }}</app-type>
  <var-swipe class="swipe-example">
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" />
    </var-swipe-item>
    <var-swipe-item>
      <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" />
    </var-swipe-item>
    <template #indicator="{ index, length, to }">
      <div class="swipe-indicators">
        <div
          class="swipe-indicator"
          :key="l"
          v-for="(l, idx) in length"
          :class="{ 'swipe-active-indicator': idx === index }"
          @click="to(idx)"
        ></div>
      </div>
    </template>
  </var-swipe>

  <div class="space"></div>
</template>

<style scoped lang="less">
.swipe {
  height: 160px;
}

.swipe-example {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.swipe-indicators {
  position: absolute;
  display: flex;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.swipe-indicator {
  width: 8px;
  height: 8px;
  background: #fff;
  opacity: 0.3;
  margin: 0 4px;
  transition: opacity 0.3s;
}

.swipe-active-indicator {
  opacity: 1;
}

.space {
  height: 20px;
}
</style>
