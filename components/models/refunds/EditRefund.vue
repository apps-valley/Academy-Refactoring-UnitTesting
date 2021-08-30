<template>
  <div>
    <!-- add Coupon modal -->
    <b-modal id="edit-refund" centered hide-header hide-footer size="md">
      <div class="sm_padding">
        <div class="edit_refund_modal">
          <p>
            <span>
              {{ $t("refunds.course-name-label") }}
            </span>
            {{
              refundDetails.course
                ? refundDetails.course.name
                : $t("refunds.no-name")
            }}
          </p>
          <p>
            <span>
              {{ $t("refunds.canceled-reason") }}
            </span>
            {{
              refundDetails.refund_reason
                ? refundDetails.refund_reason.reason_title
                : refundDetails.details
                ? refundDetails.details
                : $t("refunds.no-reason")
            }}
          </p>
          <p>
            <span>
              {{ $t("refunds.student-name-label") }}
            </span>
            {{
              refundDetails.user
                ? refundDetails.user.name
                : $t("refunds.no-name")
            }}
          </p>
          <p>
            <span>
              {{ $t("refunds.request-date") }}
            </span>
            {{
              refundDetails.created_at
                ? $moment(refundDetails.created_at).format("DD-MM-YYYY")
                : $t("refunds.not-exist")
            }}
          </p>
          <p>
            <span>
              {{ $t("refunds.request-time") }}
            </span>
            {{
              refundDetails.created_at
                ? $moment(refundDetails.created_at).format("HH-mm-ss")
                : $t("refunds.not-exist")
            }}
          </p>
          <b-form-select
            class="form-select mt-3 mb-4"
            aria-label="Default select example"
            v-model="form.status"
          >
            <b-form-select-option :value="null" disabled>
            </b-form-select-option>
            <b-form-select-option
              value="waiting"
              v-if="refundDetails.status != 'waiting'"
            >
              {{ $t("refunds.under-review") }}
            </b-form-select-option>
            <b-form-select-option
              value="accepted"
              v-if="refundDetails.status != 'accepted'"
            >
              {{ $t("refunds.review-done") }}
            </b-form-select-option>
            <b-form-select-option
              value="rejected"
              v-if="refundDetails.status != 'rejected'"
              >{{ $t("refunds.canceled") }}</b-form-select-option
            >
          </b-form-select>
          <b-row class="justify-content-center">
            <b-col sm="6">
              <Button
                bg_blue
                rounded_radius
                block
                v-b-modal.check-modal
                :disabled="form.status === null"
              >
                {{ $t("refunds.change-status") }}
              </Button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>

    <!-- third modal -->
    <b-modal
      id="check-modal"
      centered
      hide-header
      hide-footer
      size="md"
      title="Third Modal"
    >
      <b-row>
        <b-col sm="12">
          <Title center class="mb-4">
            {{ $t("refunds.are-you-sure-you-want-to-change") }}
          </Title>
        </b-col>
        <b-col sm="6">
          <Button bg_blue rounded_radius block @click.native="updateRefund">
            {{ $t("refunds.sure-button") }}
          </Button>
        </b-col>
        <b-col sm="6">
          <Button bg_blue rounded_radius block @click.native="reset">
            {{ $t("refunds.cancle-button") }}
          </Button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
	props: {
		refundDetails: [Object, Number],
	},
	data() {
		return {
			form: {
				status: null,
			},
		}
	},

	methods: {
		// edit refund
		async updateRefund() {
			await this.$Api.refunds
				.updateRefund(this.refundDetails.id, this.form)
				.then((res) => {
					if (res.status === 201) {
						this.$toast.fire({
							icon: 'success',
							title: res.statusText,
						})
						this.$emit('refundEdited')
						this.reset()
					}
				})
		},
		// reset
		reset() {
			this.form = {
				status: null,
			}
			this.$bvModal.hide('edit-refund')
			this.$bvModal.hide('check-modal')
		},
	},
}
</script>
