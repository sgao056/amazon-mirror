import React from 'react'
import "./Body.css"
import Product from "./Product"

function Body() {
    return (
        <div className="body">
            <div className="body_container">
                <img className="body_image" 
                     src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Video_Games_Internet/XCM_Manual_1291319_1497705_CA_GH20_ca_vg_gift_guide_placements_en_ca_3573051_1500x600_fr_CA._CB414412252_.jpg" 
                     alt=""/>
                <div className="body_row">
                    <Product 
                    id = "1"
                    title = "Taito Sakura Miku Hatsune Miku Drawn 2020 Version Figure"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/511x1v+zF1L._AC_UL480_FMwebp_QL65_.jpg"  
                    rating = {5}
                    />
                    <Product 
                    id = "2"
                    title = "SEGA KonoSuba: God's Blessing on This Wonderful World! The Movie: Legend of Crimson: Megumin Limited Premium Figure"
                    price={82.99}
                    image="https://m.media-amazon.com/images/I/41r8FdEaO+L._AC_SY200_.jpg"  
                    rating = {5}
                    />
                </div>
                <div className="body_row">
                <Product 
                    id = "3"
                    title = "LEGO The Incredibles - Nintendo Switch"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/71MKfqIpg0L._AC_UL480_FMwebp_QL65_.jpg"  
                    rating = {4}
                    /> 
                <Product 
                    id = "4"
                    title = "The King of Fighters XIV Standard Edition - PlayStation 4"
                    price={41.90}
                    image="https://m.media-amazon.com/images/I/81fWzFcfuzL._AC_UL480_FMwebp_QL65_.jpg"  
                    rating = {5}
                    /> 
                <Product 
                    id = "5"
                    title = "Cyberpunk 2077 PC"
                    price={79.99}
                    image="https://m.media-amazon.com/images/I/81PxGQcHiRL._AC_UL480_FMwebp_QL65_.jpg"  
                    rating = {3}
                    />
                </div>
                <div className="body_row">
                <Product 
                    id = "6"
                    title = "Railay Wireless Gamepad for Ps4/Pro/Slim Control Joystick for Playstation 4 (Red)"
                    price={40.98}
                    image="https://m.media-amazon.com/images/I/61cVXuLBWqL._AC_UL480_FMwebp_QL65_.jpg"  
                    rating = {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Body
