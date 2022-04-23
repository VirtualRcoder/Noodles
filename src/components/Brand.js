import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import './Home.css'
import { useState } from "react";
import { useHistory } from "react-router";

function Country(props){
    const Detail = useSelector((state)=>state.detailReducer)

    let brands = []

    useState(()=>{
        Detail.map((brand)=>{
            if (brand.Brand == props.match.params.brand){
                brands.push(brand)
            }
        })
    },[Detail])

    brands = new Set(brands)
    brands = [...brands]

    const history = useHistory()
    return(
        <div>
            <h2>{props.match.params.brand}</h2>
            <div>
                {
                    brands.map((brand)=>{
                        return(
                            <div>
                                <h3>{brand.Variety}</h3>
                                <h3>{brand.Style}</h3>
                                <h3>{brand.Stars}</h3>
                                <h3>{brand.Country}</h3>
                            </div>
                        )                    
                    })
                }
            </div>
        </div>
    )
}

export default Country;