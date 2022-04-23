import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import './Home.css'
import { useState } from "react";
import { useHistory } from "react-router";

function Home(props){
    const Detail = useSelector((state)=>state.detailReducer)

    let countries = []

    useState(()=>{
        Detail.map((country)=>{
            countries.push(country.Country)
        })
    },[Detail])


    countries = new Set(countries)
    countries = [...countries]

    const history = useHistory()
    return(

        <div className="country">
            {
                countries.map((country)=>{
                    return(
                        <Card style={{ width: '18rem' }} onClick={()=>{history.push(`/${country}`)}}>
                            <Card.Body>
                                <Card.Title>{country}</Card.Title>
                            </Card.Body>
                        </Card>
                    )                    
                })
            }

        </div>
    )
}

export default Home;