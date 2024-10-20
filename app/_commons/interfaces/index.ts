export {}
declare global {

	interface IOption<T = any> {
		id?: string
		icon?: string | JSX.Element
		label: string
		value: any
		raw?: T
	}
}
