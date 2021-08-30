<template>
  <!-- add season modal -->
  <b-modal id="add-seasons" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="addSeason">
          <AppInput
            rounded_radius
            type="text"
            v-model="newSeason.semester_name"
            :title="newSeason.semester_name"
          >
            {{ $t("seasons.season-name-label") }}
          </AppInput>
          <b-form-group>
            <b-form-datepicker
              id="start-date"
              v-model="newSeason.start_date"
              :placeholder="$t('seasons.season-start')"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group>
            <b-form-datepicker
              id="end-date"
              :min="newSeason.start_date"
              v-model="newSeason.end_date"
              :placeholder="$t('seasons.season-end')"
            ></b-form-datepicker>
          </b-form-group>
          <b-row class="btns">
            <b-col sm="6">
              <Button type="submit" rounded_radius block bg_blue>
                {{ $t("seasons.add-new-season-button") }}
              </Button>
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="reset">
                {{ $t("seasons.cancle-button") }}
              </Button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
	props: {
		getSeasons: Function,
	},
	data() {
		return {
			newSeason: {
				semester_name: '',
				start_date: '',
				end_date: '',
			},
		}
	},
	methods: {
		// add season
		async addSeason() {
			await this.$Api.seasons.addNewSeason(this.newSeason).then((res) => {
				if (res.status === 201) {
					// this.$toast.fire({
					//   icon: "success",
					//   title: res.statusText
					// });
					this.resert()
					this.getSeasons()
				}
			})
		},
		// reset
		reset() {
			this.newSeason.semester_name = ''
			this.newSeason.start_date = ''
			this.newSeason.end_date = ''
			this.$bvModal.hide('add-seasons')
		},
	},
}
</script>
