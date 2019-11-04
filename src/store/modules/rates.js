import ratesService from './../../shared/services/rates.service';

export default {
    actions: {
        async getRates(ctx, currentRate) {
            const mainRates = ['EUR', 'USD', 'GBP'];

            ratesService.getRates(currentRate).then((res) => {
                const rates = res.data.rates;
                ctx.commit('updateRatesName', rates);
                ctx.commit('updateRatesValue', rates);
            })

            for (let i = 0; i < mainRates.length; i++) {
                ratesService.getRates(mainRates[i]).then((res) => {
                    const rates = res.data.rates;
                    ctx.commit('updateMainRates', rates);
                })
            }
        }
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

        // updateExchangeTo(state, rates) {
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