import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import {NavigationContainer, DrawerActions, useFocusEffect} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {Feather} from '@expo/vector-icons'

console.disableYellowBox = true;

import menu from './src/assets/menu.png'

import Login from './src/views/login'
import Menu from './src/layouts/menu'

import List from './src/views/list'
  import Request from './src/views/list/request'
  import AllRequest from './src/views/list/all'


import Distribuition from './src/views/distribuition'
  import Products from './src/views/distribuition/products'
    import SubCategory from './src/views/distribuition/products/subCategory'
    import Product from './src/views/distribuition/products/product'
    import NewProducts from './src/views/distribuition/products/new_product'
      import Camera from './src/views/distribuition/products/new_product/camera'
      import Gallery from './src/views/distribuition/products/new_product/gallery'
  import Rate from './src/views/distribuition/rate'
  import Clock from './src/views/distribuition/clock'
  import Payments from './src/views/distribuition/payments'
  import Additional from './src/views/distribuition/additional'
    import NewAdditional from './src/views/distribuition/additional/newAdditional'
    import IntermediateCategory from './src/views/distribuition/additional/intermediateCategory'
    import IntermediateSubCategory from './src/views/distribuition/additional/intermediateSubcategory'
  import Combo from './src/views/distribuition/combo'
    import NewCombo from './src/views/distribuition/combo/newCombo'
      import NewItemCombo from './src/views/distribuition/combo/newCombo/item'
       

import Report from './src/views/report'
  import Chart from './src/views/report/charts'
  import Fees from './src/views/report/fees'
  import Flow from './src/views/report/flow'

import Sett from './src/views/set'
  import Acess from './src/views/set/acess'
  import General from './src/views/set/general'

import Rating from './src/views/rating'
import Register from './src/views/register';
import { Header } from 'react-native/Libraries/NewAppScreen';


function TitleNull(){
  return(
    <View></View>
  )
}

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function StackLogin(){
  return(
      <Stack.Navigator>  
        <Stack.Screen name='Login'  component={Login}   options={{header: props => <TitleNull{...props}/>}} />
      </Stack.Navigator>
  )
}

function StackList({navigation}){
  return(
    <Stack.Navigator 
      initialRouteName="List"
      screenOptions={{
        title: 'Pediaqui',
        headerStyle:{
          backgroundColor: '#442178'
        },
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerRight: ()=>(
          <TouchableOpacity 
            style={styles.menu} 
            onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Feather name="menu" size={24} color="white"/>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="List" component={List}/>  
      <Stack.Screen name="Request" component={Request}/>  
      <Stack.Screen name="AllRequest" component={AllRequest}/>  

    </Stack.Navigator>
  )
}

function StackDistribuition({navigation}){
  return(
    <Stack.Navigator initialRouteName='Distribuition'
    screenOptions={{
      title: 'Pediaqui',
      headerStyle:{
        backgroundColor: '#442178'
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerRight: ()=>(
        <TouchableOpacity style={styles.menu} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}><Feather name="menu" size={24} color="white"/></TouchableOpacity>
      ),
    }}>
      <Stack.Screen name='Distribuition' component={Distribuition} options={{title: 'Pedi aqui'}}/>
        <Stack.Screen name='Products' component={Products} options={{title: 'Categorias'}}/>
          <Stack.Screen name='SubCategory' component={SubCategory} />
          <Stack.Screen name='Product' component={Product} options={{title: 'Produtos'}}/>
          <Stack.Screen name='NewProducts' component={NewProducts} options={{title: 'Novo Produto'}}/>
            <Stack.Screen name='Camera' component={Camera} options={{title: 'Novo Produto'}}/>
            <Stack.Screen name='Gallery' component={Gallery} options={{title: 'Novo Produto'}}/>
        <Stack.Screen name='Rate' component={Rate} options={{title: 'Taxa de Entrega'}}/>
        <Stack.Screen name='Clock' component={Clock} options={{title: 'Horários de Funcionamento'}}/>
        <Stack.Screen name='Payments' component={Payments} options={{title: 'Formas de Pagamentos'}}/>
        <Stack.Screen name='Additional' component={Additional} options={{title: 'Adicionais'}}/>
          <Stack.Screen name='NewAdditional' component={NewAdditional} options={{title: 'Adicionais'}}/>
          <Stack.Screen name='IntermediateCategory' component={IntermediateCategory} options={{title: 'Adicionais'}}/>
          <Stack.Screen name='IntermediateSubCategory' component={IntermediateSubCategory} options={{title: 'Adicionais'}}/>
        <Stack.Screen name='Combo' component={Combo} options={{title: 'Combos'}}/>
          <Stack.Screen name='NewCombo' component={NewCombo} options={{title: 'Novo combo'}}/>
            <Stack.Screen name='NewItemCombo' component={NewItemCombo} options={{title: 'Novo item do combo'}}/>

    </Stack.Navigator>  
  )
}

function StackReport({navigation}){
  return(
    <Stack.Navigator initialRouteName='Report'
    screenOptions={{
      title: 'Pediaqui',
      headerStyle:{
        backgroundColor: '#442178'
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerRight: ()=>(
        <TouchableOpacity style={styles.menu} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}><Feather name="menu" size={24} color="white"/></TouchableOpacity>
      ),
    }}>
      <Stack.Screen name='Report' component={Report} />
      <Stack.Screen name='Chart' component={Chart} />
      <Stack.Screen name='Fees' component={Fees} />
      <Stack.Screen name='Flow' component={Flow} />
    </Stack.Navigator>
  )
}

function StackSet({navigation}){
  return(
    <Stack.Navigator initialRouteName='Set'
    screenOptions={{
      title: 'Pediaqui',
      headerStyle:{
        backgroundColor: '#442178'
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerRight: ()=>(
        <TouchableOpacity style={styles.menu} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}><Feather name="menu" size={24} color="white"/></TouchableOpacity>
      ),
    }}>
      <Stack.Screen name='Set' component={Sett} />
      <Stack.Screen name='Acess' component={Acess} />
      <Stack.Screen name='General' component={General} />
    </Stack.Navigator>
  )
}

function StackRating(){
  return(
  <Stack.Navigator initialRouteName='Rating'
    screenOptions={{
      title: 'Pediaqui',
      headerStyle:{
        backgroundColor: '#442178'
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerRight: ()=>(
        <TouchableOpacity style={styles.menu} onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}><Feather name="menu" size={24} color="white"/></TouchableOpacity>
      ),
    }}>
      <Stack.Screen name='Rating' component={Rating} />
    </Stack.Navigator>
  )
}

function DrawerNavigator(){

  return(
      <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor='#442178'/>
        <Drawer.Navigator
        screenOptions={{
          unmountOnBlur:true
        }}
        drawerContent={props=> <Menu{...props}/>}
        drawerPosition='right'
        initialRouteName={'Logout'}>
          <Drawer.Screen name='List'          component={StackList} />
          <Drawer.Screen name='Distribuition' component={StackDistribuition} />
          <Drawer.Screen name='Report'        component={StackReport} />
          <Drawer.Screen name='Set'           component={StackSet} />
          <Drawer.Screen name='Rating'        component={StackRating} />
          <Drawer.Screen name='Logout'        component={StackLogin} options={{swipeEnabled:false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  menu:{
    marginRight:10,
  }
});


export default DrawerNavigator