import React, {Component} from 'react';
import {Form} from "formik";
import {Button, Grid, TextField, Typography} from "material-ui";
import Yup from "yup";
import {withFormik} from "formik/dist/formik";
import {setLocale} from "yup/lib/customLocale";
import {connect} from "react-redux";
import * as editTestActionCreator from "../../redux/actions/testAction";
import * as modalWindowActionCreator from "../../redux/actions/modalWindowAction";
import {withStyles} from "material-ui/styles/index";
import {bindActionCreators} from "redux";


const styles = theme => ({
    textField: {
        width:"100%"
    },
});

class EditTestForm extends Component {
    render() {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            classes
        } = this.props;

        return (
            <div>
                <Typography variant="title">
                    Редактирование теста
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                id="title"
                                label="Заголовок"
                                margin="normal"
                                type="text"
                                value={values.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.title && touched.title}
                                helperText={errors.title}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.textField}
                                multiline
                                rows="2"
                                id="description"
                                label="Описание"
                                margin="normal"
                                type="text"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.description && touched.description}
                                helperText={errors.description}/>
                        </Grid>
                    </Grid>
                    <Grid container
                          direction="column"
                          alignItems={"center"}
                          justify={"flex-end"}>
                        <Grid item>
                            <Button type="submit" disabled={isSubmitting} variant="raised"
                                    color="primary">
                                Сохранить</Button>
                        </Grid>
                    </Grid>
                </Form>
            </div>
        );
    }
}

setLocale({
    string: {
        min: "Должен быть больше ${min} символов",
        max: "Должен быть меньше ${max} ",
        email: "Неправильный email",
    },
    mixed: {
        required: "Обязательное поле",
    }
});

const EditTestFormFormik = withFormik({
    mapPropsToValues: (props) => {
        let editTestId = props.teacherPanel.editTestId;
        let editTest = props.testReducer.find(test => test.id === editTestId);
        if (!editTest) {
            return (
                <h1>Test not found. Test's id = {editTestId}</h1>
            )
        }

        return {
            editTest: editTest,
            title: props.title || editTest.title,
            description: props.description || editTest.description
        }
    },
    validationSchema: Yup.object().shape({
        title: Yup.string()
            .min(3)
            .max(30)
            .required(),
        description: Yup.string()
            .max(100)
            .required(),
    }),
    handleSubmit: (values, FormikBag) => {
        let {title, description, editTest} = values;
        FormikBag.props.actions.editTest({
            id: editTest.id,
            title: title,
            description: description,
            createdDate: editTest.createdDate
        });
        FormikBag.props.actions.closeEditTestModal();
    },
    displayName: 'EditTestFormFormik',
})(withStyles(styles)(EditTestForm));

const mapStateToProps = (state) => {
    return {
        testReducer: state.testReducer,
        teacherPanel: state.teacherPanel
    }
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...editTestActionCreator,
        ...modalWindowActionCreator
    }, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps)
(EditTestFormFormik);