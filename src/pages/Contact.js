import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const Contact = () => {
  // e09 - 4:21:38
  const schma = yup.object().shape({
    name: yup.string().required("نام اجباری است "),
    email: yup.string().email("ایمیل نامعتبر").required("ایمیل اجباری است"),
    age: yup
      .number()
      .positive()
      .min(18, "حداقل سن مجاز ۱۸ سال است")
      .max(100, "حداکثر سن مجاز ۱۰۰ سال است")
      .required("سن اجباری است"),
    phone: yup.string().required("شماره تلفن اجباری است"),
    password: yup
      .string()
      .min(6)
      .matches(/[a-z]+/)
      .matches(/[A-Z]+/)
      .required("پسورد اجباری است"),
    confrimpassword: yup
      .string()
      .oneOf([yup.ref("password")], "پسوردها مطابقت ندارند")
      .required("تایید پسورد اجباری است"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schma) });
  const onformsubmit = (data) => {
    // console.log("form submitted");
    console.log(data);
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form onSubmit={handleSubmit(onformsubmit)}>
        <label>
          Name:
          <input type="text" name="name" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <br />

        <label>
          age:
          <input type="number" name="age" {...register("age")} />
          {errors.age && <p>{errors.age.message}</p>}
        </label>
        <br />

        <label>
          phone:
          <input type="text" name="phone" {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </label>
        <br />

        <label>
          password:
          <input type="text" name="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <br />

        <label>
          confrimpassword:
          <input
            type="text"
            name="confrimpassword"
            {...register("confrimpassword")}
          />
          {errors.confrimpassword && <p>{errors.confrimpassword.message}</p>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
