export const setLogin = ()=>sessionStorage.setItem('isLogin','true')
export const setLogout = ()=>sessionStorage.setItem('isLogin','false')
export const isLogin = ()=>sessionStorage.getItem('isLogin') === 'true'