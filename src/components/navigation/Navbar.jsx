import {connect} from 'react-redux'
import {useState, Fragment, useEffect } from 'react'
import {NavLink,Link} from 'react-router-dom'


function Navbar() {
 
/*   const [open, setOpen] = useState(false); */
  return (
    <nav className='w-full py-10 shadow-md '>
      <div className='bg-white px-4 sm:px-6'>
        <div className='-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
            <div className='ml-4 mt-2'>
                <image className=''
                src=''
                >
                  
                </image>
            </div>
            <div className='ml-4 mt-2 flex-shrink-0'>
                <Link to='/cases' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>Cases</Link>
                <Link to='/services' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>Services</Link>
                <Link to='/about_us' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>Carrer</Link>
                <Link to='/about_us' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>About Us</Link>
                <Link to='/blog' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>Blog</Link>
                <Link to='/contact' className='text-lg inline-flex font-medium loading-6 text-gray-900 mx-4'>Contact</Link>
                <button
                    type='button'
                    className='ml-6 relative inline-flex items-center text-white rounded-md border border-transparent bg-blue-900'
                > Create new job </button>
            </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  // Mapea aquí las propiedades que necesites desde el estado
});

export default connect(mapStateToProps)(Navbar);