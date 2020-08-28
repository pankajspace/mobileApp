import React, { Fragment, useState } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Alert } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormInput from '../components/common/FormInput'
import FormButton from '../components/common/FormButton'
import ErrorMessage from '../components/common/ErrorMessage'
import { withFirebaseHOC } from '../firebase'
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .label('Name')
        .required()
        .min(2, 'Must have at least 2 characters'),
    email: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    password: Yup.string()
        .label('Password')
        .required()
        .min(6, 'Password should be at least 6 characters '),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
        .required('Confirm Password is required'),
    check: Yup.boolean().oneOf([true], 'Please check the agreement')
})

const Signup = (props) => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [passwordIcon, setpasswordIcon] = useState('ios-eye');
    const [confirmPasswordIcon, setconfirmPasswordIcon] = useState('ios-eye');
    const [confirmPasswordVisibility, setconfirmPasswordVisibility] = useState(true);
    const dispatch = useDispatch();

    const goToLogin = () => props.navigation.navigate('Login')

    const handlePasswordVisibility = () => {
        setPasswordVisibility(prevState => !prevState.passwordVisibility)
        setpasswordIcon(prevState => prevState.passwordIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye')
    }
    const handleConfirmPasswordVisibility = () => {
        setconfirmPasswordVisibility(prevState => !prevState.confirmPasswordVisibility)
        setconfirmPasswordIcon(prevState => prevState.confirmPasswordIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye')
    }


    const handleOnSignup = async (values, actions) => {
        const { name, email, password } = values

        try {
            const response = await props.firebase.signupWithEmail(
                email,
                password
            )

            if (response.user.uid) {
                const { uid } = response.user
                const userData = { email, name, uid }
                await props.firebase.createNewUser(userData)
                props.firebase.doSendEmailVerification().then(function () {
                    console.log("Email sent.", props);
                }, function (error) { 
                    console.log("Email not sent.");
                });

                alert("You will receive a verification email, please verify and login again to start using application!");
                props.firebase.signOut()
                props.navigation.navigate("SignIn");
            }
        } catch (error) {
            // console.error(error)
            actions.setFieldError('general', error.message)
        } finally {
            actions.setSubmitting(false)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    check: false
                }}
                onSubmit={(values, actions) => {
                    handleOnSignup(values, actions)
                }}
                validationSchema={validationSchema}>
                {({
                    handleChange,
                    values,
                    handleSubmit,
                    errors,
                    isValid,
                    touched,
                    handleBlur,
                    isSubmitting,
                    setFieldValue
                }) => (
                        <Fragment>
                            <FormInput
                                name='name'
                                value={values.name}
                                onChangeText={handleChange('name')}
                                placeholder='Enter your full name'
                                iconName='md-person'
                                iconColor='#2C384A'
                                onBlur={handleBlur('name')}
                            />
                            <ErrorMessage errorValue={touched.name && errors.name} />
                            <FormInput
                                name='email'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder='Enter email'
                                autoCapitalize='none'
                                iconName='ios-mail'
                                iconColor='#2C384A'
                                onBlur={handleBlur('email')}
                            />
                            <ErrorMessage errorValue={touched.email && errors.email} />
                            <FormInput
                                name='password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                placeholder='Enter password'
                                iconName='ios-lock'
                                iconColor='#2C384A'
                                onBlur={handleBlur('password')}
                                secureTextEntry={passwordVisibility}
                                rightIcon={
                                    <TouchableOpacity onPress={handlePasswordVisibility}>
                                        <Ionicons name={passwordIcon} size={28} color='grey' />
                                    </TouchableOpacity>
                                }
                            />
                            <ErrorMessage errorValue={touched.password && errors.password} />
                            <FormInput
                                name='password'
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                placeholder='Confirm password'
                                iconName='ios-lock'
                                iconColor='#2C384A'
                                onBlur={handleBlur('confirmPassword')}
                                secureTextEntry={confirmPasswordVisibility}
                                rightIcon={
                                    <TouchableOpacity
                                        onPress={handleConfirmPasswordVisibility}>
                                        <Ionicons
                                            name={confirmPasswordIcon}
                                            size={28}
                                            color='grey'
                                        />
                                    </TouchableOpacity>
                                }
                            />
                            <ErrorMessage
                                errorValue={touched.confirmPassword && errors.confirmPassword}
                            />
                            <CheckBox
                                containerStyle={styles.checkBoxContainer}
                                checkedIcon='check-box'
                                iconType='material'
                                uncheckedIcon='check-box-outline-blank'
                                title='Agree to terms and conditions'
                                checkedTitle='You agreed to our terms and conditions'
                                checked={values.check}
                                onPress={() => setFieldValue('check', !values.check)}
                            />
                            <View style={styles.buttonContainer}>
                                <FormButton
                                    buttonType='outline'
                                    onPress={handleSubmit}
                                    title='SIGNUP'
                                    buttonColor='#F57C00'
                                    disabled={!isValid || isSubmitting}
                                    loading={isSubmitting}
                                />
                            </View>
                            <ErrorMessage errorValue={errors.general} />
                        </Fragment>
                    )}
            </Formik>
            <Button
                title='Have an account? Login'
                onPress={goToLogin}
                titleStyle={{
                    color: '#039BE5'
                }}
                type='clear'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50
    },
    logoContainer: {
        marginBottom: 15,
        alignItems: 'center'
    },
    buttonContainer: {
        margin: 25
    },
    checkBoxContainer: {
        backgroundColor: '#fff',
        borderColor: '#fff'
    }
})

export default withFirebaseHOC(Signup)
