import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { PageHeader } from 'antd'
import { collections } from '../../data/collection'
import './index.css'

const AppLayout = ({ children }) => {

  const navigate = useNavigate()
  const { slug } = useParams()
  const [itemName, setItemName] = useState(null)

  useEffect(() => {
    if (slug) {
      const product = collections.filter((item) => item.slug === slug)
      setItemName(product[0].name)
    } else {
      setItemName(null)
    }
  }, [slug])
  

  return (
    <>
      {itemName ? (
        <PageHeader
          className="header"
          title={<div className="title"> {itemName} </div>}
          onBack={() => navigate('/')}
        />
      ) : (
        <PageHeader
          className="header"
          title="All items"
        />
      )}
      <div className="card"> {children} </div>
    </>
  )
}

export default AppLayout