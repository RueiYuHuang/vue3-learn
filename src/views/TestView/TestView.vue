<script setup>
import { ref, watch, onMounted } from 'vue';
import axios from "axios";
const switchAdvanced = ref(false)
const isAdvanced = ref(false)
const installments = ref([
    {
        key: "",
        period_setting: 14,
        period_type: "days",
        installment: 4,
        fee_per_installment: 0,
        origin_fee_per_installment: 0,
        status: "disable"
    },
    {
        key: "",
        checked: false,
        period_setting: 1,
        period_type: "months",
        installment: 3,
        fee_per_installment: 0,
        origin_fee_per_installment: 0,
        status: "disable"
    },
    {
        key: "",
        checked: false,
        period_setting: 1,
        period_type: "months",
        installment: 6,
        fee_per_installment: 0,
        origin_fee_per_installment: 0,
        status: "disable"
    },
    {
        key: "",
        checked: false,
        period_setting: 1,
        period_type: "months",
        installment: 9,
        fee_per_installment: 0,
        status: "disable"
    },
    {
        key: "",
        checked: false,
        period_setting: 1,
        period_type: "months",
        installment: 12,
        fee_per_installment: 0,
        origin_fee_per_installment: 0,
        status: "disable"
    },
])
const fetchInit = async () => {
    try {
        const response = await axios.get('https://mocki.io/v1/47c71839-8edf-4246-aeb8-0cab6642c020')
        // const response = await axios.get('https://mocki.io/v1/29b5c5a1-554c-4185-b384-964c7133f318')
        switchAdvanced.value = response.data.is_advanced
        isAdvanced.value = response.data.is_advanced
        response.data.data.map((v1, i1) => {
            installments.value.map((v2, i2) => {
                if (v1.period_setting === v2.period_setting
                    && v1.period_type === v2.period_type
                    && v1.installment === v2.installment) {
                    v2.checked = true
                    v2.key = v1.key
                    v2.fee_per_installment = v1.fee_per_installment
                    v2.origin_fee_per_installment = v1.fee_per_installment
                    v2.status = 'enable'
                }
            })
        })
    } catch (err) {
    }
}
onMounted(() => {
    fetchInit()
})
const handleAdvancedSubmit = async () => {
    // await axios.put()
    isAdvanced.value = switchAdvanced.value
    // fetchInit()
    const array = ['value1', 'value2', 'value3', 'value4', 'value5']
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log('123:', index)
    }
    for (let index in array) {
        console.log('inIndex:', index)
        console.log('inValue:', array[index])
    }
    for (let [index, value] of array.entries()) {
        console.log('ofIndex:', index)
        console.log('ofValue:', value)
    }
    console.log('isAdvanced:', isAdvanced.value)
}
const handleInstallmentSubmit = async () => {
    // 新增
    const add = async (data) => {
        try {
            const payload = {
                period_type: data.period_type,
                period_setting: data.period_setting,
                installment: data.installment,
                fee_per_installment: data.fee_per_installment
            }
            await axiox.post(`https://customer-service/user/${user_id}/installment-setting`, payload)
        } catch (e) {
            console.log("ErrAdd")
        }
    }
    // 修改
    const put = async (data) => {
        try {
            const payload = {
                fee_per_installment: data.fee_per_installment
            }
            await axiox.put(`https://customer-service/user/${user_id}/installment-setting/${data.installment_id}`, payload)
        } catch (e) {
            console.log("ErrPut")
        }
    }
    // 刪除
    const del = async (data) => {
        try {
            await axiox.delete(`https://customer-service/user/${user_id}/installment-setting/${data.installment_id}`)
        } catch (e) {
            console.log("ErrDel")
        }
    }
    for (let i = 0; i < installments.value.length; i++) {
        const v1 = installments.value[i]
        // console.log("v1", v1)
        // 檢查否勾選 
        if (v1.checked === true) {
            // 檢查目前是否已啟用
            if (v1.status === 'enable') {
                // 檢查是否更動過資料 如有需更新
                if (v1.fee_per_installment !== v1.origin_fee_per_installment) {
                    // console.log('put', v1)
                    put(v1)
                }
            } else {
                // status === 'disable' 表示目前未啟用 需開通期數
                // console.log('add', v1)
                add(v1)
            }
        } else {
            if (v1.status === 'enable') {
                // 表示目前已啟用 需刪除期數
                // console.log('del', v1)
                del(v1)
            }
        }
    }
    fetchInit()
}
</script>

<template>
    <div class="container">
        <h2>Test</h2>
        <div class="layout">
            <article class="article1">
                <h3>開通狀態</h3>
                <label>
                    <input type="checkbox" v-model="switchAdvanced">
                    進階會員
                </label>
                <button class="btn" @click="handleAdvancedSubmit()">儲存</button>
            </article>
            <article class="article2">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>週期</th>
                            <th>分期數</th>
                            <th>每期金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in installments"
                            :class="{ bg: !isAdvanced && !(value.period_setting === 14 && value.period_type === 'days') }"
                            :key="'list' + index">
                            <td>
                                <input type="checkbox" v-model="value.checked"
                                    :disabled="!isAdvanced && !(value.period_setting === 14 && value.period_type === 'days')">
                            </td>
                            <td>
                                {{ value.period_setting }}
                                {{ value.period_type === 'days' ? '天'
                                    : value.period_type === 'weeks' ? '週'
                                        : value.period_type === 'months' ? '月'
                                            : ''
                                }}
                            </td>
                            <td>{{ value.installment }}</td>
                            <td>
                                <input type="number" v-model="value.fee_per_installment"
                                    :disabled="!isAdvanced && !(value.period_setting === 14 && value.period_type === 'days')">
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="submit">
                    <button class="btn" @click="handleInstallmentSubmit()">儲存</button>
                </div>
            </article>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    .layout {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .article1 {
            border: 2px solid var(--second-color);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .btn {
                border: 2px solid var(--second-color);
            }
        }

        .article2 {
            min-height: 20rem;
            border: 2px solid var(--second-color);
            padding: 1rem;

            .table {
                width: 80%;
                margin: 0 auto;
                border: 1px solid black;

                thead {
                    tr {
                        background-color: white;
                    }
                }

                tbody {
                    .bg {
                        background-color: #D1D1D1;
                        color: #FFFF;
                    }

                    td {
                        &:nth-child(1) {
                            width: 15%;
                            text-align: center;
                        }

                        &:nth-child(2) {
                            width: 25%;
                            text-align: center;
                        }

                        &:nth-child(3) {
                            width: 30%;
                            text-align: center;
                        }

                        &:nth-child(4) {
                            width: 30%;

                            input {
                                text-align: end;
                                width: 100%;
                                box-sizing: border-box;
                            }
                        }
                    }
                }
            }

            .submit {
                text-align: center;
                padding: 2rem;
            }

            .btn {
                border: 2px solid var(--second-color);
            }
        }
    }
}
</style>