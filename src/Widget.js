import React from 'react'
import './Widget.css'
import News from './News'

function Widget() {
    return (
        <div className="widget">
            <div className="widget__news">
                <h2>News</h2>
            </div>
            <News title="The up coming artist"  description="The artist who was caught" message="The cry for help"/>
            <News title="The up coming artist"  description="The artist who was caught" message="The cry for help"/>
            <News title="The up coming artist"  description="The artist who was caught" message="The cry for help"/>
            <News title="The up coming artist"  description="The artist who was caught" message="The cry for help"/>
            <News title="The up coming artist"  description="The artist who was caught" message="The cry for help"/>
        </div>
    )
}

export default Widget
