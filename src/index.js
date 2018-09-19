// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	let integer, rest;
	let coins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
	let exchange = {};
	if(currency > 10000){
		return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}
	if(currency <= 0){
		return {};
	}
    for(let value in coins){
    	integer = Math.floor(currency / coins[value]);
    	rest = currency %  coins[value];
    	if(integer == 0){
    		continue;
    	}
    	exchange[value] = integer;
    	currency = rest;
    	if(rest == 0){
    		break;
    	}
    }
    return exchange;
}
