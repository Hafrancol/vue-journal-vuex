
const randomNumber = ()=>{
	return new Promise((resolve)=>{

		const random = Math.round(Math.random() * 10)

		setTimeout(()=>{
			resolve(random)
		},1000)


	})
}

export default randomNumber