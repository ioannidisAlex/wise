import axios from 'axios';

const token = "ya29.a0Aa4xrXMaVPWRk5XyQeNVa43IsKESIdFPGoGBufT0DwUPb0_feAG2d76_iDhuBDKR8ifCzDYCCDPp68XeyaY3BhLc1Rq_3gEtj88vdqT7cpDFv4Y10F36BinmX-RBqaON6mDuT2cztftf5mPN3DV_LcqxWk8eDbtQuwQATphgLi_tkvV7zWLoaiEYJiakemcBa_i-HGD_dkuGtac5EpG9SybIqL54rHFi95MyHrVYFweo5FgaCgYKATASARISFQEjDvL9mbdTtlbvcrUhr8nF2l5xng0246";

const instance = axios.create({
	baseURL: 'https://dialogflow.googleapis.com/v2/projects/v-bot-9ktl/agent/sessions/2ecdf11f-2260-a02c-1b85-990164021ba2:detectIntent',
	timeout: 1000,
  	headers: {'Authorization': 'Bearer '+token}
});

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

//interceptors 

export default instance;