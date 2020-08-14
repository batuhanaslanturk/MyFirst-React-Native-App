import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import Axios from 'axios'; 
import Detay from './Detay';

class Liste extends Component {
    state={data:[]};
    UNSAFE_componentWillMount(){
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({data:response.data}));
    }

    renderData(){
        return this.state.data.map((responseData,Id)=>
        <Detay key={Id} data={responseData} />
        );
    }
    render(){
        console.log('gelen data'+this.state);
        console.log('render');
        return(
            <ScrollView style={{marginTop:10}}>
                {this.renderData()}
            </ScrollView>
        );
    }
}
export default Liste;