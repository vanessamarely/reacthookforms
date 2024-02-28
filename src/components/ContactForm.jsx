import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio" })}
          />
          {touchedFields.nombre && errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de correo electrónico inválido",
              },
            })}
          />
          {touchedFields.email && errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            {...register("message", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 10,
                message: "El mensaje debe tener al menos 10 caracteres",
              },
            })}
          ></textarea>
          { touchedFields.message && errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit"> Enviar</button>
      </form>
    </>
  );
};

export default ContactForm;
