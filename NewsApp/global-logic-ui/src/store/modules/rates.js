import ratesService from './../../shared/services/rates.service';

export default {
    actions: {
        async getRates(ctx, data) {
            const mainRates = ['EUR', 'USD', 'GBP'];

            ratesService.getRates(data.currentRate).then((res) => {
                const rates = res.data.rates;

                // ctx.commit('updateExchangeTo', data)
                ctx.commit('updateRatesName', rates);
                ctx.commit('updateRatesValue', rates);
            })

            for (let i = 0; i < mainRates.length; i++) {
                ratesService.getRates(mainRates[i]).then((res) => {
                    const rates = res.data.rates;
                    ctx.commit('updateMainRates', rates);
                })
            }
        },
    },

    mutations: {
        updateRatesName(state, rates) {
            for (let i in rates) {
                state.ratesName.push(i);
            }
        },

        updateRatesValue(state, rates) {
            state.ratesValue = rates
        },

        updateMainRates(state, rates) {
            state.mainRates.push(rates);
        },

        // updateExchangeTo(state, data) {
        //     let exchangeTo = state.ratesValue[data.exchangeName] * data.rateAmount;
        //     exchangeTo = exchangeTo + "";
        //     exchangeTo = exchangeTo.split(".");
        //     let array = exchangeTo[0].split("");
        //     exchangeTo[0] = "";
        //     for (let i = 0; i < array.length; i++) {
        //         if (array.length > 3) {
        //             if (i % 3 == 0) {
        //                 if (i < array.length - 1) {
        //                     array[i] = array[i] + ",";
        //                 } else {
        //                     continue;
        //                 }
        //             }
        //         }
        //     }
        //     exchangeTo[0] = array.join("");
        //     exchangeTo[1] = exchangeTo[1].slice(0, 4);
        //     state.exchangeTo = exchangeTo;  
        // }
    },

    getters: {
        getRatesName(state) {
            return state.ratesName;
        },

        getRatesValue(state) {
            return state.ratesValue;
        },

        getMainRates(state) {
            return state.mainRates;
        }
    },

    state: {
        ratesName: [],
        ratesValue: [],
        mainRates: [],
        exchangeTo: [],
    }
}