import React from 'react'

const Sidemenu = () => {
  return (
    <>
       <div className='col side-menu'>
          <h3 className='fw-bolder borders'>Other Services</h3>
            <ul>
            <li>
                    <a href="/iso-9001-2015/">ISO 9001:2015 - Quality Management system</a>
                </li>
                <li>
                    <a href="/iso-14001-2015/">ISO 14001:2015 -Environment Management system</a>
                </li>
                <li>
                    <a href="/ohsas-18001/"> ISO 45001:2018 -Occupational Health and Safety Assessment Series</a>
                </li>
                <li>
                    <a href="/iso-22000-2018/">ISO 22000:2018 Food Safety Management System</a>
                </li>
                <li>
                    <a href="/iso-13485-2012/">ISO 13485:2012 - Medical Devices - Quality Management System</a>
                </li>
                <li>
                    <a href="/iso-27001-2013/">ISO 27001:2013 Information Security Management system</a>
                </li>
                <li>
                    <a href="/iso-20000-2011/">ISO 20000:2011 Certification - IT Service Management System</a>
                </li>
                <li>
                </li>
                <li>
                    <a href="/haccp/">HACCP - Hazard Analysis Critical Control Point</a>
                </li>
                <li>
                    <a href="/ce-certification/">CE Certification</a>
                </li>

            </ul>
        </div>
    </>
  )
}

export default Sidemenu
