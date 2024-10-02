import { BiUpload } from "react-icons/bi"
import { usePlaylistQuery, useUploadMutation } from "../../redux-toolkit/slice"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Audio from "../components/Audio"



const Playlist = () => {

  const [form, setForm] = useState({
    surah: '',
    ayah: '',
    tag: '',
    qari: '',
    audioFile: null
  })
  const [count, setCount] = useState({Surah:0,Ayah:0})
  const [upload, { isLoading: isUploading }] = useUploadMutation()
  const { data:playlistData, isLoading, error } = usePlaylistQuery()

  function handleChange(e) {
    const { name, value, files } = e.target

    if (name === 'audio') {
       setForm((prev) => ({ ...prev, audioFile: files[0] }))
    }
    else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function uploadAudio(e) {

    e.preventDefault()

    if (!form.audioFile) {
      toast.error("Please select an audio file first")
      return
    }

    const formData = new FormData()
    formData.append('surah', form.surah)
    formData.append('ayah', form.ayah)
    formData.append('qari', form.qari)
    formData.append('tag', form.tag)
    formData.append('file', form.audioFile)

    try {
      const res = await upload(formData).unwrap()

      console.log(res)
      if (res.status === 200) {
        toast.success(res.message)

        setForm({
          surah: '',
          ayah: '',
          tag: '',
          qari: '',
          audioFile: null
        })
      }
      else {
        toast.error(res.message)
      }

    } catch (error) {
      toast.success(error)
    }
  }

   function handleCount(query){

    const itemsCount = playlistData?.filter((item)=> item.tag === query) 
    const newCount = itemsCount?.length || 0
     setCount((prev)=>({...prev,[query]: newCount}))
  }


  useEffect(()=>{
      handleCount('Ayah')
      handleCount('Surah')
  },[playlistData])
 
 

  return (
    <main className='playlist'>
      <div className="search-container rect">
        <input type="text" name="search" placeholder='Search by Surah...' />
      </div>
      <div className="filters">
        <div className="f-ayah rect">Ayah : {count.Ayah}</div>
        <div className="f-surah rect">Surah : {count.Surah}</div>
        <div className="f-qari rect">Filter by Qari</div>
      </div>

      <form className="upload search-container rect" onSubmit={uploadAudio}>
        <input type="text" name="surah" placeholder='Surah' value={form.surah} onChange={handleChange} />
        <input type="text" name="ayah" placeholder='Ayah' value={form.ayah} onChange={handleChange} />
        <input type="text" name="tag" placeholder='Surah/Ayah' value={form.tag} onChange={handleChange} />
        <input type="text" name="qari" placeholder='Qari' value={form.qari} onChange={handleChange} />

        <input type="file" name="audio" accept="audio/*" placeholder='Upload Audio...' onChange={handleChange} />
        <button><BiUpload className='icon' /><span>{isUploading ? 'Uploading' : 'Upload'}</span></button>
      </form>

      <div className="playlist-content">

        {
          isLoading ? 'Loading...' :
         ( 
          playlistData?.length > 0 && playlistData.map((audio) => {
            const {_id,surah,ayah,tag,qari,data,contentType } 
            = audio
 
            return <Audio key={_id} id={_id} surah={surah} ayah={ayah} tag={tag} qari={qari} data={data} contentType={contentType}/>
          }
        )
      )
        }
       </div>

    </main>
  )
}

export default Playlist
