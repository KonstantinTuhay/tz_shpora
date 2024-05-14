import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import "react-phone-number-input/style.css";

const AuthorizationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    console.log("Вы вошли");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя:</label>
        <Controller
          name="text"
          control={control}
          rules={{ required: "Поле обязательно для заполнения" }}
          render={({ field }) => <Input {...field} placeholder="Введите имя" />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
        <label>Пароль:</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 6,
              message:
                "Пароль должен быть не меньше 6 символов и содержать хотя бы одну заглавную букву",
            },
            validate: (letter) => {
              return (
                letter
                  .split("")
                  .filter((item) => !isFinite(item))
                  .map((item) => item === item.toUpperCase())
                  .includes(true) ||
                "Пароль должен содержать хотя бы одну заглавную букву"
              );
            },
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Введите пароль" />
          )}
        />
        <p>{errors.password?.message}</p>
      </div>

      <Button type="primary" htmlType="submit" disabled={!isValid}>
        Войти
      </Button>
    </form>
  );
};

export default AuthorizationForm;
