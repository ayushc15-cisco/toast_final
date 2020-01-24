import React from "react";
import RoletakersCard from './RoletakersCard'



export default function FinalList() {

    const flex_style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    }



    return (
        <div class="flexContainer" style={flex_style}>

            <RoletakersCard  name="TMOD" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnrYP-LsCuxtKiA__OIAJdo3sdIEkE72dlUJwuxlznh_KS3lUg" />

            <br />
            <RoletakersCard name="Speakers" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVOeGqWDL8m3HJpoi4zBwArCLbyuglK5ZmktxXluTWZRSc9NYL" />
            <br />
            <RoletakersCard name="Respective Evaluators" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbScug_U7-iwaZOq33xxy97YBRbtKjfPku73DNTqrJec9iGG3Y" />
            <br />
            <RoletakersCard name="Time-Keeper" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSIHFToR9uSfhq8loqm_iI66vGclWgGSS7oYLMbedXiRDvuCiK" /><br />

            <RoletakersCard name="Ah-Counter" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcori_OLov6mjtsA0ApfVgmmqG-EDoevXI40RJgaIey1AC7ZF2" /><br />
            <RoletakersCard name="Grammarian" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxPWVOqtvaL0RXNF_Vx6WzrsJzmLIZXuYWYAtbjQy8iMKTRG5i" /><br />
            <RoletakersCard name="TTM" imageURL="https://billandsandyhawkins.com/wp-content/uploads/2018/08/bill-and-sandy-hawkins-public-speaking.jpg" /><br />
            <RoletakersCard name="General Evaluator" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZEOzH1MNVQiDDGwQZs5JlxGQWoVFJWLhQPxDGct0lPXWpRZ1T" /><br />


        </div>



    )
}