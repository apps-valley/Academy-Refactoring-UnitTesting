<template>
    <b-card style="width: 200px; border-radius: 25px 40px 25px 25px; border: none;">
        <b-row data-test="row" >
          <b-col cols="12" data-test="title" class="col">
            <div class="text-center py-2">
              {{ title }}
            </div>
          </b-col>

          <b-col cols="12" data-test="progress-col" class="py-2 mb-2 col" >
            <radial-progress-bar
                        :diameter="160"
                        :completed-steps="steps"
                        :total-steps="tSteps"
                        startColor="#09cdd1"
                        stopColor="#24e8a6"
                        innerStrokeColor="#ACBBD0"
                        :animateSpeed="1500"
                      >
                         <div class="chart-overlay">
                        <Title medium bold secondry style="color: #09cdd1"
                            >
                            
                            % {{percentage()}} </Title
                          > 
                        </div> 
                      </radial-progress-bar>
          </b-col>
        </b-row>
        <b-row align-v="center">
            <b-col cols="6" class="d-flex col" align-self="center">
                <div style="width: 8px; height: 8px; background-color: #24e8a6" class="rounded-circle ml-1 mt-1"></div>
                <div style="color: var(--color-gray); font-size: 10px" >{{greenText}}</div>
            </b-col>
            <b-col cols="6" class="d-flex col" >
                <div style="width: 8px; height: 8px; background-color: var(--color-gray)" class="rounded-circle ml-1 mt-1"></div>
                <div style="color: var(--color-gray); font-size: 10px">{{grayText}}</div>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        props: {
            'title': String,
            'greenText': String,
            'grayText': String,
            'steps': Number,
            'tSteps': Number
        },
        methods: {
            percentage(){
                return Math.round(100*this.steps/this.tSteps)
            }
        }
    }
</script>