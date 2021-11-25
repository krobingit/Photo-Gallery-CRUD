import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useFormik } from "formik";
import * as yup from 'yup';
export const formValidationSchema = ()=> yup.object({
  name: yup.string().required("Required Field"),
  displaypic: yup.string().required("Required Field").url("Enter a valid URL"),
  username: yup.string().required("Required Field").min(5,"Min 5 Characters"),
 email: yup.string().required("Required Field"),
  about: yup.string().required("Required Field"),
})
export function AddUser() {
   const { handleSubmit, values, handleChange, handleBlur, errors, touched }
  = useFormik({
    initialValues: {
      name: "", displaypic: "", username: "", email: "",
about:""},
  validationSchema: formValidationSchema,
  onSubmit: (newUser) => {
    addUser(newUser)
  },
 })
  const history = useHistory();
  const addUser = (newUser) => {
  fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/list-users`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }).then(() => history.push("/users"))
}

    const styles = { style: { fontSize: "1.8rem", margin: "1.2rem 0" } }
  const btnstyles = { margin: "2rem", fontSize: "1.5rem" }
  const helperTextStyle = {
    style: {
      fontSize: '1.5rem', margin: "0"
    }
  };
    return (

      <form onSubmit={handleSubmit} className="addUser-Form">
        <h1 className="TITLE"><PersonAddAltIcon style={{ fontSize: "4rem" }} /> Create User Here..</h1>
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.name && touched.name} helperText={errors.name && touched.name && errors.name} variant="standard" value={values.name} id="name" name="name" onChange={handleChange} onBlur={handleBlur} label="Name" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.displaypic && touched.displaypic} helperText={errors.displaypic && touched.displaypic && errors.displaypic}  variant="standard" value={values.displaypic} id="displaypic" name="displaypic" onBlur={handleBlur} onChange={handleChange} label="Display Picture URL" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.email && touched.email} helperText={errors.email && touched.email && errors.email} variant="standard" value={values.email} id="email" name="email" onBlur={handleBlur} onChange={handleChange} label="Email" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.username && touched.username} helperText={errors.username && touched.username && errors.username} variant="standard" value={values.username} id="username" name="username" onBlur={handleBlur} onChange={handleChange} label="Username" />
        <TextField FormHelperTextProps={helperTextStyle} inputProps={styles} InputLabelProps={styles} error={errors.about && touched.about} helperText={errors.about && touched.about && errors.about} variant="standard" value={values.about} id="about" name="about" onBlur={handleBlur} onChange={handleChange} label="Bio" />
        <Button type="submit" style={btnstyles} variant="contained">Add User</Button>
      </form>
    );

}
