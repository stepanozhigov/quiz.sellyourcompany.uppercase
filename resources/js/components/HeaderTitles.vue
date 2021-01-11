<template>
    <section class="questHeader" v-if="$store.state.step >= 1 && $store.state.step <= 11">
        <div class="questHeader__wrapper">
            <div class="questHeader__items">
                <span class="questHeader_close close" @click="$store.state.step = 0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18">
                        <path fill="none" stroke="#898886" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="1.5" d="M1 1l16 16"/>
                        <path fill="none" stroke="#898886" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="1.5" d="M17 1L1 17"/>
                    </svg>
                </span>
                <div class="questHeader__items_item">
                    
                    <div class="questHeader_step" v-if="$store.state.step >= 1 && $store.state.step <= 10" v-text="$ml.with(`${$store.state.step}/10`).get('header_step')"/>
                    <div class="questHeader_step" v-if="$store.state.step == 11" v-text="$ml.get('header_step_cont')"/>

                    <div class="questHeader_title" v-if="$store.state.step == 1" v-html="$ml.get('header_title_1')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 2" v-html="$ml.get('header_title_2')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 3" v-html="$ml.get('header_title_3')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 4" v-html="$ml.get('header_title_4')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 5" v-html="$ml.get('header_title_5')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 6" v-html="$ml.get('header_title_6')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 7" v-html="$ml.get('header_title_7')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 8" v-html="$ml.get('header_title_8')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 9" v-html="$ml.get('header_title_9')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 10" v-html="$ml.get('header_title_10')"/>
                    <div class="questHeader_title" v-if="$store.state.step == 11" v-html="$ml.get('header_title_11')"/>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'HeaderTitles'
}
</script>
<style lang="scss">
@import '../../sass/mixins.scss';
.questHeader{
    box-shadow: 0 rem(8) rem(16) rgba(0, 0, 0, 0.16), 
                inset 0 rem(-1) 0 rgba(0, 0, 0, 0.08);

    &__wrapper{
        @include wrapper();
    }
    &__items{
        @include row-flex();
        position: relative;
        box-sizing: border-box;
        height: rem(168);
        padding-top: rem(48);
        
        @include above($break_sm) {
            height: rem(224);
            padding-top: rem(80);
        }
        @include above($break_lg) {
            padding-top: rem(64);
        }

        &_item{
            @include col();
            @include size(24);
            text-align: center;
        }
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
    &_close{
        position: absolute;
        right: rem(8);
        top: rem(16);
        @include above($break_sm) {
            top: rem(24);
        }
    }
}
</style>