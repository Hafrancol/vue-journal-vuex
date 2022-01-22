<template>
	<h1>Counter - vuex</h1>
	<h2>direct Acces {{count}}</h2>
	<h2>computada {{$store.state.counter.count}}</h2>
	<h2>Getter {{squareCount}}</h2>
	<button @click="incrementRandom"
					:disabled="isLoading">Incrementar + random</button>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {

	computed:{
		...mapState('counter',['count','isLoading']),	
		...mapGetters('counter',['squareCount'])
	},
	methods:{
		...mapActions('counter',['incrementRandom'])

	}

}
</script>

<style>

</style>