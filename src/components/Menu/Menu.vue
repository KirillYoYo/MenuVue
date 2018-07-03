<template>
    <div id="main-menu">
        <MenuItem
            v-for="menuItem in menu"
            v-bind:key="menuItem.id"
            v-bind:menuItem="menuItem"
        />
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