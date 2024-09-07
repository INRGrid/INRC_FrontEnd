"use client";
import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./loader.scss"

const Loader = () => {
    const { loading } = { loading: false, };
    if (loading) {
        return (
            <div className="global_loader">
                <Spinner />
            </div>
        )
    } else {
        return null;
    }
}

export default Loader
