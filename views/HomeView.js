import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../firebase'

class Home extends Component {
  state = {
    displayName: '',
    email: '',
    emailVerified:false
  }

  componentDidMount(){
    var user = this.props.firebase.currentUser();
    if (user != null) {
      console.log(this.props);
      const userObject1=user.providerData.reduce((ac,c)=>(ac={displayName:c.displayName,email:c.email}),{})
      this.getUserDetails(user.uid);   
      if(!user.emailVerified){
      this.sendVerificationEmail(user);
      }  
      this.setState({email:userObject1.email,emailVerified:user.emailVerified});
    }
  }

  sendVerificationEmail = async(user)=>{
    let self=this;
    user.sendEmailVerification().then(function(result) {
      console.log('sendEmailVerification',result)
      // self.setState({verificationEmailSent:})
    }).catch(function(error) {
      console.log('error',error);
      // An error happened.
    });
  }
  getUserDetails = async (uid) =>{
    let self=this;
    this.props.firebase.getUserFromCollection(uid)
          .then(function (doc) {
            self.setState({displayName:doc.data().fullName})
          }).catch(function (error) {
            console.log("Error getting cached document:", error);
          });
  }
  handleSignout = async () => {
    try {
      await this.props.firebase.signOut()
      this.props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome {this.state.displayName},</Text>
        <Text>{this.state.email} {this.state.emailVerified?"verified":"not yet verified"}</Text>
        <Button
          title='Signout'
          onPress={this.handleSignout}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(Home)
