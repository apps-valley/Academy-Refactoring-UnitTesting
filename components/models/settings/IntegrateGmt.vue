<template>
  <!-- add season modal -->
  <b-modal id="add-gmt-keys" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_member_modal">
        <b-form @submit.prevent="update">
          <b-row class="btns">
            <b-col sm="12" class="mb-4">
              <b-form-textarea
                v-model="integrationsSettings.google_tag_manager"
                height="200px"
                placeholder="قم بإضافة مفاتيح الربط"
              ></b-form-textarea>
            </b-col>
            <b-col sm="8">
              <Button type="submit" rounded_radius block bg_blue>
                {{integrationsSettings.google_tag_manager.length > 0 ? "تعديل القيمة" : "قم باضافة مفتاح الربط"}}
              </Button>
            </b-col>
            <b-col sm="4">
              <Button
                rounded_radius
                block
                @click.native="close"
                >إلغاء
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
		integrationsSettings: {
			type: Object,
			require: true
		}
	},
	methods: {
		close() {
			this.$bvModal.hide('add-gmt-keys')
		},
		update() {
			this.$emit('updateIntegration', this.integrationsSettings.google_tag_manager)
		}
	}
}
</script>
