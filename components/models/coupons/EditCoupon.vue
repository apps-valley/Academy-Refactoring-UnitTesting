<template>
  <!-- add Coupon modal -->
  <b-modal id="edit-coupon" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="editCoupon">
          <AppInput
            rounded_radius
            type="text"
            @input="editedCoupon.code = $event"
            :value="singleCoupon.code"
            :title="singleCoupon.code"
            :state="editedCoupon.code.length == 6 || editedCoupon.code == ''"
            :invalidFeedback="'Coupon must be 6 characters.'"
          >
            {{ $t("coupons.coupon-code") }}
          </AppInput>
          <!-- <b-form-group>
            <label
              class="form__label"
              :class="
                editedCoupon.discount_type == '' &&
                singleCoupon.discount_type == ''
                  ? ''
                  : 'has-data'
              "
              for="type"
              >نوع الكوبون</label
            >
            <b-form-select
              @input="editedCoupon.discount_type = $event"
              :value="singleCoupon.discount_type"
            >
              <b-form-select-option
                v-for="item in coupons_types"
                :key="item.name"
                :value="item.type"
                >{{ item.name }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group> -->
          <AppInput
            rounded_radius
            type="number"
            @input="editedCoupon.discount_amount = $event"
            :value="singleCoupon.discount_amount"
            :title="singleCoupon.discount_amount"
            :state="
              editedCoupon.discount_amount > 101 &&
              singleCoupon.discount_type == 'percentage'
                ? false
                : true
            "
            :invalidFeedback="'Discount must be less than 100%.'"
          >
            {{ $t("coupons.discount-value") }}
          </AppInput>
          <AppInput
            v-if="singleCoupon.discount_type == 'percentage'"
            rounded_radius
            type="number"
            @input="editedCoupon.max_discount_amount = $event"
            :value="singleCoupon.max_discount_amount"
            :title="singleCoupon.max_discount_amount"
          >
            {{ $t("coupons.max-discount") }}
          </AppInput>
          <!-- <AppInput
            rounded_radius
            type="number"
            @input="editedCoupon.max_uses = $event"
            :value="singleCoupon.max_uses"
            :title="singleCoupon.max_uses"
          >
            الكميه
          </AppInput> -->
          <!-- <b-form-group>
            <b-form-datepicker
              id="start-date"
              @input="editedCoupon.starts_at = $event"
              :value="singleCoupon.starts_at"
              placeholder="بداية الخصم"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group>
            <b-form-datepicker
              :min="editedCoupon ? editedCoupon.starts_at : ''"
              id="end-date"
              @input="editedCoupon.expires_at = $event"
              :value="singleCoupon.expires_at"
              placeholder="نهاية الخصم"
            ></b-form-datepicker>
          </b-form-group> -->

          <b-row class="btns">
            <b-col sm="6">
              <Button
                :disabled="disableButton"
                type="submit"
                rounded_radius
                block
                bg_blue
              >
                {{ $t("coupons.edit-coupon-button") }}
              </Button>
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="reset"
                >{{ $t("coupons.cancle-button") }}
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
		singleCoupon: { type: Object, default: {} },
	},
	data() {
		return {
			disableButton: false,
			coupons_types: [
				{ name: this.$t('coupons.percentage'), type: 'percentage' },
				{ name: this.$t('coupons.fixed-value'), type: 'fixed price' },
			],
			editedCoupon: {
				name: '',
				code: '',
				discount_type: '',
				discount_amount: '',
				max_discount_amount: '',
				max_uses: '',
				starts_at: '',
				expires_at: '',
			},
		}
	},

	methods: {
		// add Coupon
		async editCoupon() {
			this.disableButton = true
			let payload = {
				code:
          this.editedCoupon.code == ''
          	? this.singleCoupon.code
          	: this.editedCoupon.code,
				discount_amount:
          this.editedCoupon.discount_amount == ''
          	? this.singleCoupon.discount_amount
          	: this.editedCoupon.discount_amount,
				max_discount_amount:
          this.editedCoupon.max_discount_amount == ''
          	? this.singleCoupon.max_discount_amount
          	: this.editedCoupon.max_discount_amount,
			}
			await this.$Api.coupons
				.editCoupon(this.singleCoupon.id, payload)
				.then((res) => {
					if (res.status === 201) {
						this.$toast.fire({
							icon: 'success',
							title: res.statusText,
						})
						this.$emit('couponEdited')
						this.$bvModal.hide('edit-coupon')
					}
					this.disableButton = false
				})
				.catch(() => {
					this.disableButton = false
				})
		},
		// reset
		reset() {
			this.editedCoupon = {
				name: '',
				code: '',
				discount_type: '',
				discount_amount: '',
				max_discount_amount: '',
				max_uses: '',
				starts_at: '',
				expires_at: '',
			}
			this.$bvModal.hide('edit-coupon')
		},
	},
}
</script>
