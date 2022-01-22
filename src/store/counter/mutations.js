
	export const  increment = (state) => {
		state.count++
	}

	export const incrementarBy = (state,value) => {
		state.count+= value
	}

	export const incrementarRandom = (state,random) => {
		state.count += random
	}

	export const disable = (state) => {
		state.isLoading =!state.isLoading
	}
