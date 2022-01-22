<template>
  <img alt="Vue logo" src="./assets/logo.png">
	<counter-vuex></counter-vuex>
	<button @click="incrementar">Incrementar +1</button>
	<button @click="incrementarBy">Incrementar +5</button>
	
</template>

<script>
import CounterVuex from '@/components/counterVuex.vue'


export default {
  name: 'App',
  components: {
		CounterVuex
  },
	methods:{
		incrementar(){
			this.$store.commit('counter/increment')
		},
		incrementarBy(){
			this.$store.commit('counter/incrementarBy',5)
		},
	
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
