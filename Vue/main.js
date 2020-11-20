var app = new Vue({
    el: '#root',
    data: {
        email: []
    },
    mounted: function(){
        this.test();
    },
    methods: {

        ajax: function(){
            let self = this;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta){

                let email = risposta.data.response;
                self.email.push(email);
            });

        },
        test: function(){

            for (var i = 0; i < 10; i++) {
                this.ajax();
            }
        }
    }
});
