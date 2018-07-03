<template>
    <div @mouseover="active = true" @mouseleave="active = false">
        {{ menuItem.name }}
        <div v-if="menuItem.items" class="">
            <div v-bind:class="{ active: active }">
                <div
                    v-for="item in menuItem.items"
                >
                    {{ item.name }}
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
      return {active: false}
    },
    methods: {
      mouseOver: function(){
        this.active = !this.active;
      }
    }
  }
</script>