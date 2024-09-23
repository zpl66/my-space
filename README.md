# my-space

## 0. 总体结构

重点在于`components`和`views`,前期准备工作是`src/router/index.js`和`App.vue`。

* **Components(组件)**

  * **组件** 就像应用中的**小积木**，它是一个**可复用的小模块**。你可以把组件理解为**功能单元**，比如一个按钮、一个导航栏、或者一个用户信息卡片。每个组件都完成一个特定的功能，然后这些组件可以组合在一起构建一个更大的页面或应用。

  * **例子**
    * 一个**导航栏**组件（显示导航菜单）。
    * 一个**用户信息卡片**组件（显示用户的头像、名字和简介）。
    * 一个**评论框**组件（允许用户输入和提交评论）。

* **Views(视图)**
  * **视图** 就像应用中的**大页面**，它通常对应应用中的**一个完整页面或路由**。比如，首页、关于我们页、产品详情页等。视图更像是**页面的整体布局**，它会包含多个组件。
  * **例子**
    * **首页视图**：包含了多个组件，比如横幅、热门产品列表等。
    * **用户个人资料视图**：包含用户信息组件、用户帖子组件等。

**小tips**

> 全选：`CTRL`+`A`
>
> 快速对齐：`SHIFT`+`ALT`+`F`
>
> `.vue`文件必须包含至少两个单词(即两个大写字母，且使用`大驼峰命名法`)
>
> 要把导入的时候`src`改为`@`，比如`import UserProfilePosts from 'src/components/UserProfilePosts.vue'`改为`import UserProfilePosts from '@/components/UserProfilePosts.vue'`，理论上来说前者也是对的，但就是会报错，但改为后者就没事了（别问，问就是玄学）

## 1. `.vue`文件结构

### 1.1 总体结构

对于每个`.vue`文件，都有三部分：`<template></template>`,`<script></script>`,`<style></style>`,实际对应`HTML`,`JavaScript`,`CSS`三部分。

### 1.2 `<template>`部分

语法和HTML一样

### 1.3 `<script>`部分

```javascript
import ContentBase from '../components/ContentBase'

export default {
  name: 'HelloWorld',
  components: {
    ContentBase,
  }
}
```

* 将`.vue`看作一个对象，则`export default`则是将`.vue`这个`组件`或者`视图`导出，让其他地方如 `App.vue` 或 `router/index.js`）可以引入这个组件并使用它。
* `name`:`name` 是 Vue 组件的一个选项，用来给当前组件命名。
* `components`:告诉当前页面需要用到哪些组件(比如`ContentBase`)，使用之前需要导入(即`import ContentBase from '../components/ContentBase'`)

### 1.4 `<style>`部分

语法和CSS一样，不过建议加上`scoped`,即`<style scoped>`。其只会作用在当前组件的 DOM 结构中，而不会影响到其他组件



## 2. router/index.js

**作用**：Vue.js 项目中 **Vue Router** 的配置文件，负责定义应用的路由规则，决定不同 URL 对应的组件或页面

**举个例子**

假设我们在`router/index.jx`有

```javascript
{
    path: '/login',
    name: 'login',
    component: LoginView
  },
```

在`view/LoginView.vue`有

```vue
export default {
  name: 'LoginView',
  components: {
      ContentBase,
  }
}
```

那么，当我们输入网址：`localhost:8080/login`时，就会跳转到登录界面(`LoginView.vue`)了



## 3. App.vue

`App.vue` 是整个应用的**根组件**，它的作用是充当 Vue 应用的**入口组件**。几乎所有 Vue 项目都从 `App.vue` 开始，它包含了应用的全局布局和结构，并且通过它加载其他组件。

```vue
<template>
	<NavBar />
	<router-view />
</template>
```

这段代码表明，对于每个页面，最顶端都是导航栏(`<NavBar />`)，下面的`<router-view />`表示一个占位符，展示不同页面，比如`LoginView.vue`等

## 4. `view`和`components`

