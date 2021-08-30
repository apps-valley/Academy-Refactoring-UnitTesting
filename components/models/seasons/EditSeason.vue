<template>
  <!-- edit season modal -->
  <b-modal id="edit-seasons" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="editSeason">
          <AppInput
            rounded_radius
            type="text"
            v-model="singleSeason.semester_name"
            :title="singleSeason.semester_name"
          >
            {{ $t("seasons.season-name-label") }}
          </AppInput>
          <b-form-group>
            <b-form-datepicker
              id="start-date"
              v-model="singleSeason.start_date"
              :placeholder="$t('seasons.season-start')"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group>
            <b-form-datepicker
              id="end-date"
              v-model="singleSeason.end_date"
              :placeholder="$t('seasons.season-end')"
            ></b-form-datepicker>
          </b-form-group>

          <b-row class="btns">
            <b-col sm="6">
              <Button type="submit" rounded_radius block bg_blue>
                {{ $t("seasons.edit-button") }}
              </Button>
            </b-col>
            <b-col sm="6">
              <Button
                rounded_radius
                block
                @click.native="$bvModal.hide('edit-seasons')"
                >{{ $t("seasons.cancle-button") }}
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
		id: String,
		singleSeason: Object,
		getSeasons: Function,
	},
	methods: {
		// edit season
		async editSeason() {
			await this.$Api.seasons
				.editSeason(this.id, this.singleSeason)
				.then((res) => {
					if (res.status === 200) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText
						// });
						this.$bvModal.hide('edit-seasons')
						this.getSeasons()
					}
				})
		},
	},
}
</script>
