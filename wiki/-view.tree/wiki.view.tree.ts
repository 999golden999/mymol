namespace $ {
	export class $my_wiki extends $mol_page {
		
		/**
		 * ```tree
		 * title \Мой блокнот
		 * ```
		 */
		title() {
			return "Мой блокнот"
		}
		
		/**
		 * ```tree
		 * body / <= Text
		 * ```
		 */
		body() {
			return [
				this.Text()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * text?next \
		 * ```
		 */
		@ $mol_mem
		text(next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Text $mol_textarea
		 * 	hint \Пиши что хочешь
		 * 	value?next <=> text?next
		 * ```
		 */
		@ $mol_mem
		Text() {
			const obj = new this.$.$mol_textarea()
			
			obj.hint = () => "Пиши что хочешь"
			obj.value = (next?: any) => this.text(next)
			
			return obj
		}
	}
	
}

