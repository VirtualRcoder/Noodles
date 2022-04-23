import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import './Home.css'
import { useState } from "react";
import { useHistory } from "react-router";

function Country(props){
    const Detail = useSelector((state)=>state.detailReducer)

    let brands = []

    useState(()=>{
        Detail.map((country)=>{
            if (country.Country == props.match.params.country){
                brands.push(country.Brand)
            }
        })
    },[Detail])

    brands = new Set(brands)
    brands = [...brands]

    const history = useHistory()
    return(
        <div>
            <h2>{props.match.params.country}</h2>
            <div>
                {
                    brands.map((brand)=>{
                        return(
                            <Card style={{ width: '18rem' }} onClick={()=>{history.push(`/${brand}`)}}>
                                <Card.Body>
                                    <Card.Title>{brand}</Card.Title>
                                </Card.Body>
                            </Card>
                        )                    
                    })
                }
            </div>
        </div>
    )
}

export default Country;