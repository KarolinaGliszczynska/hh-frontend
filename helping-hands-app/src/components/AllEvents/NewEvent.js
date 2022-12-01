import React, {useEffect} from 'react'
import Sidebar from "./Sidebar";
import Header from "./Header";

let Loaded = false;
const NewEvent = () => {

    useEffect(()=> {
        const onPageLoad = () => {
            if (Loaded) {
                return;
            }
            Loaded = true;

            let file_upload = document.querySelector(".upload_container").querySelector("input");
            file_upload.onchange = function() {
                let btn = file_upload.parentNode.parentNode.querySelector("button");
                btn.style.visibility = file_upload.value == "" ? "hidden" : "visible";
                btn.onclick = function() {
                    file_upload.value = '';
                    file_upload.onchange();
                };
            }
        }

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            // Remove the event listener when component unmounts
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }

    });



    function addSlot(e) {
        let ctrls = e.target.parentNode;
        let inputs = ctrls.querySelectorAll("input");
        inputs.forEach(function(el) {
            el.classList.remove("error");
        })

        let date = inputs[0].value;
        let from = inputs[1].value;
        let to = inputs[2].value;
        let vol = inputs[3].value;

        if (date.length == 0) {
            inputs[0].classList.add("error");
            inputs[0].focus();
            alert("Please enter date");
            return;
        }
        if (from.length == 0) {
            inputs[1].classList.add("error");
            inputs[1].focus();
            alert("Please enter start time");
            return;
        }
        if (to.length == 0) {
            inputs[2].classList.add("error");
            inputs[2].focus();
            alert("Please enter end time");
            return;
        }
        if (vol.length == 0) {
            inputs[3].classList.add("error");
            inputs[3].focus();
            alert("Please enter number of volunteers");
            return;
        }

        let source = ctrls.parentNode.querySelector(".slot_display");
        let newNode = source.cloneNode(true);
        newNode.addEventListener("click", function() {
            newNode.parentNode.removeChild(newNode);
        });

        inputs.forEach(function(el, index) {
            newNode.querySelectorAll("div")[index].innerHTML = el.value;
        });
        newNode.classList.remove("invisible");
        source.parentNode.appendChild(newNode);





    }

    return (<>
        <div className='events-main-container events-add'>
            <h1>Add/edit event</h1>

            <ul>
            <li><label>Event Title<input type="text" placeholder="Title"></input></label></li>
            <li><label>Event Date<input type="date" placeholder="Date"></input></label></li>
            <li>
                <label>Event Address<input type="text" placeholder="Address"></input></label></li>
                <li><label><input type="text" placeholder="City"></input></label></li>
                <li><label><input type="text" placeholder="Postal Code"></input></label></li>

            <li><label>Event Category<br/><select placeholder="Select Category">
                <option>Fashion Show</option>
                <option>Concert</option>
            </select></label></li>

            <li><label>Event Details<br />
            <textarea placeholder="Enter event details"></textarea>
            </label></li>

            <div class='upload_container'>
                <label>Featured image; files up to 512MB; formats png, img, jpg<input type="file" id="myFile" name="filename"/></label>
                <button type='button'>x</button>
            </div>


            <br/>
            <label>Event Slots</label><br/>

            <div class="slot_add">
                <input type="date" placeholder="date"></input>
                <input type="time" placeholder="from"></input>
                <input type="time" placeholder="to"></input>
                <input type="number" placeholder="volunteers"></input>
                <button type="button" onClick={addSlot}>Add Slot</button>
            </div>

            <div className="slot_display invisible">
                <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                <button type="button" onClick={addSlot}>X</button>
            </div>

                <label>Event files, only files up to 512MB; formats pdf, doc, txt<input type="file" id="myFile" name="filename"/></label>
            </ul>
        </div>
        </>)
}

export default NewEvent
