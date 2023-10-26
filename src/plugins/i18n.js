import { ref } from "vue"
import zh_tw from "../locales/zh-tw"
import en_us from "../locales/en-us"

let locale = ref(localStorage.getItem('locale'))
let localeData = {}
const setLocale = (data) => {
    if(data){
        locale.value = data
        localStorage.setItem('locale', data)
    }
}
setLocale()


const i18n = {
    install: (app, options) => {
        app.config.globalProperties.$t = (data) => {
            try{
                switch (locale.value) {
                    case 'en_us':
                        localeData = en_us
                        break;
                    case 'zh_tw':
                        localeData = zh_tw
                        break;
                    default:
                        localeData = zh_tw
                        break;
                }
                const splitData = data.split('.')
                let returnData = localeData[splitData[0]]
                for(let i = 1; i < splitData.length; i++){
                    returnData = returnData[splitData[i]]
                }
                if( typeof returnData !== 'string') return data
                return returnData

            }catch(e){
                console.log('err', e)
                return data
            }
        }

        app.provide('i18n', {
            locale,
            setLocale
        })

    }
}
export default i18n