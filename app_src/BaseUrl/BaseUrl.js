const BaseApi={
   baseURL:'http://localhost:8000',
    authKey:'authKey',
    baseDbUrl:'',
  }

module.exports ={
	
	getBaseApi(){
		return BaseApi
	}
}