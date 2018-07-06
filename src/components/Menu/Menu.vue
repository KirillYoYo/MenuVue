<template>
    <div id="main-menu">
        <MenuItem
            v-if="menu"
            v-for="menuItem in menu"
            v-bind:key="menuItem.id"
            v-bind:menuItem="menuItem"
        />
        <div class="nothing-menu" v-if="!menu || menu.length === 0">
            Nothing menu...
        </div>
    </div>
</template>

<script>
  import MenuItem from '@/components/Menu/Menu-item'
  export default {
    name: 'menu',
    props: ['menu'],
    components: {
      MenuItem
    }
  }
</script>

<style lang="scss" src="../../styles/menu.scss"></style>