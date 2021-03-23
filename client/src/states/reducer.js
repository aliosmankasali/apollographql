
export const userReducer = (state, action)=>{
    switch (action.type){
        case 'LOGIN_LOGOUT':
            return{
                ...state,
                user:null,
                token:"",
                isLogin:{durum:false, message:"Oturum Açılmadı."}

            }
    }
}