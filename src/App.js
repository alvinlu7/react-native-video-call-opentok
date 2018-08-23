import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app'
import '@firebase/auth'
import {Header, Button, CardSection, Spinner, Card} from './components/common';
import LoginForm from './components/LoginForm';
import VideoCall from './components/VideoCall'



class App extends Component{
    
    state = {loggedIn: null}
    
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDiNoG6S3m7bZMZ2erBK88FgpN-3TPLIAA",
            authDomain: "auth-90ba1.firebaseapp.com",
            databaseURL: "https://auth-90ba1.firebaseio.com",
            projectId: "auth-90ba1",
            storageBucket: "auth-90ba1.appspot.com",
            messagingSenderId: "791642838263"
        });
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(
                    <Card>
                    <CardSection>
                        <VideoCall/>
                    </CardSection>
                    <CardSection>
                        <Button 
                            onPress={()=>firebase.auth().signOut()}
                            style={{flexDirection: 'row'}}>
                            Log Out
                        </Button>
                    </CardSection>
                    </Card>
                );
            case false:
                return(
                    <LoginForm/>
                );
            default:
                return<Spinner size="large" />
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;