<template>
    <div>
        <section class="questContent" v-if="step >= 1">
            <div class="questContent__wrapper">
                <div class="questContent__items">

                    <div class="questContent__items_item"  v-if="step == 1">
                        <masked-input 
                            type="text"
                            placeholder="0000 0000 0000"
                            class="input"
                            v-model="questions.quest_1"
                            mask="1111 1111 1111"
                            @input="validBin"
                        />
                    </div>

                    <div class="questContent__items_item"  v-if="step == 2">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt2-1" class="label">
                                    <input type="radio" v-model="questions.quest_2" id="opt2-1" class="label_input" value="Есть"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt2_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt2-2" class="label">
                                    <input type="radio" v-model="questions.quest_2" id="opt2-2" class="label_input" value="Нет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt2_2')"/>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 3">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt3-1" class="label">
                                    <input type="radio" v-model="questions.quest_3" id="opt3-1" class="label_input" value="Строительства"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt3_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt3-2" class="label">
                                    <input type="radio" v-model="questions.quest_3" id="opt3-2" class="label_input" value="Производства горных работ"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt3_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt3-3" class="label">
                                    <input type="radio" v-model="questions.quest_3" id="opt3-3" class="label_input" value="Нефти и газа"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt3_3')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt3-4" class="label">
                                    <input type="radio" v-model="questions.quest_3" id="opt3-4" class="label_input" value="Другое"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt3_4')"/>
                                </label>
                                <input
                                    v-if="questions.quest_3 == 'Другое'" 
                                    type="text" 
                                    class="input questContent_input" 
                                    placeholder="Впишите ваш вариант"
                                    v-model="questions.quest_3_text"
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 4">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt4-1" class="label">
                                    <input type="radio" v-model="questions.quest_4" id="opt4-1" class="label_input" value="От 1 до 5 лет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt4_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt4-2" class="label">
                                    <input type="radio" v-model="questions.quest_4" id="opt4-2" class="label_input" value="От 5 до 10 лет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt4_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt4-3" class="label">
                                    <input type="radio" v-model="questions.quest_4" id="opt4-3" class="label_input" value="Нет опыта"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt4_3')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt4-4" class="label">
                                    <input type="radio" v-model="questions.quest_4" id="opt4-4" class="label_input" value="Другое"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt4_4')"/>
                                </label>
                                <input 
                                    v-if="questions.quest_4 == 'Другое'" 
                                    type="text" 
                                    class="input questContent_input" 
                                    placeholder="Впишите ваш вариант"
                                    v-model="questions.quest_4_text"
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 5">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt5-1" class="label">
                                    <input type="radio" v-model="questions.quest_5" id="opt5-1" class="label_input" value="От 1 до 3 лет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt5_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt5-2" class="label">
                                    <input type="radio" v-model="questions.quest_5" id="opt5-2" class="label_input" value="От 3 до 5 лет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt5_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt5-3" class="label">
                                    <input type="radio" v-model="questions.quest_5" id="opt5-3" class="label_input" value="Нет оборотов"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt5_3')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt5-4" class="label">
                                    <input type="radio" v-model="questions.quest_5" id="opt5-4" class="label_input" value="Другое"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt5_4')"/>
                                </label>
                                <input 
                                    v-if="questions.quest_5 == 'Другое'" 
                                    type="text" 
                                    class="input questContent_input" 
                                    placeholder="Впишите ваш вариант"
                                    v-model="questions.quest_5_text"
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 6">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt6-1" class="label">
                                    <input type="radio" v-model="questions.quest_6" id="opt6-1" class="label_input" value="Общеустановленный"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt6_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt6-2" class="label">
                                    <input type="radio" v-model="questions.quest_6" id="opt6-2" class="label_input" value="Упрощённый"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt6_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt6-3" class="label">
                                    <input type="radio" v-model="questions.quest_6" id="opt6-3" class="label_input" value="Не знаю"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt6_3')"/>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 7">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt7-1" class="label">
                                    <input type="radio" v-model="questions.quest_7" id="opt7-1" class="label_input" value="Есть архив"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt7_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt7-2" class="label">
                                    <input type="radio" v-model="questions.quest_7" id="opt7-2" class="label_input" value="Нет архива"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt7_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt7-3" class="label">
                                    <input type="radio" v-model="questions.quest_7" id="opt7-3" class="label_input" value="Только 1С"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt7_3')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt7-4" class="label">
                                    <input type="radio" v-model="questions.quest_7" id="opt7-4" class="label_input" value="Только бумажный архив"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt7_4')"/>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 8">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt8-1" class="label">
                                    <input type="radio" v-model="questions.quest_8" id="opt8-1" class="label_input" value="Есть"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt8_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt8-2" class="label">
                                    <input type="radio" v-model="questions.quest_8" id="opt8-2" class="label_input" value="Нет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt8_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt8-3" class="label">
                                    <input type="radio" v-model="questions.quest_8" id="opt8-3" class="label_input" value="Не знаю"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt8_3')"/>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 9">
                        <ul class="questContent_list">
                            <li>
                                <label for="opt9-1" class="label">
                                    <input type="radio" v-model="questions.quest_9" id="opt9-1" class="label_input" value="Есть"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt9_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt9-2" class="label">
                                    <input type="radio" v-model="questions.quest_9" id="opt9-2" class="label_input" value="Нет"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt9_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt9-3" class="label">
                                    <input type="radio" v-model="questions.quest_9" id="opt9-3" class="label_input" value="Не знаю"/>
                                    <span class="radio"></span>
                                    <span v-html="$ml.get('opt9_3')"/>
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 10">
                        <label for="opt10_1" class="label_text" v-html="$ml.get('opt10_1')"/>
                        <input type="text" v-model="questions.quest_10" id="opt10_1" class="input" placeholder="0 000 000">
                    </div>


                    <div class="questContent__items_item"  v-if="step == 11">
                        <p class="label_text" v-html="$ml.get('opt11_label_1')"/>
                        <ul class="questContent_list">
                            <li>
                                <label for="opt11-1" class="label">
                                    <input type="checkbox" v-model="questions.quest_11" id="opt11-1" class="label_input" value="Звонок"/>
                                    <span class="checked"></span>
                                    <span v-html="$ml.get('opt11_1')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt11-2" class="label">
                                    <input type="checkbox" v-model="questions.quest_11" id="opt11-2" class="label_input" value="WhatsApp"/>
                                    <span class="checked"></span>
                                    <span v-html="$ml.get('opt11_2')"/>
                                </label>
                            </li>
                            <li>
                                <label for="opt11-3" class="label">
                                    <input type="checkbox" v-model="questions.quest_11" id="opt11-3" class="label_input" value="СМС"/>
                                    <span class="checked"></span>
                                    <span v-html="$ml.get('opt11_3')"/>
                                </label>
                            </li>
                        </ul>

                        <p class="label_text label_text_two" v-html="$ml.get('opt11_label_2')"/>
                        <div class="questContent__form">
                            <phone-mask-input
                                v-model="questions.phone"
                                autoDetectCountry
                                showFlag
                                wrapperClass="input_wrapper"
                                inputClass="input"
                                flagClass="input_flag"
                                @onValidate="validPhone"
                            />
                            <button class="btn btn-pulse btn_effect questContent__form_btn" @click="submitQuiz" v-html="$ml.get('btn_send')"/>
                            <p class="alarm" v-html="$ml.get('alarm')"/>
                        </div>
                    </div>

                    <div class="questContent__items_item"  v-if="step == 12">
                        <div class="questContent__finish">
                            <div class="questContent__finish_step">Спасибо!</div>
                            <div class="questContent__finish_title">Ваша заявка принята</div>
                            <a :href="siteUrl" class="btn questContent__finish_btn">Перейти на сайт</a>
                        </div>
                    </div>

                </div>
            </div>
        </section> 
        <section class="questBottom" v-if="step >= 1 && step <= 10">
            <div class="questBottom__wrapper">
                <div class="questBottom__items">
                    <div class="questBottom__items_item">
                        <button class="btn btn_prev" @click="prev(step)">←</button>
                        <button class="btn btn-pulse btn_effect btn_next" @click="next(step)">Далее →</button>
                        <button class="btn btn_skip" @click="skip(step)">Пропустить</button>
                    </div>
                </div>
            </div>
        </section>   

        <Modal v-if="isCallBack" @close="callBack">
            <div v-if="!isCallBackSend" slot="content">
                <p class="modal_title" v-html="$ml.get('callBack')"/>
                <p class="modal_intro" v-html="$ml.get('modal_intro')"/>

                <phone-mask-input
                    v-model="questions.phoneCallback"
                    autoDetectCountry
                    showFlag
                    wrapperClass="input_wrapper"
                    inputClass="modal_input input"
                    flagClass="input_flag"
                    @onValidate="validPhone"
                />
                <button class="btn modal_btn" @click="submitCallBack" v-text="$ml.get('send')"/>
                <p class="alarm" v-html="$ml.get('alarm')"/>
            </div>
            <div v-else slot="content">
                <p class="modal_title modal_title_send" v-html="$ml.get('title_send')"/>
                <a :href="siteUrl" class="btn btn_next modal_btn" v-text="$ml.get('site_link')"/>
            </div>
        </Modal>

    </div>
