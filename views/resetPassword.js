import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { withFirebaseHOC } from '../firebase'

const ResetPassword = (props) => {

    const [email, setEmail] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const reset = async() => {
        setShowLoading(true);
        try {
            await props.firebase.sendPasswordResetEmail(email);
            setShowLoading(false);
        } catch (e) {
            setShowLoading(false);
            alert(
                e.message
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 28, height: 50  }}>Reset Password!</Text>
                </View>
                <View style={styles.subContainer}>
                    <Input
                        style={styles.textInput}
                        placeholder='Your Email'
                        leftIcon={
                            <Icon
                            name='mail'
                            size={24}
                            />
                        }
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Button
                        style={styles.textInput}
                        icon={
                            <Icon
                                name="input"
                                size={15}
                                
                            />
                        }
                        title=" Reset"                        
                        type="outline"
                        onPress={() => reset()} />
                </View>
                <View style={styles.subContainer}>
                    <Button
                       
                        icon={
                            <Icon
                                name="check-circle"
                                size={15}
                            />
                        }
                        title=" Back to Login"
                        buttonColor='#039BE5'
                        type="outline"
                        onPress={() => {
                            props.navigation.navigate('SignIn');
                        }} />
                </View>
                {showLoading &&
                    <View style={styles.activity}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flex:0.52
       
    },
    subContainer: {       
        marginLeft: 20,
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'    
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18
      
    },
})

export default withFirebaseHOC(ResetPassword);