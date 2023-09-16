import {FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Footer() {
    return (
      <footer className='text-lg flex flex-col items-center gap-y-5 md:gap-y-9 justify-center my-10 mx-2'>
        <div className='text-3xl flex gap-12'>
          <a href='#fb'><FaFacebookSquare/></a>
          <a href='#ig'><FaInstagram /></a>
          <a href='#twt'><FaTwitter /></a>
          <a href='#yt'><FaYoutube/></a>
        </div>
        <div className='flex gap-x-12 gap-y-2 flex-wrap mx-auto justify-center'>
          <a href='#cu'>Condition of Use</a>
          <a href='#pp'>Privacy & Policy</a>
          <a href='#pr'>Press Room</a>
        </div>
      </footer>
    )
  }
  