import Vue from 'vue'
import Vuex from 'vuex'

import gift_1 from "../../images/gift_1.jpg"
import gift_2 from "../../images/gift_2.jpg"
import gift_3 from "../../images/gift_3.jpg"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        siteUrl: 'https://uppercase.kz',
        phoneSite: '+7 705 135 00 00',
        phoneSiteFormat: '+77051350000',
        step: 0,
        questions: {
            phone: '',
            phoneCallback: '',
            quest_1: '',
            quest_2: '',
            quest_3: '',
            quest_3_text: '',
            quest_4: '',
            quest_4_text: '',
            quest_5: '',
            quest_5_text: '',
            quest_6: '',
            quest_7: '',
            quest_8: '',
            quest_9: '',
            quest_10: '',
            quest_11: []
        },
        phoneCalback: '',
        isMobile: false,
        isCallBack: false,
        isCallBackSend: false,
        utm: {
            utm_source: false,
            utm_campaign: false,
            utm_medium: false,
            utm_term: false,
            utm_content: false
        }

    },
    mutations: {
        SET_UTM: (state,payload) => {
            state.utm.utm_source = payload.utm_source,
            state.utm.utm_content = payload.utm_source,
            state.utm.utm_campaign = payload.utm_campaign,
            state.utm.utm_medium = payload.utm_medium,
            state.utm.utm_term = payload.utm_term
        },
        nextStep(s, val){
            if (val){
                s.step = val
            }
            else s.step ++
        },
        prevStep(s, val){
            if (val){
                s.step = val
            }
            else s.step --
        },
        callBack(s){
            s.isCallBack = !s.isCallBack
        },
        skip(s, val){
            
            if (val === 1) s.questions.quest_1 = ''
            if (val === 2) s.questions.quest_2 = ''
            if (val === 3) s.questions.quest_3 = ''
            if (val === 4) s.questions.quest_4 = ''
            if (val === 5) s.questions.quest_5 = ''
            if (val === 6) s.questions.quest_6 = ''
            if (val === 7) s.questions.quest_7 = ''
            if (val === 8) s.questions.quest_8 = ''
            if (val === 9) s.questions.quest_9 = ''
            if (val === 10) s.questions.quest_10 = ''
            s.step++
        },
        handleResize(s) {
            if(window.innerWidth >= 768){
                s.isMobile = true
            }else{
                s.isMobile = false
            }
        }
    },
    actions: {
        setUtm: (context,utm) => {
            context.commit('SET_UTM',utm);
        },
        nextStep({commit}, val){
            commit('nextStep', val)
        },
        prevStep({commit}, val){
            commit('prevStep', val)
        },
        callBack({commit}) {
            commit('callBack')
        },
        skip({commit}, val){
            commit('skip', val)
        },
        handleResize({commit}) {
            commit('handleResize')
        }
    },
    getters: {
        utm : state=>state.utm,
        siteUrl: s => s.siteUrl,
        phoneSite: s => s.phoneSite,
        phoneSiteFormat: s => s.phoneSiteFormat,
        step: s => s.step,
        questions: s => s.questions,
        phoneCalback: s => s.phoneCalback,
        isMobile: s=> s.isMobile,
        isCallBack: s=> s.isCallBack,
        isCallBackSend: s=> s.isCallBackSend,
    }
})
