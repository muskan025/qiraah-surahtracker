import { useRef, useState, useEffect } from "react"
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi"
import { useLocation } from "react-router-dom"

const Player = () => {
  const { state } = useLocation()
  const { audio, contentType } = state
 
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new window.Audio())

  useEffect(() => {
    if (audio && audio.length) {
      initializeAudio()
    }
  }, [state])

  const initializeAudio = () => {
    try {
      const arrayBuffer = new ArrayBuffer(audio.length)
      const view = new Uint8Array(arrayBuffer)
      for (let i = 0; i < audio.length; i++) {
        view[i] = audio[i]
      }

      const blob = new Blob([arrayBuffer], { type: contentType })
      const url = URL.createObjectURL(blob)

      audioRef.current.src = url
      audioRef.current.load()
    } catch (error) {
      console.error("Error initializing audio:", error)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <main className="player">
      <div className="circle">
        <div className="sub-circle"></div>
      </div>
      <div className="playing">
        <div className="playbar">
        </div>
        <div className="controls" onClick={togglePlay}>
          {isPlaying ? <BiPauseCircle /> : <BiPlayCircle />}
        </div>
        <div className="timestamp"></div>
      </div>
    </main>
  )
}

export default Player