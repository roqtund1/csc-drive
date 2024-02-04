/* eslint-disable react/prop-types */

const Filter = ({header, buttons}) => {
  return (
    <div className=''>
    <h1 className='font-semibold mb-2'>{header}</h1>
    <div className='flex gap-5'>
      {
       buttons && buttons.map((button, index) => {
          return <button key={index} className='bg-slate-100 px-3 py-2'>{button}</button>
        })
      }
    </div>
  </div>
  )
}

export default Filter