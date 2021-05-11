import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large' color='#5aad4f' />
            </View>
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes /> ; 
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default Routes;
