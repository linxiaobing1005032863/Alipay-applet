 
const app = getApp();

Page({
  data: {
    username:'',
    password:''
  },

  onLoad() {
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
      },
      () => {
        // 获取用户信息失败
      }
    );
  },

  // onShow() {
  //   this.setData({ todos: app.todos });
  // },

  // onTodoChanged(e) {
  //   const checkedTodos = e.detail.value;
  //   app.todos = app.todos.map(todo => ({
  //     ...todo,
  //     completed: checkedTodos.indexOf(todo.text) > -1,
  //   }));
  //   this.setData({ todos: app.todos });
  // },
    //获取用户名
    getUsername(e) {
    this.username=e.detail.value;
    },
    //获取密码
    getPass(e){
    this.password=e.detail.value;
   },
  //登录
  login() {
    if(this.username==undefined||this.password==undefined){
      alert('请输入正确的登录信息')
    }else{
      my.navigateTo({ url: '../index/index' });
    }
   
  },
});
