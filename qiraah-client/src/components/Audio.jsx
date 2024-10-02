/* eslint-disable react/prop-types */
import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Audio = ({surah,ayah,tag,qari,id,data,contentType}) => {

    const stateDate = {
        audio:data.data,
        contentType:contentType
    }
    return (
        <div className='audio rect'>
            <div className="details">
                <span className="surah-name">{surah}</span>
                <ul className="sub-details">
                    <div className='top-details'>
                    <li className="tag">{tag}</li>
                    <li className="ayah-no">{ayah}</li>
                    </div>
                    <li className="qari">{qari}</li>
                </ul>
            </div>
            <Link to={`/player/${id}`} state={stateDate}className="audio-link"><BiPlayCircle className='icon' /></Link>
        </div>
    )
}

export default Audio
