import { Bar } from 'vue-chartjs'

export default {
	extends: Bar,

	props: {
		data: { type: Array, default: () => [] },
		options: { type: Object, default: () => {} }
	},
	mounted() {
		if (this.data && this.options) {
			this.renderChart(this.data, this.options)
		}
	}
}
