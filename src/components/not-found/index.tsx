import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h2>Uh oh! Something went wrond :( </h2>
            <h2>The page you're looking for can't be found</h2>
            <Link to="/">
                Go to Home
            </Link>
        </div>
    )
}
