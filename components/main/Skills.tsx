import { Backend_skill, Frontend_skill, MERN_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20' style={{ transform: 'scale(0.9)' }}>

      <SkillText />

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {MERN_stack.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video className='w-full h-auto' preload='false' playsInline loop muted autoPlay src='/cards-video.webm'></video>
        </div>

      </div>
    </section>
  )
}

export default Skills

// import { Backend_skill, Frontend_skill, MERN_stack, Other_skill } from '@/constants';
// import React from 'react';
// import SkillDataProvider from '../sub/SkillDataProvider';
// import SkillText from '../sub/SkillText';
// import { Link, animateScroll as scroll } from 'react-scroll';

// const Skills = () => {
//   return (
//     <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20' style={{ transform: 'scale(0.9)' }}>

//       <SkillText />

//       <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
//         {Frontend_skill.map((image, index) => (
//           <Link
//             key={index}
//             to={`frontend-${index}`} // Create unique IDs for each skill category
//             spy={true}
//             smooth={true}
//             offset={-50} // Adjust offset as needed
//             duration={500} // Adjust duration as needed
//           >
//             <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
//           </Link>
//         ))}
//       </div>

//       <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
//         {Backend_skill.map((image, index) => (
//           <Link
//             key={index}
//             to={`backend-${index}`}
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//           >
//             <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
//           </Link>
//         ))}
//       </div>

//       <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
//         {MERN_stack.map((image, index) => (
//           <Link
//             key={index}
//             to={`mern-${index}`}
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//           >
//             <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
//           </Link>
//         ))}
//       </div>

//       {/* Other skill section */}

//       <div className='w-full h-full absolute'>
//         {/* ... video background */}
//       </div>
//     </section>
//   );
// };

// export default Skills;