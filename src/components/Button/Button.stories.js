import React from "react";
import Button from "./Button";

export default {
title: 'button ',
component: Button
}

export const Primary =()=><Button variant="primary">Primary</Button>
export const Secondary =()=><Button variant="Secondary">Secondary</Button>
export const Danger =()=><Button variant="Danger">Danger</Button>
export const Success =()=><Button variant="Success">Success</Button>