<template>
    <div>
        <form @submit.prevent="saveData">
            <div :class="errors.has('name') ? 'is-danger' : 'is-success'">
                <input type="text" v-validate="'required|min:3|max:10'" placeholder="Nome" name="name" id="" v-model="userData.name">
                <span v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>             
            
            <hr>

            <div :class="errors.has('email') ? 'is-danger' : 'is-success'">
                <input type="email" v-validate="'required|email'" placeholder="Email" name="email" id="" v-model="userData.email">
                <span v-show="errors.has('email')">{{errors.first('email')}}</span> 
            </div> 
            
            <hr>
            <input type="number" placeholder="Idade" name="idade" id="" v-model.number="userData.idade">
            <hr>
            <input type="radio" name="sex" value="M" v-model="userData.sex"> Masculino
            <input type="radio" name="sex" value="F" v-model="userData.sex"> Feminino
            <hr>
            <select name="cidade" id="" v-model="userData.cidade">
                <option value="">Selecione o cidade</option>
                <option value="Porto">Porto</option>
                <option value="Matosinhos">Matosinhos</option>
                <option value="Vila do Conde">Vila do Conde</option>
            </select>
            <hr>
            <label for="agree">Concordo com os termos e condições</label>
            <input type="checkbox" id="agree" v-model="terms">
            <hr>
            <textarea name="mensagem" id="" cols="30" rows="10" v-model="description"></textarea>
            <hr>
            <button type="submit" id="submit">Enviar</button>
        </form>
        <div v-show="isSubmited">
            {{userData}}
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return {
            userData: {
                name: "",
                email: "",
                idade: '',
                sexo: 'M',
                cidade: '',
            },
            terms: true,
            description: '',
            isSubmited: false,
        }
    },

    methods: {
        saveData(){
            alert();
            this.$validator.validateAll().then((result) => {
                if(result){
                    alert('teste');
                    this.isSubmited = true
                    return;
                }
            });
                        
        }
    }

}
</script>

<style scooped>
.is-danger{
    border: 1px solid red;
}
.is-danger span {
    color: red;
}

.is-success input{border: 1px solid green}

</style>