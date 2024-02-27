import './App.css'
import Form from './components/Form'
import HookForm from './components/HookForm';
import FormYup from './components/Yup';

function App() {
  return (
    <>
      <h1>React Form</h1>
      <Form />
      <h2>React Hook Form</h2>
      <HookForm />
      <h3>React Hook Form</h3>
      <FormYup />
    </>
  );
}

export default App
