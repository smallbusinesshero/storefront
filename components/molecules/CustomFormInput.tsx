import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    backgroundColor: "white",
    padding: "1px 20px",
  },
}));

export default (props) => {
  const classes = useStyles();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    name,
    placeholder,
    children,
    type,
    multiline,
  } = props;

  return (
    <FormControl fullWidth={true} required={true} variant="outlined">
      <InputLabel
        htmlFor={name}
        variant="outlined"
        className={classes.label}
        error={touched[name] && Boolean(errors[name])}
        shrink={true}
      >
        {children}
      </InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type={type || "text"}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        autoFocus={true}
        placeholder={placeholder}
        multiline={multiline || false}
      />
    </FormControl>
  );
};
