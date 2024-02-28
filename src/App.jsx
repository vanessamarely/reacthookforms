import './App.css'
import Form from './components/Form'
import HookForm from './components/HookForm';
import FormHookForm from "./components/HookForm";
import ContactForm from "./components/ContactForm";
import FormYup from "./components/FormYup";
import Yup from "./components/Yup";
import ExerciseForm from "./components/ExerciseForm";

function App() {
  return (
    <>
      <h1>React Form UseState</h1>
      <Form />
      <hr />
      <h2>React Hook Form</h2>
      <HookForm />
      <h3>Otro ejemplo - React Hook Form</h3>
      <FormHookForm />
      <h3>Contact Form</h3>
      <ContactForm />
      <hr />
      <h2>React Hook Form - Yup</h2>
      <FormYup />
      <h3>React Hook Form - Yup</h3>
      <Yup />
      <hr />
      <h2>Ejercicio</h2>
      <ExerciseForm />
    </>
  );
}

export default App
