import { Singup, SignIn } from "./types";

export const checkValidation = <U extends keyof Singup | keyof SignIn>(
  requiredVal: U[],
  keys: string[],
  entries: SignIn & Singup
) => {
  if (!requiredVal.every((key) => keys.includes(key))) {
    const notIncluded = requiredVal.filter((key) => !keys.includes(key));
    const included = requiredVal
      .filter((key) => key.includes(key))
      .filter((key) => !entries[key]);
    const notInputed = notIncluded
      .concat(included)
      .sort()
      .map((item, i, arr) => {
        if (i === 0) return item;
        if (arr[i] !== arr[i - 1]) return item;
        return;
      });
    console.log(notInputed);
    throw new Error(`Please Fill The ${notInputed.join(" and ")} inputs`);
  }
  if (requiredVal.filter((key) => !entries[key]).length > 0) {
    const notInputed = requiredVal
      .filter((key) => key.includes(key))
      .filter((key) => !entries[key]);
    throw new Error(`Please Fill The ${notInputed.join(" and ")} inputs`);
  }
};
