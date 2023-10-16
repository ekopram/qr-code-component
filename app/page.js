import Image from 'next/image'

import IMG_QR_CODE from '@/public/images/image-qr-code.png';

export default function Home() {
  return (
    <div className="container">
    <div className="card">
    <Image src={IMG_QR_CODE} />
      <div class="text">
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  </div>
  )
}