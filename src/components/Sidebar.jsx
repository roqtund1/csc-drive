
import Filter from './Filter'

const Sidebar = () => {
  return (
    <div className='grid gap-8 bg-slate-200 p-4 rounded-sm'>
      <Filter header={'level'} buttons={['100', '200', '300', '400', '500']} />
      <Filter header={'Option'} buttons={['Econs', 'Maths', ' Engineering']} />
      <Filter header={'Material Type'} buttons={['Notes', 'Past questions', 'Assignments', 'Textbooks']}/>
      <Filter />
    </div>
  )
}

export default Sidebar