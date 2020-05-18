import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
const objectPath = require("object-path");

const useStyles = makeStyles((theme) => ({
  label: {
    transform: "translate(0, -15px) scale(0.75)!important",
  },
  error: {
    marginTop: 5,
    color: "red",
    fontSize: "0.8em",
    display: "inline-block",
  },
  productsImagePreview: {
    borderColor: "#c2cacf",
    backgroundColor: "#c2cacf",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 0,
    overflow: "hidden",
    margin: "10px auto",
    height: 250,
    width: "100%",
    textAlign: "center",
  },
  productsImagePreviewHint: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    display: "inline-block",
    margin: "0 auto",
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
    };

    reader.readAsDataURL(file);
  };

  const customBlurHandler = (e) => {
    if (type !== "file") {
      handleBlur(e);
      return;
    }

    if (type === "file" && !!objectPath.get(values, name)) {
      handleBlur(e);
      return;
    }

    return undefined;
  };

  return (
    <FormControl fullWidth={true} required={required} variant="outlined">
      <InputLabel
        htmlFor={name}
        variant="outlined"
        className={classes.label}
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
        onBlur={customBlurHandler}
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
                width: "100%",
              }}
            />
          ) : (
            <span className={classes.productsImagePreviewHint}>
              Hier erscheint Ihre Bildvorschau
            </span>
          )}
        </div>
      ) : null}
    </FormControl>
  );
};
