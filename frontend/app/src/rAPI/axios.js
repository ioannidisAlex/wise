import axios from 'axios';

const token = "ya29.a0Aa4xrXP5GhxfEgP7invY3af-jzlPoNGVokvIVm0fEAHgcSopWqaRiAxupqZ4p9_HmxUHrUL17Q8dqVrBUMYNvaWzvMXMx9mMOWalZVrmACdSTMc0u0Fs3GfPwOI7OTcirMrUBoaR5b880diDlLfHriUP8NqbTFC2Lx3rFmV7wdk39hTM1rvuT8g8PguMoq76oqO-pmvS065UPxmmAB-BB_T-sPxVKOWgt4JVOa_3CNeDa4caCgYKATASARISFQEjDvL9G-qGGLLRxhS-QerLX_xQHw0246";

const instance = axios.create({
	timeout: 1000,
  	headers: {'Authorization': 'Bearer '+ token}
});

instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}

//interceptors 

export default instance;