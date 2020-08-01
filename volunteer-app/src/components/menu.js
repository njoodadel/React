import React from 'react';

export default function menu() {
    return (
        <ul id="myMenu">
            <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
            <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
            <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
            <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
        </ul>)
}