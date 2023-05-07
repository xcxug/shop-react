// 会员登录
function login(data) {
    return {
        type: "login",
        data: data
    }
}

// 会员退出
function outLogin() {
    return {
        type: "outLogin",
        data: {}
    }
}

export {
    login,
    outLogin
}