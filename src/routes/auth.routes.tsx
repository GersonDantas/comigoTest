import React from 'react';
import SignIn from '../pages/Signin/index';
import Create from '../pages/Create/index';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login" 
            component={SignIn}
        />
        <AuthStack.Screen name="Create User" component={Create} />
    </AuthStack.Navigator>
);

export default AuthRoutes;