const authAdmin = (to, from) => {
    console.log('beforeEnterFrom', from)
    console.log('beforeEnterTo', to)
    console.log(window)
    if(false){
        return true
    }else{
        // router.push('/about')
        return { name: 'about' }
    }

}

export default authAdmin