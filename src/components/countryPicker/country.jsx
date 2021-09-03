import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from '@material-ui/core'
import { fetchCountries } from '../../api'



const Country = ({handleCountryChange}) => {

    const [fetchedCountries,setFetchCountry] = useState([])

    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchCountry(await fetchCountries())
        }   
        fetchAPI()
    },[setFetchCountry])
    // console.log(fetchedCountries)


    return (
        <FormControl>
            <NativeSelect onChange={e=>handleCountryChange(e.target.value)}>
                <option value='global'>global</option>
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>



    )
}

export default Country
