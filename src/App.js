import React from 'react'
import styles from './App.Module.css'
import {fetchData} from './api'
import {Cards,Charts,Country} from './components/index'


class App extends React.Component{

  state={
    data:{},
    country:''
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData)
    this.setState({data:fetchedData})
  }

handleCountryChange = async(country)=>{
  const fetchedData =  await fetchData(country)
  // console.log(fetchedData)
  this.setState({data:fetchedData,country:country})
}

  render(){
    const {data,country} = this.state
    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <Country handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    )
  }

}

export default App