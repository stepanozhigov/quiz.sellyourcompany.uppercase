<template>
    <section class="home" v-if="$store.state.step == 0">
        <div class="home__wrapper">
            <div class="home__items">
                <div class="home__items_item">
                    <h1 class="home_title" v-html="$ml.get('title')"/>
                    <p class="home_intro" v-html="$ml.get('subtitle')"/>
                </div>
                <div class="home__items_item">
                    <button class="btn btn-pulse btn_effect home_btn" @click="$store.state.step++" v-html="$ml.get('btn')"/>
                    <a :href="$store.state.siteUrl" class="home_link" v-html="$ml.get('site_link')"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>
@import '../../sass/mixins.scss';
.home{
    background-image: url('../../images/home_bg_sm.jpg');
    background-size: cover;
    background-position: center;
    @include above($break_sm) {
        background: none;
    }
    &__wrapper{
        @include wrapper();
        display: flex;
        min-height: calc(100vh - 80px - 44px - 22px);

        @include above($break_sm) {
            min-height: calc(100vh - 80px - 32px);
            padding-bottom: rem(32);
        }
        @include above($break_lg) {
            height: rem(560);
            min-height: auto;
            max-height: calc(100vh - 80px);
            padding-bottom: 0;
        }
    }
    &__items{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding-top: rem(32);
        padding-bottom: rem(32);
        box-sizing: border-box;
        @include above($break_sm) {
            background-image: url('../../images/home_bg_lg.jpg');
            background-size: cover;
            background-position: center;
        }
    }
    &_city{
        font-size: rem(15);
        color: #f5f5f5;
        letter-spacing: rem(8);
        text-transform: uppercase;
        line-height: 1.2;
        margin-bottom: rem(18);
        @include above($break_sm) {
            font-size: rem(18);
            line-height: 1;
        }
    }
    &_title{
        color: #f8f7f6;
        font-weight: 700;
        font-size: rem(26);
        line-height: 1.25;
        letter-spacing: rem(-0.2);
        margin-bottom: rem(24);

        @include above($break_sm) {
            font-size: rem(48);
            letter-spacing: rem(-1);
            line-height: 1.13;
            padding-left: rem(16);
            padding-right: rem(16);
        }
        @include above($break_lg) {
            font-size: rem(72);
            letter-spacing: rem(-1.2);
        }
    }
    &_intro{
        line-height: 1.43;
        color: #f8f7f6;
        margin-bottom: rem(32);
        @include above($break_sm) {
            font-size: rem(18);
            letter-spacing: rem(-0.3);
            max-width: rem(580);
            margin-left: auto;
            margin-right: auto;
        }
        @include above($break_lg) {
            font-size: rem(24);
            letter-spacing: rem(-0.4);
        }
    }
    &_link{
        color: #faf9f8;
        letter-spacing: rem(-0.3);
        line-height: 1;
        margin-top: rem(24);
        display: inline-block;
        position: relative;
        @include above($break_sm) {
            font-size: rem(18);
        }
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            height: rem(1);
            width: 100%;
            background: $white;
            transition: all .3s ease-out;
        }
        &:hover::before{
            bottom: rem(-2);
        }
    }
}
</style>