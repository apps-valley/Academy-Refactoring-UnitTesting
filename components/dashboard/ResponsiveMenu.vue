<template>
    <div class="mobile_menu">
      <div class="menu_head">
        <div class="logo_part">
          <b-img :src="settings.white_logo"></b-img>
        </div>

        <div class="btn_part">
          <button @click="open = true" v-if="open === false">
            <i class="fas fa-bars"></i>
          </button>
          <button @click="open = false" v-if="open === true">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <transition name="show">
        <div v-if="open" class="inner_menu">
          <div class="sidemenu_body">
            <nav>
              <b-nav vertical>
                <div class="dropdown_menu">
                  <div class="dropbtn">
                    <b-nav-item to="" @click.prevent="switchFirstNav">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                        >
                          <path
                            fill="#fff"
                            d="M19.2 24h-4.8a2.4 2.4 0 0 1-2.4-2.4V18a2.4 2.4 0 0 1 2.4-2.4h4.8a2.4 2.4 0 0 1 2.4 2.4v3.6a2.4 2.4 0 0 1-2.4 2.4zm-4.8-6v3.6h4.8V18zm-7.2 6H2.4A2.4 2.4 0 0 1 0 21.6v-8.4a2.4 2.4 0 0 1 2.4-2.4h4.8a2.4 2.4 0 0 1 2.4 2.4v8.4A2.4 2.4 0 0 1 7.2 24zM2.4 13.2v8.4h4.8v-8.4zm16.8 0h-4.8a2.4 2.4 0 0 1-2.4-2.4V2.4A2.4 2.4 0 0 1 14.4 0h4.8a2.4 2.4 0 0 1 2.4 2.4v8.4a2.4 2.4 0 0 1-2.4 2.4zM14.4 2.4v8.4h4.8V2.4zm-7.2 6H2.4A2.4 2.4 0 0 1 0 6V2.4A2.4 2.4 0 0 1 2.4 0h4.8a2.4 2.4 0 0 1 2.4 2.4V6a2.4 2.4 0 0 1-2.4 2.4zm-4.8-6V6h4.8V2.4z"
                          />
                        </svg>
                      </span>
                      <span class="link">{{ $t("statistics") }}</span>

                      <i class="fas fa-chevron-left link_arrow"></i>
                    </b-nav-item>

                    <div
                      class="dropdown-content"
                      v-if="first_nav"
                      @click="open = false"
                    >
                     <nuxt-link to="/dashboard/statistics">
                        {{ $t("statistics_overview") }}
                      </nuxt-link>
                      <nuxt-link to="/dashboard/statistics/students">
                        {{ $t("students_statistics") }}
                      </nuxt-link>
                      <nuxt-link to="/dashboard/statistics/teachers">
                        {{ $t("teachers_statistics") }}</nuxt-link
                      >
                      <nuxt-link to="/dashboard/statistics/courses">
                        {{ $t("courses_statistics") }}
                      </nuxt-link>
                      <nuxt-link to="/dashboard/statistics/financial">
                        {{ $t("fiancies_statistics") }}
                      </nuxt-link>
                      <nuxt-link to="/dashboard/statistics/rating">
                        {{ $t("evaluation_statistics") }}</nuxt-link
                      >
                      <nuxt-link to="/dashboard/statistics/search">
                        {{ $t("search_statistics") }}</nuxt-link
                      >
                    </div>
                  </div>
                </div>

                <div class="dropdown_menu">
                  <div class="dropbtn">
                    <b-nav-item @click.prevent="switchSecNav">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                        >
                          <path
                            fill="#fff"
                            d="M.423 21.542A.529.529 0 0 1 0 21a6.272 6.272 0 0 1 4.925-6.22 6.908 6.908 0 0 0 2.02-1q-.151-.152-.3-.322a8.4 8.4 0 0 1-1.415-2.344l-.014-.009a.181.181 0 0 1-.024-.015.9.9 0 0 1-.359-.31 2.717 2.717 0 0 1-.45-2.45 1.322 1.322 0 0 1 .49-.553 8.329 8.329 0 0 1 .248-2.005 4.559 4.559 0 0 1 4.6-3.046 5.711 5.711 0 0 1 1.6.217A4.36 4.36 0 0 1 15.453 0h.072a4.441 4.441 0 0 1 4.431 4.349l.018.178a5.844 5.844 0 0 0 1.039 2.935c.12.2.246.394.365.573.5.756 1.069 1.613.338 2.569-.616.809-1.821.816-2.788.822-.17 0-.342 0-.5.008.142.221.553.381 1.731.779a8.462 8.462 0 0 1 4.435 3.8.523.523 0 0 1-.068.585l-.082.094a8.711 8.711 0 0 1-5.113 3.2A9.218 9.218 0 0 1 19.452 21a.528.528 0 0 1-.422.54 48.98 48.98 0 0 1-9.3.82 48.969 48.969 0 0 1-9.307-.818zm4.825-5.756C3.365 16.37 1.422 17.4 1.105 20.6a51.189 51.189 0 0 0 8.621.71 51.178 51.178 0 0 0 8.621-.71c-.317-3.192-2.26-4.226-4.143-4.811a7.76 7.76 0 0 1-2.535-1.309 3.4 3.4 0 0 1-3.887 0 7.752 7.752 0 0 1-2.534 1.305zm9.28-1.005a6.3 6.3 0 0 1 4.555 4.082 7.5 7.5 0 0 0 4.385-2.669 7.449 7.449 0 0 0-3.657-2.982c-2.083-.706-2.529-.975-2.529-2.229a.528.528 0 0 1 .384-.506 4.851 4.851 0 0 1 1.255-.1c.731 0 1.641-.009 1.938-.4.252-.331.147-.568-.379-1.361-.129-.194-.265-.4-.4-.62a6.854 6.854 0 0 1-1.178-3.361l-.017-.174a3.387 3.387 0 0 0-3.4-3.4 3.272 3.272 0 0 0-3.173 2.3 4.23 4.23 0 0 1 2.012 2.416 8.29 8.29 0 0 1 .249 2.008 1.309 1.309 0 0 1 .49.553 2.709 2.709 0 0 1-.45 2.45.877.877 0 0 1-.359.31l-.025.017-.013.007a8.441 8.441 0 0 1-1.415 2.344q-.147.17-.3.322a6.915 6.915 0 0 0 2.027.992zM6.159 6.047a7.5 7.5 0 0 0-.207 2.037v.005a.529.529 0 0 1-.437.547.285.285 0 0 0-.163.154c-.04.094-.136.473.365 1.381l.011.006.032.02c.2.125.38.232.446.457.209.715 1.621 3.378 3.522 3.378s3.312-2.662 3.521-3.378c.068-.226.242-.333.446-.457l.017-.01.027-.016c.51-.923.4-1.3.359-1.391a.3.3 0 0 0-.158-.143.53.53 0 0 1-.438-.547 7.458 7.458 0 0 0-.207-2.044 3.466 3.466 0 0 0-3.569-2.262 3.5 3.5 0 0 0-3.567 2.263z"
                          />
                        </svg>
                      </span>
                      <span class="link">{{ $t("side-menu.members") }}</span>

                      <i class="fas fa-chevron-left link_arrow"></i>
                    </b-nav-item>

                    <div
                      class="dropdown-content"
                      v-if="sec_nav"
                      @click="open = false"
                    >
                      <nuxt-link to="/dashboard/members/teachers">{{
                        $t("teachers")
                      }}</nuxt-link>
                      <nuxt-link to="/dashboard/members/students">{{
                        $t("students")
                      }}</nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="dropdown_menu">
                  <div class="dropbtn">
                    <b-nav-item @click="switchThirdNav">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                        >
                          <path
                            fill="#acbbd0"
                            d="M16.9 26H9.1a1.3 1.3 0 0 1 0-2.6h2.6v-1.3H5.2a2.6 2.6 0 0 1-2.6-2.6v-13H1.3a1.3 1.3 0 0 1 0-2.6h10.4V1.3a1.3 1.3 0 0 1 2.6 0v2.6h10.4a1.3 1.3 0 1 1 0 2.6h-1.3v13a2.6 2.6 0 0 1-2.6 2.6h-6.5v1.3h2.6a1.3 1.3 0 0 1 0 2.6zM5.2 6.5v13h15.6v-13H5.2zm11.7 10.4H9.1a1.3 1.3 0 0 1 0-2.6h7.8a1.3 1.3 0 0 1 0 2.6zm-3.25-5.2H9.1a1.3 1.3 0 0 1 0-2.6h4.55a1.3 1.3 0 0 1 0 2.6z"
                          />
                        </svg>
                      </span>
                      <span class="link">{{ $t("content_managment") }}</span>

                      <i class="fas fa-chevron-left link_arrow"></i>
                    </b-nav-item>
                    <div
                      class="dropdown-content"
                      v-if="third_nav"
                      @click="open = false"
                    >
                      <nuxt-link to="/dashboard/content-manegment/categories">{{
                        $t("sections")
                      }}</nuxt-link>
                      <nuxt-link to="/dashboard/content-manegment/subjects">{{
                        $t("courses")
                      }}</nuxt-link>
                      <nuxt-link to="/dashboard/content-manegment/certificate">{{
                        $t("certifications")
                      }}</nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="dropdown_menu">
                  <div class="dropbtn">
                    <b-nav-item @click="switchFifthNav">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                        >
                          <path
                            fill="#acbbd0"
                            d="M13.329 25.2h-1.458a1.644 1.644 0 0 1-1.617-1.349l-.211-1.163a10.292 10.292 0 0 1-2.764-1.15l-.976.677a1.623 1.623 0 0 1-.927.282 1.661 1.661 0 0 1-1.17-.472l-1.031-1.032a1.641 1.641 0 0 1-.19-2.1l.676-.976a10.285 10.285 0 0 1-1.148-2.764l-1.163-.207A1.643 1.643 0 0 1 0 13.329v-1.458a1.641 1.641 0 0 1 1.35-1.616l1.163-.212a10.285 10.285 0 0 1 1.148-2.764L2.985 6.3a1.642 1.642 0 0 1 .19-2.1l1.032-1.025a1.662 1.662 0 0 1 1.17-.475 1.618 1.618 0 0 1 .926.283l.976.677a10.292 10.292 0 0 1 2.764-1.15l.211-1.162A1.645 1.645 0 0 1 11.871 0h1.458a1.643 1.643 0 0 1 1.617 1.349l.212 1.163a10.3 10.3 0 0 1 2.763 1.15l.976-.677a1.62 1.62 0 0 1 .927-.283 1.659 1.659 0 0 1 1.17.473l1.032 1.031a1.643 1.643 0 0 1 .189 2.1l-.676.976a10.318 10.318 0 0 1 1.149 2.764l1.163.211a1.643 1.643 0 0 1 1.349 1.614v1.458a1.641 1.641 0 0 1-1.349 1.616l-1.163.212a10.317 10.317 0 0 1-1.149 2.764l.676.976a1.642 1.642 0 0 1-.189 2.1l-1.032 1.031a1.644 1.644 0 0 1-2.1.19l-.976-.677a10.3 10.3 0 0 1-2.763 1.15l-.212 1.162a1.643 1.643 0 0 1-1.614 1.347zm-6.066-4.864a.544.544 0 0 1 .3.088 9.244 9.244 0 0 0 3.07 1.276.544.544 0 0 1 .424.437l.275 1.517a.548.548 0 0 0 .539.45h1.458a.549.549 0 0 0 .539-.451l.275-1.516a.544.544 0 0 1 .424-.437 9.244 9.244 0 0 0 3.073-1.277.545.545 0 0 1 .609.01l1.271.879a.539.539 0 0 0 .309.094.556.556 0 0 0 .39-.157l1.031-1.031a.547.547 0 0 0 .062-.7l-.879-1.272a.545.545 0 0 1-.01-.608 9.226 9.226 0 0 0 1.277-3.071.546.546 0 0 1 .437-.424l1.517-.275a.548.548 0 0 0 .45-.539v-1.458a.549.549 0 0 0-.45-.54l-1.517-.274a.546.546 0 0 1-.437-.424 9.226 9.226 0 0 0-1.276-3.073.547.547 0 0 1 .01-.609l.879-1.271a.547.547 0 0 0-.062-.7l-1.032-1.03a.559.559 0 0 0-.391-.158.534.534 0 0 0-.308.095l-1.271.879a.545.545 0 0 1-.609.01A9.238 9.238 0 0 0 14.567 3.5a.544.544 0 0 1-.424-.437l-.275-1.517a.548.548 0 0 0-.539-.45h-1.458a.549.549 0 0 0-.539.451l-.275 1.516a.544.544 0 0 1-.424.437A9.238 9.238 0 0 0 7.56 4.776a.543.543 0 0 1-.608-.01L5.68 3.887a.537.537 0 0 0-.308-.094.556.556 0 0 0-.391.157L3.95 4.981a.547.547 0 0 0-.063.7l.879 1.271a.545.545 0 0 1 .01.609A9.244 9.244 0 0 0 3.5 10.633a.546.546 0 0 1-.437.424l-1.517.275a.547.547 0 0 0-.45.539v1.458a.548.548 0 0 0 .45.539l1.517.275a.546.546 0 0 1 .437.424 9.244 9.244 0 0 0 1.276 3.073.543.543 0 0 1-.01.608l-.879 1.272a.547.547 0 0 0 .063.7l1.03 1.031a.555.555 0 0 0 .39.157.545.545 0 0 0 .31-.094l1.271-.879a.545.545 0 0 1 .312-.099zM12.6 17.53a4.93 4.93 0 1 1 4.93-4.93 4.936 4.936 0 0 1-4.93 4.93zm0-8.765a3.835 3.835 0 1 0 3.835 3.835A3.839 3.839 0 0 0 12.6 8.765z"
                          />
                        </svg>
                      </span>
                      <span class="link">{{ $t("subsciptions") }}</span>

                      <i class="fas fa-chevron-left link_arrow"></i>
                    </b-nav-item>

                    <div
                      class="dropdown-content"
                      v-if="fifth_nav"
                      @click="open = false"
                    >
                      <!-- <nuxt-link to="/dashboard/settings/archived">سجل الارشفة</nuxt-link> -->
                      <nuxt-link to="/dashboard/subscriptions/refund">{{
                        $t("refund")
                      }}</nuxt-link>
                      <nuxt-link to="/dashboard/subscriptions/coupons">{{
                        $t("side-menu.coupons")
                      }}</nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="dropdown_menu">
                  <div class="dropbtn">
                    <b-nav-item @click="switchFourthNav">
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                        >
                          <path
                            fill="#acbbd0"
                            d="M13.329 25.2h-1.458a1.644 1.644 0 0 1-1.617-1.349l-.211-1.163a10.292 10.292 0 0 1-2.764-1.15l-.976.677a1.623 1.623 0 0 1-.927.282 1.661 1.661 0 0 1-1.17-.472l-1.031-1.032a1.641 1.641 0 0 1-.19-2.1l.676-.976a10.285 10.285 0 0 1-1.148-2.764l-1.163-.207A1.643 1.643 0 0 1 0 13.329v-1.458a1.641 1.641 0 0 1 1.35-1.616l1.163-.212a10.285 10.285 0 0 1 1.148-2.764L2.985 6.3a1.642 1.642 0 0 1 .19-2.1l1.032-1.025a1.662 1.662 0 0 1 1.17-.475 1.618 1.618 0 0 1 .926.283l.976.677a10.292 10.292 0 0 1 2.764-1.15l.211-1.162A1.645 1.645 0 0 1 11.871 0h1.458a1.643 1.643 0 0 1 1.617 1.349l.212 1.163a10.3 10.3 0 0 1 2.763 1.15l.976-.677a1.62 1.62 0 0 1 .927-.283 1.659 1.659 0 0 1 1.17.473l1.032 1.031a1.643 1.643 0 0 1 .189 2.1l-.676.976a10.318 10.318 0 0 1 1.149 2.764l1.163.211a1.643 1.643 0 0 1 1.349 1.614v1.458a1.641 1.641 0 0 1-1.349 1.616l-1.163.212a10.317 10.317 0 0 1-1.149 2.764l.676.976a1.642 1.642 0 0 1-.189 2.1l-1.032 1.031a1.644 1.644 0 0 1-2.1.19l-.976-.677a10.3 10.3 0 0 1-2.763 1.15l-.212 1.162a1.643 1.643 0 0 1-1.614 1.347zm-6.066-4.864a.544.544 0 0 1 .3.088 9.244 9.244 0 0 0 3.07 1.276.544.544 0 0 1 .424.437l.275 1.517a.548.548 0 0 0 .539.45h1.458a.549.549 0 0 0 .539-.451l.275-1.516a.544.544 0 0 1 .424-.437 9.244 9.244 0 0 0 3.073-1.277.545.545 0 0 1 .609.01l1.271.879a.539.539 0 0 0 .309.094.556.556 0 0 0 .39-.157l1.031-1.031a.547.547 0 0 0 .062-.7l-.879-1.272a.545.545 0 0 1-.01-.608 9.226 9.226 0 0 0 1.277-3.071.546.546 0 0 1 .437-.424l1.517-.275a.548.548 0 0 0 .45-.539v-1.458a.549.549 0 0 0-.45-.54l-1.517-.274a.546.546 0 0 1-.437-.424 9.226 9.226 0 0 0-1.276-3.073.547.547 0 0 1 .01-.609l.879-1.271a.547.547 0 0 0-.062-.7l-1.032-1.03a.559.559 0 0 0-.391-.158.534.534 0 0 0-.308.095l-1.271.879a.545.545 0 0 1-.609.01A9.238 9.238 0 0 0 14.567 3.5a.544.544 0 0 1-.424-.437l-.275-1.517a.548.548 0 0 0-.539-.45h-1.458a.549.549 0 0 0-.539.451l-.275 1.516a.544.544 0 0 1-.424.437A9.238 9.238 0 0 0 7.56 4.776a.543.543 0 0 1-.608-.01L5.68 3.887a.537.537 0 0 0-.308-.094.556.556 0 0 0-.391.157L3.95 4.981a.547.547 0 0 0-.063.7l.879 1.271a.545.545 0 0 1 .01.609A9.244 9.244 0 0 0 3.5 10.633a.546.546 0 0 1-.437.424l-1.517.275a.547.547 0 0 0-.45.539v1.458a.548.548 0 0 0 .45.539l1.517.275a.546.546 0 0 1 .437.424 9.244 9.244 0 0 0 1.276 3.073.543.543 0 0 1-.01.608l-.879 1.272a.547.547 0 0 0 .063.7l1.03 1.031a.555.555 0 0 0 .39.157.545.545 0 0 0 .31-.094l1.271-.879a.545.545 0 0 1 .312-.099zM12.6 17.53a4.93 4.93 0 1 1 4.93-4.93 4.936 4.936 0 0 1-4.93 4.93zm0-8.765a3.835 3.835 0 1 0 3.835 3.835A3.839 3.839 0 0 0 12.6 8.765z"
                          />
                        </svg>
                      </span>
                      <span class="link">{{ $t("settings") }}</span>

                      <i class="fas fa-chevron-left link_arrow"></i>
                    </b-nav-item>

                    <div
                      class="dropdown-content"
                      v-if="fourd_nav"
                      @click="open = false"
                    >
                      <nuxt-link to="/dashboard/settings/seasons">{{
                        $t("side-menu.seasons")
                      }}</nuxt-link>
                      <!-- <nuxt-link to="/dashboard/settings/orders-and-complians"
                        >اعدادات الشكاوى والطلبات</nuxt-link
                      > -->
                      <nuxt-link to="/dashboard/settings/faq">
                        {{ $t("faq") }}
                      </nuxt-link>
                      <nuxt-link to="/dashboard/settings/profile-settings">{{
                        $t("profile_settings")
                      }}</nuxt-link>
                      <nuxt-link to="/dashboard/settings/integration-settings">
                        {{ $t("integration_settings") }}
                      </nuxt-link>
                    </div>
                  </div>
                </div>

                <div class="sidemenu_footer">
                  <b-nav-item class="back_link" to="/dashboard/statistics">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.001"
                      height="25.001"
                      viewBox="0 0 25.001 25.001"
                    >
                      <path
                        fill="#acbbd0"
                        d="M2.5 25A2.518 2.518 0 0 1 0 22.473V10.862a2.517 2.517 0 0 1 2.5-2.527h5V2.526A2.517 2.517 0 0 1 10 0h12.5A2.517 2.517 0 0 1 25 2.526V14.14a2.516 2.516 0 0 1-2.5 2.527h-5v5.806A2.516 2.516 0 0 1 15 25zM.834 22.473A1.682 1.682 0 0 0 2.5 24.166H15a1.681 1.681 0 0 0 1.665-1.693V12.5H.834zm7.5-14.141H15a2.517 2.517 0 0 1 2.5 2.53v4.971h5a1.681 1.681 0 0 0 1.665-1.693V4.165H8.332zm-7.5 2.53v.8h15.831v-.8A1.682 1.682 0 0 0 15 9.167H2.5a1.683 1.683 0 0 0-1.666 1.695zm7.5-8.333v.8h15.832v-.8A1.682 1.682 0 0 0 22.5.833H10a1.683 1.683 0 0 0-1.668 1.696zM5.122 21.545a.417.417 0 0 1 0-.59L11.077 15H8.75a.417.417 0 1 1 0-.833h3.334a.45.45 0 0 1 .088.017.541.541 0 0 1 .068.014.416.416 0 0 1 .228.228.44.44 0 0 1 .014.068.412.412 0 0 1 .018.089v3.333a.417.417 0 1 1-.833 0v-2.327l-5.956 5.956a.417.417 0 0 1-.589 0zm.711-11.129a.417.417 0 1 1 .417.417.418.418 0 0 1-.417-.416zm-1.666 0a.417.417 0 1 1 .417.417.417.417 0 0 1-.417-.416zm-1.667 0a.417.417 0 1 1 .417.417.417.417 0 0 1-.417-.416zm10.833-8.332a.417.417 0 1 1 .417.417.416.416 0 0 1-.417-.417zm-1.667 0a.417.417 0 1 1 .417.417.416.416 0 0 1-.416-.417zm-1.666 0a.417.417 0 1 1 .417.417.417.417 0 0 1-.417-.417z"
                        transform="translate(.001 .001)"
                      />
                    </svg>
                    <span>{{ $t("back_to_home") }}</span>
                  </b-nav-item>

                  <b-nav-item v-b-modal.logout class="logout_link">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="25.001"
                      height="25.001"
                      viewBox="0 0 25.001 25.001"
                    >
                      <g>
                        <path
                          style="fill: #030104"
                          d="M10.269,11.298V1.883C10.269,0.844,11.113,0,12.152,0s1.883,0.844,1.883,1.883v9.415
		c0,1.039-0.844,1.883-1.883,1.883S10.269,12.337,10.269,11.298z M19.616,2.761c-0.61-0.483-1.5-0.377-1.983,0.234
		c-0.483,0.612-0.378,1.5,0.234,1.984c2.24,1.767,3.524,4.413,3.524,7.261c0,5.094-4.145,9.239-9.238,9.239
		c-5.094,0-9.239-4.145-9.239-9.239c0-2.847,1.283-5.492,3.521-7.258c0.612-0.483,0.717-1.371,0.234-1.984
		c-0.483-0.612-1.37-0.716-1.984-0.234C1.764,5.069,0.089,8.523,0.089,12.24c0,6.652,5.412,12.063,12.063,12.063
		s12.063-5.412,12.063-12.063C24.215,8.521,22.538,5.067,19.616,2.761z"
                        />
                      </g>
                    </svg>
                    <span>{{ $t("logout") }}</span>
                  </b-nav-item>
                </div>
              </b-nav>
            </nav>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
