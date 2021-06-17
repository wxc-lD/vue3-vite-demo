
import { ref, } from "vue";

export const loginUser = ref({
  email: "",
  password: "",
});
export const rules = ref({
  email: [
    { type: "email", message: "邮箱错误", required: true, trigger: "blur" },
  ],
  password: [
    { required: true, message: "密码错误", trigger: "blur" },
    { min: 6, max: 30, message: "密码需要超过6位小于30位", trigger: "blur" },
  ],
});