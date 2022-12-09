import axios from "axios";
import { ref } from "@vue/runtime-core";

export const useSubmitForm = () => {
    const errorMessage = ref([])
    //表單物件
    const formData = ref({})
    //表單內容變動
    const formDataChange = (e) =>{
        // console.log("e.target.value:", e.target.value)
        formData.value = {...formData.value , [e.target.name]: e.target.value}
    }
    //送出表單
    const formDataSubmit = async () => {
        //需進行表單驗證
        try {
            const response = await axios.post(
                'http://XXXXXXXX',
                formData,
                { withCredentials: true }
            )
            formData.value = {}
            alert('表單已送出')
        } catch (err) {
            errorMessage.value = '表單傳送失敗'
            alert(errorMessage.value)
        }
    }

    return { formData, formDataChange, formDataSubmit, errorMessage }    
}