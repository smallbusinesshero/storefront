import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    backgroundColor: "#fafafa",
    padding: "1px 20px",
  },
}));

export default (props) => {
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
    required = false,
  } = props;

  const classes = useStyles();

  return (
    <FormControl fullWidth={true} required={required} variant="outlined">
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
        rows={multiline ? 5 : 1}
        rowsMax={multiline ? 5 : 1}
        style={{ height: multiline ? "150px" : "auto" }}
      />
    </FormControl>
  );
};
