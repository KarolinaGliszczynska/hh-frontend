import React from 'react'
import Sidebar from "./Sidebar";
import Header from "./Header";
import {useState, useEffect} from "react";
import axios from "axios";

let Loaded = false;
const NewEvent = ( { userLoggedIn }) => {
    /*
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            setCurrentUser(user);
        }
    }, []);

     */

    let get_file = function(f) {
     //   let reader = new FileReader();

      //  var arrayBuffer = this.result,
      //  array = new Uint8Array(arrayBuffer),
      //  binaryString = String.fromCharCode.apply(null, array);
      //  reader.readAsArrayBuffer(f);
    }


    useEffect(()=> {
        const onPageLoad = () => {
            if (Loaded) {
                return;
            }
            Loaded = true;

            let load_file = function(f, callback) {
                let reader = new FileReader();
                reader.onloadend = function(e) {
                    if (e.target.readyState != FileReader.DONE) {
                        return;
                    }
                    let bb = reader.result;
                    bb = new Uint8Array(bb)
                    let out = [];
                    for (let i=0; i<bb.length; i++)
                        out.push(bb[i]);
                    callback(out);
                };
                reader.readAsArrayBuffer(f);
            };

            document.querySelector(".events-add button[type=submit]").onclick = function() {

                let myform = document.querySelector(".events-add");

                let slots = [];
                myform.querySelectorAll(".slot_display").forEach(function(el) {
                    if (el.classList.contains("invisible"))
                        return;
                    let allInputs = el.querySelectorAll("div");
                    let slot = [];
                    slot.push(allInputs[0].innerText); // date, start, end, volunteerrs
                    slot.push(allInputs[1].innerText);
                    slot.push(allInputs[2].innerText);
                    slot.push(allInputs[3].innerText);
                    slots.push(slot.join("|"));
                });

                let post_data = {};
                post_data["eventTitle"] = myform.querySelector("input[name=title]").value;
                post_data["dateOfEvent"] = myform.querySelector("input[name=date]").value;
                post_data["eventCategory"] = myform.querySelector("select[name=category]").value;
                post_data["eventDescription"] = myform.querySelector("textarea[name=description]").value;
                post_data["address"] = myform.querySelector("input[name=address]").value;
                post_data["city"] = myform.querySelector("input[name=city]").value;
                post_data["postalCode"] = myform.querySelector("input[name=postal_code]").value;
                post_data["image"] = null;
                post_data["eventSlots"] = slots;
                post_data["eventFiles"] = null;

                let files_to_load = 0;
                let file_upl = document.querySelectorAll(".upload_container input[type=file]");
                let event_files = [];

                let onfload = function() {
                    if (files_to_load > 0) {
                        return;
                    }

                    post_data["eventFiles"] = event_files;
                    let fetch_opts = {};
                    fetch_opts['method'] = "POST";
                    fetch_opts['body'] = JSON.stringify(post_data);
                    fetch_opts['headers'] = {
                        'Content-Type': 'application/json'
                    };

                    // fetch must be written in axios to work
                    fetch('http://localhost:3000/events/createNew', fetch_opts)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            alert("New event was created");
                            /*
                            if (data.error != null)
                            {
                                if (data.message != null)
                                    alert("Error: \n" + data.message);
                                else
                                    alert("Error: \n" + data.error);
                            }
                            return;
                             */
                        })
                        .catch((err) => console.log(err));
                }

                files_to_load = 0;
                for (let i=0; i<file_upl.length; i++)
                    files_to_load += file_upl[i].files.length;
                if (files_to_load == 0) {   // no files to upload, start now
                    onfload();
                    return;
                }

                for (let i=0; i<file_upl[1].files.length; i++) {
                    event_files[i] = {};
                    load_file(file_upl[1].files[i], function(e) {event_files[i] ={ data: e, name: file_upl[1].files[i].name}; files_to_load--; onfload()});
                }
                if (file_upl[0].files.length > 0){
                    load_file(file_upl[0].files[0], function(e) {post_data["image"] = e; files_to_load--; onfload()});
                }
            };

            document.querySelectorAll(".upload_container").forEach(function (container) {
                let clear = document.createElement("button");
                clear.style.visibility = 'hidden';
                clear.innerHTML = "x";
                container.appendChild(clear);

                let file_upload = container.querySelector("input");
                file_upload.onchange = function() {
                    let btn = file_upload.parentNode.parentNode.querySelector("button");
                    btn.style.visibility = file_upload.value == "" ? "hidden" : "visible";
                    btn.onclick = function() {
                        file_upload.value = '';
                        file_upload.onchange();
                    };
                };
            });
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

        let from = inputs[0].value;
        let to = inputs[1].value;
        let vol = inputs[2].value;

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

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: !userLoggedIn ? '' : 'none',
                }}>
                <h3> You must be logged-in to create an event! </h3>
            </div>
        );
    };

    return (<>
        <div className='event-detail-box row'>
            <div className="events-add">
                <h1>Add/edit event</h1>

                <div className="messages">
                    {errorMessage()}
                </div>

                <ul>
                    <li><label>Event Title<input name='title' type="text" placeholder="Title"></input></label></li>
                    <li><label>Event Date<input name='date' type="date" placeholder="Date"></input></label></li>
                    <li>
                        <label>Event Address<input type="text" placeholder="Address" name='address'></input></label></li>
                        <li><label><input type="text" placeholder="City" name='city'></input></label></li>
                        <li><label><input type="text" placeholder="Postal Code" name='postal_code'></input></label></li>

                    <li><label>Event Category<br/><select name='category' placeholder="Select Category">
                        <option>PEOPLE</option>
                        <option>ANIMALS</option>
                        <option>ENVIRONMENT</option>
                        <option>SMALL</option>
                    </select></label></li>

                    <li><label>Event Details<br />
                    <textarea placeholder="Enter event details" name='description'></textarea>
                    </label></li>

                        <li>
                    <div class='upload_container'>
                        <label>Featured image; files up to 512MB; formats png, img, jpg<input type="file" id="myFile" name="filename"/></label>
                    </div>

                    <br/>
                    <label>Event Slots</label><br/>

                    <div class="slot_add">
                        <input type="time" placeholder="from"></input>
                        <input type="time" placeholder="to"></input>
                        <input type="number" placeholder="volunteers"></input>
                        <button type="button" onClick={addSlot}>Add Slot</button>
                    </div>

                    <div className="slot_display invisible">
                        <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
                        <button type="button" onClick={addSlot}>X</button>
                    </div>
                        </li>

                        <li className='invisible'>
                        <div className='upload_container'>
                        <label>Event files, only files up to 512MB; formats pdf, doc, txt<input type="file" id="myFile" name="filename" multiple="true"/></label>
                        </div>
                        </li>

                        <li><br/><button type='submit'>Create Event</button></li>
                </ul>
            </div>
        </div>
    </>)
}

export default NewEvent
