import axios from '../node_modules/axios'

Vue.component('modal', {
    data: {
        login: "222",
        password: "2222"
    },
    template: '#modal-template',
    methods: {
        checkUser() {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => {
                    this.authResult = response.data.bpi;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
});
