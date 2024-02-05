
import Filter from './Filter'

const Sidebar = ({setFilter}) => {
  return (
    <div className='grid gap-8 bg-slate-200 p-4 rounded-sm'>
      <Filter setFilter={setFilter} header={'level'} buttons={['100', '200', '300', '400', '500']} />
      <Filter setFilter={setFilter} header={'Option'} buttons={['Econs', 'Maths', ' Engineering']} />
      <Filter setFilter={setFilter} header={'Material Type'} buttons={['Notes', 'Past questions', 'Assignments', 'Textbooks']}/>
      <Filter />
    </div>
  )
}

export default Sidebar