</template>
<script>
import MaskedInput from 'vue-masked-input'
import PhoneMaskInput from  "vue-phone-mask-input"
import axios from 'axios'
import { required, helpers } from 'vuelidate/lib/validators'
import { mapGetters, mapActions } from 'vuex'

import Modal from '../components/Modal.vue'


//валидация БИН по регулярному вырожению
const binValidat = helpers.regex('binValidat', /^\(?\d{4}\)?[ ]?(\d{4})[ ]?(\d{4})$/)

export default {
    name: 'Content',
    data: () => ({
        isValidBin: false,
        isValidPhone: false
    }),
    computed: {
        ...mapGetters([
            'step',
            'questions',
            'siteUrl',
            'isCallBack',
            'isCallBackSend'
        ]),
        
    },
    validations: {
        questions: {
            quest_1: {
                required,
                binValidat
            }
        }
    },
    methods: {
        ...mapActions([
            'nextStep',
            'prevStep',
            'skip',
            'callBack'
        ]),
        next(s){
            if(s === 1){
                if(this.isValidBin) this.nextStep() 
                else if(this.questions.quest_1)
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_bin')
                })
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_text')
                })
            }
            if(s === 2){
                if(this.questions.quest_2){
                    if(this.questions.quest_2 == 'Есть') this.nextStep()
                    else this.nextStep(4)
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 3){
                if(this.questions.quest_3){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 4){
                if(this.questions.quest_4){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 5){
                if(this.questions.quest_5){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 6){
                if(this.questions.quest_6){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 7){
                if(this.questions.quest_7){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 8){
                if(this.questions.quest_8){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 9){
                if(this.questions.quest_9){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_select')
                })
            }
            if(s === 10){
                if(this.questions.quest_10){
                    this.nextStep()
                }
                else 
                this.$notify({
                    group: 'input',
                    type: 'error',
                    text: this.$ml.get('alert_text')
                })
            }
        },
        prev(s){
            if(s === 4 && this.questions.quest_2 == 'Нет'){
                this.prevStep(2)
            }
            else this.prevStep()
        },
        validBin(){
            if(this.$v.questions.quest_1.$invalid) this.isValidBin = false
            else this.isValidBin = true
        },
        validPhone(e) {
            if(e.isValidByLibPhoneNumberJs) this.isValidPhone = true
            else this.isValidPhone = false
        },
        submitQuiz(e) {
            e.preventDefault();

            if(this.isValidPhone){

                let text =  `Номер БИН компании: ${this.questions.quest_1}\n`+
                        `Наличие лицензии: ${this.questions.quest_2}\n`+
                        `Лицензия в сфере: ${(this.questions.quest_3 == 'Другое') ? this.questions.quest_3_text : this.questions.quest_3}\n`+
                        `Наличие подтверждённого опыта работ: ${(this.questions.quest_4 == 'Другое') ? this.questions.quest_4_text : this.questions.quest_4}\n`+
                        `Наличие оборотов по расчетному счёту: ${(this.questions.quest_5 == 'Другое') ? this.questions.quest_5_text : this.questions.quest_5}\n`+
                        `Режим налогооблажения: ${this.questions.quest_6}\n`+
                        `Наличие архива первичной документации и 1С: ${this.questions.quest_7}\n`+
                        `Наличие ПКО Самрук-Казына: ${this.questions.quest_8}\n`+
                        `Наличие ПКО Государственные закупки: ${this.questions.quest_9}\n`+
                        `Стоимость продажи: ${this.questions.quest_10}\n`+
                        `Предпочитаемые способы связи: ${this.questions.quest_11}\n`
                
                axios.post('/leads', {
                    phone: this.questions.phone,
                    tag: 'Продажа - Квиз',
                    text

                }).then(response => {
                    this.$store.state.step = 12,
                    window.ym(62231704,'reachGoal','quiz-form-sell'),
                    setTimeout(() => {
                        window.location.href = this.siteUrl
                    }, 4000)
                })
            }
            else 
            this.$notify({
                group: 'input',
                type: 'error',
                text: this.$ml.get('alert_phone')
            })
        },
        submitCallBack(e) {
            e.preventDefault();

            if(this.isValidPhone){
                
                axios.post('/leads', {
                    phone: this.questions.phoneCallback,
                    tag: 'Продажа - Обратный звонок'
                }).then(response => {
                    this.$store.state.isCallBackSend = true,
                    window.ym(62231704,'reachGoal','quiz-callback-sell')
                })
            }
            else 
            this.$notify({
                group: 'input',
                type: 'error',
                text: this.$ml.get('alert_phone')
            })
        }
    },
    components: {
        PhoneMaskInput,
        MaskedInput,
        Modal
    }
}
</script>
<style lang="scss">
@import '../../sass/mixins.scss';
.questContent{
    &__wrapper{
        @include wrapper();
    }
    &__items{
        @include row-flex();
        //100vh - quizHeader - quizBottom - toolbarSafari
        min-height: calc(100vh - 168px - 136px - 108px);
        padding-top: rem(48); 

        @include above($break_sm) {
            min-height: calc(100vh - 224px - 44px - 80px - 136px - 64px);
            padding-top: rem(64);
        }
        @include above($break_lg) {
            // min-height: calc(100vh - 80px - 224px - 136px - 64px);
            // max-height: rem(560px - 224px);

            height: calc(560px - 224px - 136px - 64px);
            min-height: auto;
            max-height: calc(100vh - 80px);
        }

        &_item{
            @include col();
            @include size(24);
            @include size-lg(16);
            @include offset-lg(4);
        }
    }
    &_list{
        display: flex;
        flex-direction: column;

        @include above($break_sm) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        li{
            line-height: 1.44;
            letter-spacing: rem(-0.3);

            @include above($break_sm) {
                width: 50%;
            }

            &:not(:last-child){
                margin-bottom: rem(16);
            }

            .input{
                background-color: #f8f7f6;
                margin-top: rem(16);
            }
        }
    }
    &_range{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include above($break_sm) {
            padding-top: rem(32);
        }
        
        &_input{
            color: $primary_color;
            font-size: rem(20);
            text-align: center;
            margin-bottom: rem(8);

            @include above($break_lg) {
                display: none;
            }
        }
        &_intro{
            width: 100%;
            margin-top: rem(8);
            display: flex;
            justify-content: space-between;
            font-size: rem(20);
            color: #ccc6c6;
        }
    }
    .gifts{
        @include size-lg(24);
        @include offset-lg(0);
    }
    &__gifts{
        display: flex;
        flex-direction: column;
        align-items: center;

        @include above($break_sm) {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        &_img{
            border-radius: rem(8);
            overflow: hidden;
            cursor: pointer;

            @include above($break_sm) {
                width: 100%;
                max-width: rem(380);
                box-sizing: border-box;
            }

        }
        &_paginated{
            margin-top: rem(16);
            display: flex;
        }
        &_dot{
            display: block;
            width: rem(8);
            height: rem(8);
            border-radius: 50%;
            background-color: #f5f5f5;
            margin-left: rem(4);
            margin-right: rem(4);

            &.active{
                background-color: $primary_color;
            }
        }
        &_radio{
            width: 50%;
            padding-left: rem(8);
            padding-right: rem(8);
            box-sizing: border-box;
            display: flex;
            justify-content: center;

            @include above($break_lg) {
                width: 33.33333%;
            }

            &:last-child{
                margin-top: rem(32);
                @include above($break_lg) {
                    margin-top: 0;
                }
            }
        }
        &_figure{
            position: relative;
            overflow: hidden;
            margin: 0;

            &::before {
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 2;
                display: block;
                content: "";
                width: 0;
                height: 0;
                background: hsla(0,0%,100%,.2);
                border-radius: 100%;
                transform: translate(-50%,-50%);
                opacity: 0;
            }
            &:hover:before {
                -webkit-animation: circle .75s;
                animation: circle .75s;
            }
        }
        &_hidden{
            display: none;
        }
    }
    &__form{
        @include row-flex();
        flex-direction: column;
        align-items: center;

        @include above($break_sm) {
            flex-direction: row;
            flex-wrap: wrap;
        }

        & > *{
            @include col();
            @include size(24);
            @include size-sm(12);
        }

        .alarm{
            padding-bottom: rem(16);
            @include above($break_sm) {
                margin-left: auto;
            }
        }

        &_intro{
            font-size: rem(18);
            letter-spacing: rem(-0.3);
            line-height: 1.44;
            margin-bottom: rem(32);
            text-align: center;
        }
        &_btn{
            background-color: $primary_color;
            color: $white;
            margin-top: rem(16);
            margin-bottom: rem(16);
            @include above($break_sm) {
                margin-top: 0;
            }
        }
    }
    &__finish{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 108px - 48px);

        @include above($break_sm) {
            min-height: calc(100vh - 108px - 80px - 64px);
        }
        @include above($break_lg) {
            min-height: calc(560px - 64px);
        }
        &_step{
            font-size: rem(12);
            font-weight: rem(12);
            letter-spacing: rem(6);
            line-height: 1.33;
            text-transform: uppercase;
            margin-bottom: rem(8);
    
            @include above($break_sm) {
                margin-bottom: rem(16);
            }
            @include above($break_lg) {
                font-size: rem(15);
            }
        }
        &_title{
            font-size: rem(24);
            font-weight: 700;
            letter-spacing: rem(-0.2);
            line-height: 1.25;
            margin-bottom: rem(48);
    
            @include above($break_sm) {
                font-size: rem(36);
                letter-spacing: rem(-0.4);
            }
            @include above($break_lg) {
                font-size: rem(48);
                letter-spacing: rem(-0.8);
                line-height: 1.1;
            }
        }
        &_btn{
            background-color: $primary_color;
            color: $white;
            letter-spacing: rem(0.8);
        }
    }
}

@-webkit-keyframes circle {
	0% {
		opacity: 1;
	}
	40% {
		opacity: 1;
	}
	100% {
		width: 200%;
		height: 200%;
		opacity: 0;
	}
}
@keyframes circle {
	0% {
		opacity: 1;
	}
	40% {
		opacity: 1;
	}
	100% {
		width: 200%;
		height: 200%;
		opacity: 0;
	}
}
/* End Circle */
.questBottom{
    padding-top: rem(32);
    padding-bottom: rem(48);
    &__wrapper{
        @include wrapper();
        padding: 0;
        overflow: hidden;
    }
    &__items{
        @include row-flex();
        &_item{
            @include col();
            @include size(24);
            @include size-lg(16);
            @include offset-lg(4);
            display: flex;
            justify-content: center;
        }
    }

    .btn{
        padding: 0;
        &_prev{
            background-color: $white;
            color: $primary_color;
            border: solid rem(1) $primary_color;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            border-right: none;
            flex-shrink: 2;
            min-width: rem(50);

            &::before{
                content: '';
                position: absolute;
                top: rem(-1);
                bottom: rem(-1);
                right: rem(-28);
                width: rem(28);
                border-bottom: solid rem(1) $primary_color;
                border-top: solid rem(1) $primary_color;
                background-color: $white;
                
            }
        }
        &_next{
            z-index: 10;
            min-width: rem(110);

        }
        &_skip{
            background-color: $white;
            color: $primary_color;
            border: solid rem(1) $primary_color;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            border-left: none;
            min-width: rem(140);
            flex-shrink: 2;

            &::before{
                content: '';
                position: absolute;
                top: rem(-1);
                bottom: rem(-1);
                left: rem(-28);
                width: rem(28);
                border-bottom: solid rem(1) $primary_color;
                border-top: solid rem(1) $primary_color;
                background-color: $white;
                
            }

        }
    }
}
</style>