import React, { Fragment, useState } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { HideWithKeyboard } from 'react-native-hide-with-keyboard'
import FormInput from '../components/common/FormInput'
import FormButton from '../components/common/FormButton'
import ErrorMessage from '../components/common/ErrorMessage'
import AppLogo from '../components/common/AppLogo'
import { withFirebaseHOC } from '../firebase'
import { useDispatch, useSelector } from "react-redux";
import { checkUserAuth, setEmailVerification } from "../store/actions/authAction";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    password: Yup.string()
        .label('Password')
        .required()
        .min(6, 'Password must have at least 6 characters ')
})

const Login = (props) => {

    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('ios-eye');
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.app.currentLanguage);

    const goToSignup = () => props.navigation.navigate('SignUp')

    let {
        resetPasswordLink
      } = currentLanguage;
    const goToResetPassword = () => props.navigation.navigate(resetPasswordLink)

    const handlePasswordVisibility = () => {

        setPasswordVisibility(prevState => !prevState.passwordVisibility)

        setRightIcon(prevState => prevState.rightIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye')
    }

    const handleOnLogin = async (values, actions) => {
        const { email, password } = values

        try {
            const response = await props.firebase.loginWithEmail(email, password)

            if (response.user) {
                var user = props.firebase.currentUser();
                console.log('user.emailVerified :>> ', user.emailVerified);
                if (!user.emailVerified) {
                    alert("Verify your e-mail to finish signing up for Application, please check your email for verification link.");
                    props.firebase.signOut();
                    return;
                }
                else {                    
                    props.firebase.User = response.user;
                    dispatch(checkUserAuth(true))
                    dispatch(setEmailVerification(true))
                }
            }

        } catch (error) {
            actions.setFieldError('general', error.message)
        } finally {
            actions.setSubmitting(false)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <HideWithKeyboard style={styles.logoContainer}>
                <AppLogo />
            </HideWithKeyboard>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                    handleOnLogin(values, actions)
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
                    isSubmitting
                }) => (
                        <Fragment>
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
                                secureTextEntry={passwordVisibility}
                                iconName='ios-lock'
                                iconColor='#2C384A'
                                onBlur={handleBlur('password')}
                                rightIcon={
                                    <TouchableOpacity onPress={handlePasswordVisibility}>
                                        <Ionicons name={rightIcon} size={28} color='grey' />
                                    </TouchableOpacity>
                                }
                            />
                            <ErrorMessage errorValue={touched.password && errors.password} />
                            <View style={styles.buttonContainer}>
                                <FormButton
                                    buttonType='outline'
                                    onPress={handleSubmit}
                                    title='LOGIN'
                                    buttonColor='#039BE5'
                                    disabled={!isValid || isSubmitting}
                                    loading={isSubmitting}
                                />
                            </View>
                            <ErrorMessage errorValue={errors.general} />
                        </Fragment>
                    )}
            </Formik>
            <Button
                title="Don't have an account? Sign Up"
                onPress={goToSignup}
                titleStyle={{
                    color: '#F57C00'
                }}
                type='clear'
            />
             <Button
                title="Reset Password"
                onPress={goToResetPassword}
                titleStyle={{
                    color: '#F57C00'
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
    }
})

export default withFirebaseHOC(Login)