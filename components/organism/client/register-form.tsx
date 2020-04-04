import { FormControl, InputLabel, Input, TextField } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
export const RegisterForm1 = (props) => {
    return (
        <Container>
            <Grid container item xs={6} justify="center" alignContent="center" alignItems="center">
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="name">Name des Ladens</InputLabel>
                    <Input id="name" name="name" />
                </FormControl>
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="address">Adresse des Ladens (inkl. PLZ)</InputLabel>
                    <Input id="address" name="address" />
                </FormControl>
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="city">Stadtteil und Kiez/Viertel</InputLabel>
                    <Input id="city" name="city" />
                </FormControl>
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="owner">Inhaber/in</InputLabel>
                    <Input id="owner" name="owner" />
                </FormControl>
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="description">Kurze Beschreibung des Shops</InputLabel>
                    <Input id="description" name="description" />
                </FormControl>
                <FormControl fullWidth={true} required={true} size='medium' margin="normal">
                    <InputLabel htmlFor="category">Produktkategorie</InputLabel>
                    <Input id="category" name="category" />
                </FormControl>
            </Grid>
        </Container>
    );
};

export const RegisterForm2 = (props) => {
    return (
        <>Teil 2</>
    )
}

export const RegisterForm3 = (props) => {
    return (
        <>Teil 3</>
    )
}