export default {
	data() {
		return {
			open: false,
			first_nav: false,
			sec_nav: false,
			third_nav: false,
			fourd_nav: false,
			fifth_nav: false,
			settings: {},
		}
	},
	mounted() {
		this.getSettings()
	},
	methods: {
		switchFirstNav() {
			this.first_nav = this.first_nav === false ? true : false
		},
		switchSecNav() {
			this.sec_nav = this.sec_nav === false ? true : false
		},
		switchThirdNav() {
			this.third_nav = this.third_nav === false ? true : false
		},
		switchFourthNav() {
			this.fourd_nav = this.fourd_nav === false ? true : false
		},
		switchFifthNav() {
			this.fifth_nav = this.fifth_nav === false ? true : false
		},
		// get settings
		async getSettings() {
			const getSetting = await this.$auth.$storage.getUniversal(
				'identity_settings'
			)
			// console.log("getSetting,", getSetting);
			this.settings = getSetting[0]
			if (process.client) {
				var r = document.querySelector(':root')
				r.style.setProperty(
					'--color-primary',
					this.$auth.$storage.getUniversal('masterColor')
				)
				r.style.setProperty(
					'--gradient-bg',
					this.$auth.$storage.getUniversal('masterColor')
				)
				r.style.setProperty(
					'--secondary',
					this.$auth.$storage.getUniversal('subColor')
				)
			}
		},
	},
	mounted() {},
}
</script>
