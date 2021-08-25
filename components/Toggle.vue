<template>
<div>
    <label 
        v-if="on && off" 
        class="switch"
    >
        <input type="checkbox" id="togBtn">
        <div class="switch__slider">
            <span class="switch__on">{{on}}</span>
            <span class="switch__off">{{off}}</span>
        </div>
    </label>
        
    <label 
        v-else 
        class="switch-without-text"
    >
        <input type="checkbox" @click="toggleCheckbox">
        <div class="switch-without-text__slider switch-without-text__round"></div>
      </label>
    </div> 
</template>

<script>
export default {
    data: {
    checkbox: false
  },
  methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    }
  },
    props: {
        on: String,
        off: String,
    },
    data() {
        return {
            currentState: false
        }
    },
    computed: {
        isActive() {
            return this.currentState;
        },

        checkedValue: {
            get() {
                return this.currentState
            },
            set(newValue) {
                this.currentState = newValue;
            }
        }
    }
}
</script>

<style scoped>

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 20px;
}

.switch input {
  display: none;
}

.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border: 2px solid red;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 30px;

}

.switch__slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: red;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .switch__slider {
  background-color: white;
  color: green;
  border: green 2px solid;
}

input:focus + .switch__slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .switch__slider:before {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  background-color: green;
}

.switch__on {
  display: none;
}

.switch__on,
.switch__off {
  color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 25%;
  left: 25%;
  font-size: 12px;
  font-family: Verdana, sans-serif;
}

.switch__on {
  top: 8px;
  right: 5px;
  left: auto;
  
}

.switch__off {
  left: auto;
  right: -5px;
  top: 8px;
  color: var(--color-red);
}

input:checked+ .switch__slider .switch__on {
  display: block;
  color: green;
}

input:checked + .switch__slider .switch__off {
  display: none;
}

.switch-without-text__slider.switch-without-text__round {
  border-radius: 17px;
}

.switch-without-text__slider.switch-without-text__round:before {
  border-radius: 50%;
}


.switch-without-text__slider {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 15px;
}

.switch-without-text input {
  display: none;
}

.switch-without-text__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: none;
}

.switch-without-text__slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: -6px;
  bottom: -5px;
  background-color: gray;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .switch-without-text__slider:before {
  background-color: blue;
}

input:checked + .switch-without-text__slider {
  background-color: lightblue;
}

input:focus + .switch-without-text__slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .switch-without-text__slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}

.switch-without-text__slider.switch-without-text__round {
  border-radius: 34px;
}

.switch-without-text__slider.switch-without-text__round:before {
  border-radius: 50%;
}
</style>