/*
************************
** Cd's Collection    **
************************
*/


var app = new Vue({
    el: '#app',
    data: {
       cds: [],
    }, // end Data
    created(){
        // Get  Cd List
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                // Copy of the cd list 
                this.cds = result.data.response;
                
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }, // end Created
})