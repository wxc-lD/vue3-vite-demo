import { ref, } from "vue";
export const registerUser = ref({
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "",
});
const validatePass2 = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("请再次输入密码"));
    } else if (value !== registerUser.value.password) {
        callback(new Error("两次输入密码不一致!"));
    } else {
        callback();
    }
};
export const registerRules = ref({
    name: [
        { message: "用户名不能为空", required: true, trigger: "blur" },
        {
            min: 2,
            max: 30,
            message: "长度在2到30个字符",
            trigger: "blur",
        },
    ],
    email: [
        { type: "email", message: "邮箱错误", required: true, trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
            min: 6,
            max: 30,
            message: "密码需要超过6位小于30位",
            trigger: "blur",
        },
    ],
    password2: [
        { required: true, message: "请输入密码", trigger: "blur" },
        {
            min: 6,
            max: 30,
            message: "密码需要超过6位小于30位",
            trigger: "blur",
        },
        { validator: validatePass2, trigger: "blur" },
    ],
});