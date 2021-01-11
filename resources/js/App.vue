<template>
    <div>
        <Nav />
        <Home />
        <HeaderTitles />
        <Content />
        <notifications group="input" position="bottom right"/>
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import HeaderTitles from './components/HeaderTitles.vue'
import Content from './components/Content.vue'
import { mapActions } from 'vuex'

export default {
    name: 'App',
    props: {
        lang: {
            type: String,
            default: 'ru'
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        ...mapActions([
        'handleResize'
        ])
    },
    components: {
        Nav,
        Home,
        HeaderTitles,
        Content
    }
}
</script>