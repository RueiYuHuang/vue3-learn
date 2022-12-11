import { ref } from '@vue/reactivity';
var darkModel = ref(false)
export const changeColor = () => {
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
    darkModel.value = !darkModel.value
    var root = document.querySelector(":root")
    if(darkModel.value === true){
        //深色主題的顏色
        root.style.setProperty('--main-color', 'rgb(29, 37, 42)');
        root.style.setProperty('--second-color', 'rgb(34, 34, 34)');
        root.style.setProperty('--main-font-color', 'rgb(213, 213, 213)');
        root.style.setProperty('--second-font-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--font-hover-color', 'rgb(0, 61, 135)');
        root.style.setProperty('--button-color', 'rgb(0, 13, 30)');
        root.style.setProperty('--background-color', 'rgb(59, 59, 59)');
        root.style.setProperty('--input-background-color', 'rgb(59, 59, 59)');
    }else{
        //預設主題顏色
        root.style.setProperty('--main-color', 'rgb(248, 248, 248)');
        root.style.setProperty('--second-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--main-font-color', 'rgb(59, 59, 59)');
        root.style.setProperty('--second-font-color', 'rgb(66, 66, 66)');
        root.style.setProperty('--font-hover-color', 'rgb(35, 116, 255)');
        root.style.setProperty('--button-color', 'rgb(138, 183, 255)');
        root.style.setProperty('--background-color', 'rgb(196, 217, 255)');
        root.style.setProperty('--input-background-color', 'rgb(228, 228, 228)');
    }
}