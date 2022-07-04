import { useEffect, useState } from "react";

type Greeting = {
	greeting:string
}

export const useTimeHandler = ():Greeting => {

	const [greeting, setGreeting] = useState<string>('')

	useEffect(() => {
		const hours:number = new Date(Date.now()).getHours()
		if(hours >= 6 && hours <= 9){
			setGreeting('Доброе утро, ')
		}else if(hours >= 10 && hours <= 17){
			setGreeting('Добрый день, ')
		}else if(hours >= 18 && hours <= 23){
			setGreeting('Добрый вечер, ')
		}else if(hours >= 0 && hours <= 5){
			setGreeting('Доброй ночи, ')
		}

	},[])


	return {greeting}
}