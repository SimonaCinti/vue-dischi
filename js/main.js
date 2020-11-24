/*
************************
** Cd's Collection    **
************************
*/


var app = new Vue({
    el: '#app',
    data: {
       cds: [],
       selectedGenre: 'all',
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
    methods: {
        filterGenre(){
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(result => {
                    // call to db for cd list
                    let cdList = result.data.response;
                    // check genre select plus filter
                    if (this.selectedGenre !== 'all'){
                        cdList = cdList.filter(cd =>cd.genre.toLowerCase() === this.selectedGenre);                        
                    }
                    // return result
                    this.cds = cdList;
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                })
        }
    } // end Methods
})