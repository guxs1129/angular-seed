/**
 * Created by 51375 on 2017/7/8.
 */
import url from '_config/system.js';
console.log('相对路径配置：' + JSON.stringify(url));

class loginCtrl {
    constructor(http, $state) {
        'ngInject';
        this.$state = $state;
        [this.http, this.name] = [http, 'login'];
    }
    login() {
        // this.http.get({userName: 'link', userPassword: '23333'}, url.login, (data) => {
        //     console.log(data)
        // });
        this.showlogin = true;
        this.$state.go('home')
    }
}
loginCtrl.$inject = ['http', '$state'];
export default loginCtrl