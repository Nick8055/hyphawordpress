import "./grids.css";

import customerIcon from './icons/customer icon.png';
import dashboardIcon from './icons/dashboard icon.png';
import dataIcon from './icons/data icon.png';
import paperlessIcon from './icons/paperless icon.png';
import quickIcon from './icons/quick icon.png';
import seamlessIcon from './icons/seamless icon.png';
import smartIcon from './icons/smart icon.png';
import whatsappIcon from './icons/whatsapp icon.png';


const Grids = () => {
    return(
        <div className="GridApp">

            <div className="heading gridHeading">Features designed to make your life easier</div>

            <div className="Grid1">

                <div className="gridItem">
                    <img className="itemIcon" src={seamlessIcon}></img>
                    <div className="itemHeading">Seamless Appointment</div>
                    <div className="itemDesc">Contactless booking via QR code/Clinic website</div>
                </div>

                <div className="gridItem">
                    <img className="itemIcon" src={smartIcon}></img>
                    <div className="itemHeading">Smart Documentation</div>
                    <div className="itemDesc">Less typing. Attach images and lab reports</div>
                </div>

                <div className="gridItem">
                    <img className="itemIcon" src={quickIcon}></img>
                    <div className="itemHeading">Quick & Easy Billing</div>
                    <div className="itemDesc">Partial payments for multi-visits</div>
                </div>

            </div>

            <div className="Grid2">

                <div className="gridItem">
                    <img className="itemIcon" src={whatsappIcon}></img>
                    <div className="itemHeading">Whatsapp & SMS</div>
                    <div className="itemDesc">Appointment reminders & follow-up notifications</div>
                </div>

                <div className="gridItem">
                    <img className="itemIcon" src={dashboardIcon}></img>
                    <div className="itemHeading">Dashboard analytics</div>
                    <div className="itemDesc">Insights on clinic performance metrics</div>
                </div>

            </div>

            <div className="Grid1">

                <div className="gridItem">
                    <img className="itemIcon" src={dataIcon}></img>
                    <div className="itemHeading">Data Migration</div>
                    <div className="itemDesc">Contactless booking via QR code/Clinic website</div>
                </div>

                <div className="gridItem">
                    <img className="itemIcon" src={paperlessIcon}></img>
                    <div className="itemHeading">Go Paperless</div>
                    <div className="itemDesc">Less typing. Attach images and lab reports</div>
                </div>

                <div className="gridItem">
                    <img className="itemIcon" src={customerIcon}></img>
                    <div className="itemHeading">Customer Support</div>
                    <div className="itemDesc">Partial payments for multi-visits</div>
                </div>

            </div>

        </div>
    )
}

export default Grids;