对于一些组件，可以直接去[Bootstrap](https://v5.bootcss.com/docs/getting-started/introduction/)上copy下来，之后可以微调，让页面看起来更加和谐。

* `<slot></slot>`:`slot` 在 Vue 里就像是一个**占位符**，可以让父组件把自己想要的内容放进子组件指定的位置。这样，你可以让一个组件变得非常灵活，而不用事先把内容写死。

### 4.1 `UserProfileView.vue`

#### 4.1.1 `<template>`部分

```vue
<div class="col-3">
	<UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
	<UserProfileWrite @post_a_post="post_a_post" />
</div>
<div class="col-9">
	<UserProfilePosts :posts="posts" />
</div>
```

* **`@follow="follow"`**:这是Vue.js中的**事件绑定**，，意味着当子组件触发 `follow` 事件时，父组件会调用 `follow()` 函数。这用于处理关注操作。
  * `@`是`v-on:`的简写，表示监听一个事件
  * `follow`是事件的名称，指子组件会触发一个名为`follow`的事件
  * `="follow"`表示当子组件触发 `follow` 事件时，父组件会调用父组件中定义的 `follow` 方法。这个方法会根据父组件的逻辑处理相关操作。
  * 比如，`@follow1="follow"`,表示监听子组件触发的`follow1`事件，并在父组件中调用`follow`方法
* **`:user="user"`**：这是 Vue.js 中的**属性传递**，`user` 对象是父组件的数据，通过 `v-bind`（即 `:` 的简写）传递给子组件 `UserProfileInfo`，用于展示用户信息。

#### 4.1.2 `<script>`部分

```sql
setup() {
        const user = reactive({
            id: 1,
            username: "iKun",
            lastname: "Xiao",
            firstname: "Heizi",
            followerCount: 0,
            is_followed: false,
        });

        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "Dumpling是个大帅逼",
                },
                {
                    id: 2,
                    userId: 1,
                    content: "Dumpling是个大大帅逼",
                },
                {
                    id: 3,
                    userId: 1,
                    content: "Dumpling是个大大大帅逼",
                },
            ]
        });

        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        };

        const post_a_post = (content) => {
            posts.count++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        };

        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post
        }

    }
```

* `setup()`函数：
  * 是composition api的主要入口。
  * 通俗的说，**setup 函数**就是组件启动时最先运行的地方，里面包含了所有的**数据、方法和逻辑**，它告诉 Vue 组件应该如何工作，以及该组件需要哪些数据和功能
* `const posts = reactive`
  * `reactive`是Vue.js 提供的函数，用于创建深层次的响应式对象
  * **响应式对象**：当你对一个数据对象进行修改时，Vue 能自动检测到这个变化，并更新用户界面（UI）。简单来说，就是当数据发生变化时，界面也会随之自动更新，而开发者不需要手动去更新界面。
* `const follow = () =>`:[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### 4.2 `UserProfileInfo.vue`

#### 4.2.1 `<script>`

```vue
props: {
        user: {
            type: Object,
            required: true,
        },
    },
```

* `props`:是Vue.js用来定义父组件传递给子组件的数据的地方。通过 `props`，父组件可以将数据传递给子组件，子组件可以在内部使用这些数据。
* `user`:`user` 是这个组件所接收的一个 `prop` 的名称。它表示父组件传递的用户数据对象。在模板中，子组件可以通过 `props.user` 来访问这个用户对象。

​	

#### 4.2.2 `<template>`

```vue
{ fullName }
```

是 Vue.js 的**插值表达式**，用于将 JavaScript 变量的值显示在 HTML 中

```vue
<button v-if="!user.is_followed" @click="follow"
```

**`v-if="!user.is_followed"`** 是 Vue.js 的**条件渲染指令**。如果 `user.is_followed` 为 `false`，即用户**尚未被关注**，这个按钮会显示。

**`@click="follow"`**：这是 Vue.js 的**事件绑定**，表示当用户点击这个按钮时，会调用组件中定义的 `follow()` 方法，执行关注的逻辑。

### 4.3 `UserProfilePosts.vue`

知识点和上面一样

### 4.4 `UserProfileWrite.vue`

```vue
let content = ref('');
```

* `ref` 是 Vue 3 中提供的一个函数，用来定义**响应式的数据**。通过 `ref` 创建的变量在 Vue 的模板和逻辑中会保持响应式，也就是说，当 `content` 的值发生变化时，任何依赖它的模板或计算属性都会自动更新。

* `ref('')` 中的 `''` 是这个变量的初始值，表示 `content` 的初始值是一个空字符串。

