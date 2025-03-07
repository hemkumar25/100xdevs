import { atom, selector } from "recoil";

export const counter = atom({
	key: "counter",
	default: 0
})

export const evenSelector = selector({
	key:"isEvenSelector",
	get: function({ get }){
		const count = get(counter);
		return count % 2 == 0;
	}
})