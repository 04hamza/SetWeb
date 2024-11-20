import React from "react";
import { useState } from "react";

import "./info.css";
const Formulaire=()=>{ 

    return(
        <form>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>PassWord</label>
            <input type="password" name="password"></input>
        </form>
    )
}
