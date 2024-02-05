/* eslint-disable react/prop-types */

const Filter = ({header, buttons, setFilter }) => {
  return (
    <div className=''>
    <h1 className='font-semibod mb-2'>{header}</h1>
    <div className='flex gap-5 flex-wrap'>
      {
       buttons && buttons.map((button, index) => {
          return <button onClick={() => setFilter(button)} key={index} className='bg-slate-100 px-3 py-2'>{button}</button>
        })
      }
    </div>
  </div>
  )
}

export default Filter