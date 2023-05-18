import React from 'react'
import { PageHeader } from 'antd'
import './index.css'

const AppLayout = ({ children }) => {
  return (
    <>
        <PageHeader className="header" title="All items"></PageHeader>
        <div className="card"> {children} </div>
    </>
  )
}

export default AppLayout