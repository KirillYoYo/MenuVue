<template>
    <div class="menu-item" @mouseover="activeMenu = true" @mouseleave="activeMenu = false">
        {{ menuItem.name }}
        <div class="hide-wp" v-if="menuItem.items" v-bind:class="{ active: activeMenu }">
            <div
                    class="hide-wp__item menu-item"
                    @mouseover="item.items ? activeSubMenu = true : null" @mouseleave="activeSubMenu = false"
                    v-for="item in menuItem.items"
            >
                {{ item.name }}
                <div class="hide-wp hide-wp--right"
                     v-if="item.items"
                     v-bind:class="{ active: activeSubMenu }"
                >
                    <div  v-for="subItem in item.items" class="menu-item">
                        {{ subItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'menuItem',
    props: ['menuItem'],
    components: {

    },
    data: function () {
      return {
        activeMenu: false,
        activeSubMenu: false
      }
    },
  }
</script>