// import React, { useState } from 'react'
// import Header from '../components/Header'
// import Content from '../components/Content'
// import Footer from '../components/Footer'

// const Page = () => {

//     const [isDark, setIsDark] = useState(false);
//   return (
//     <div className='page'>
//         <Header mode={isDark}/>
//         <Content mode={isDark}/>
//         <Footer mode={isDark} setIsDark={setIsDark}/>
//     </div>
//   )
// }

// export default Page

import React, { useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Page = () => {
  return (
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Page