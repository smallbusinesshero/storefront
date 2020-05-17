import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
const objectPath = require("object-path");

const useStyles = makeStyles((theme) => ({
  label: {
    transform: "translate(0, -15px) scale(0.75)",
  },
  error: {
    marginTop: 5,
    color: "red",
    fontSize: "0.8em",
    display: "inline-block",
  },
  productsImagePreview: {
    borderColor: "#CCC",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 0,
    overflow: "hidden",
    margin: "10 auto",
    maxHeight: 250,
    width: "100%",
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
    setFieldValue,
  } = props;

  const classes = useStyles();

  const setFileDataUrl = (name, file) => {
    if (!file) return;

    var reader = new FileReader();

    reader.onloadend = () => {
      const fileOrigin = file;
      const el: any = document.getElementById(name);

      // Extend file object with preview data
      fileOrigin.preview = reader.result;
      setFieldValue(name, fileOrigin, false);

      el.style.display = "block";
      el.style.border = "#CCC 1px solid";
    };

    reader.readAsDataURL(file);
  };

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
        value={type !== "file" ? objectPath.get(values, name) : undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          // Handle Files for upload
          if (setFieldValue && type === "file") {
            console.log(e.target.files[0]);
            setFileDataUrl(name, e.target.files[0]);
          } else {
            handleChange(e);
          }
        }}
        onBlur={!!objectPath.get(values, name) ? handleBlur : undefined}
        error={touched[name] && Boolean(errors[name])}
        autoFocus={true}
        placeholder={placeholder}
        multiline={multiline || false}
        rows={multiline ? 5 : 1}
        rowsMax={multiline ? 5 : 1}
        style={{ height: multiline ? "150px" : "auto" }}
      />
      <ErrorMessage name={name} component="span" className={classes.error} />
      {type === "file" ? (
        <div className={classes.productsImagePreview}>
          {!!objectPath.get(values, `${name}.preview`) ? (
            <img
              src={objectPath.get(values, `${name}.preview`)}
              id={`${name}.preview`}
              style={{
                margin: "0 auto",
                maxHeight: 150,
              }}
            />
          ) : (
            "Hier erscheint Ihre Bildvorschau"
          )}
        </div>
      ) : null}
    </FormControl>
  );
};
