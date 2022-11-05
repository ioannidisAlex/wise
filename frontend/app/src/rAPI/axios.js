import axios from 'axios';

const token = "ya29.a0Aa4xrXOnz87QUbXqiLttbwAhPOWg05-4-ZZp8Wnwgcvrg_03Z9YNo0M9cN2p0m-FKCsY2Ztyu_r2Khcs8Hye9WGTHvym8vV-L0deIQKFbD4qxJkoshGKprqvP_VVpUclClp2DjJ3xq2wg5H5v0lcdu3zzXU3ntlLEuP3dkRkTWNCCOQWsSJJWn1gnJdsNAOglN1BV6Th0jcM70gYEQm8_7_jPs853RDvU5GnGM13I3m9MjgaCgYKATASARISFQEjDvL9pLtqkcd18gPr3ktt55yC1Q0246";

const instance = axios.create({
	timeout: 1000,
  	headers: {'Authorization': 'Bearer '+ token}
});

instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}

//interceptors 

export default instance;