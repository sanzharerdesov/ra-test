import React from 'react';

export const LocationPanel = ({id, record, resource}) => (
    <div style={{textDecoration:"none", overflow:"hidden", maxWidth:"100%", width:"600px",height:"400px"}}>
        <div id="gmapcanvas" style={{height:"100%", width:"100%", maxWidth:"100%"}}>
            <iframe 
                title="gmap"
                style={{height:"100%", width:"100%", border:"0"}}
                 frameborder="0" 
                 src={"https://www.google.com/maps/embed/v1/place?q="+record.address.geo.lat+","+record.address.geo.lng+"&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"}>
            </iframe>
        </div>
        <a class="codefor-googlemap" rel="nofollow" href="https://www.embed-map.com" id="grabmaps-authorization">https://www.embed-map.com</a>
        <style>#gmapcanvas img{'maxWidth:none!important;background:none!important;font-size: inherit;font-weight:inherit;'}
        </style>
    </div>

);
