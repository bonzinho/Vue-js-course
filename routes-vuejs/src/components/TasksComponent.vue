<template>
    <div>
        {{title}}
        <p>Parametro: {{id}} </p>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "Componente de tarefas",
        }
    },
    props: [
        'id'
    ]
}
</script>

<style scoped>

</style>