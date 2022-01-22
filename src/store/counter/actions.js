import randomNumber from '../../../src/helpers/randomNumber'

export const incrementRandom = async ({commit}) => {
		commit('disable')
		const random = await randomNumber()
		console.log(random)
		commit('incrementarRandom',random)
		commit('disable')	
}


	