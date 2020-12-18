<template>
  <div class="home">
    <the-home/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHome from '@/components/TheHome.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TheHome
  }
}
</script>
