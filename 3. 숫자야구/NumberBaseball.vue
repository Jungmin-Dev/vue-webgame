<template>
<div>
    <div>{{result}}</div>
        <form v-on:submit="onSubmitForm">
            <input type="text" v-model="value" refs="answer"/>
            <button type="submit">입력!</button>
        </form>
    <div> 시도:  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            value: '',
            result:''
        }
    }
}
</script>

<style>
    
</style>