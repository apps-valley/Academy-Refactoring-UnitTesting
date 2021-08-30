import { Doughnut } from 'vue-chartjs'

export default {
	extends: Doughnut,

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
