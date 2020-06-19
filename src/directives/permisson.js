
import store from '@/store'

//自定义指令v-permisson
// 细粒度的控制按钮的操作权限
export default permisson = {

    inserted(el, binding) {

        // 当前按钮需要的角色列表
        const { value: requiredRoles } = binding; //获取执行绑定的值

        // 获取当前用户角色列表
        const userRoles = store.getters && store.getters.roles;


        if (userRoles && userRoles instanceof Array && userRoles.length > 0) {
            // 判断用户角色中是否有按钮要求的角色
            const hasPermission = requiredRoles.some(role => {
                return userRoles.includes(role);
            });

            // 如果没有权限则删除当前dom
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(`需要指定按钮要求角色数组，如v-permission="['admin','editor']"`);
        }

    }

}
