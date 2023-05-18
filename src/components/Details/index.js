import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Card, Button, Icon } from 'antd'
import { collections } from '../../data/collection'
import './index.css'

const { Meta } = Card

const Details = () => {

  const { slug } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    if (slug) {
      const product = collections.filter((obj) => obj.slug === slug)
      setItem(product[0])
    }
  }, [slug])
  

  return (
    <div className="root">
      <div className="productDetailsContainer">
        {item?.id ? (
          <Card
            hoverable
            className="productCard"
            cover={(
              <img
                className="productImage"
                src={item.primaryImage.jpegImages.lImage}
                srcSet={`${item.primaryImage.jpegImages.xsImage} 576w, ${item.primaryImage.jpegImages.sImage} 768w, ${item.primaryImage.jpegImages.mImage} 992w, ${item.primaryImage.jpegImages.lImage} 1200w`}
                alt={item.code}
              />
            )}
          >
            <Meta
              title={<div className="name"> {item.name} </div>}
              description={<div className="description"> {item.description} </div>}
            />
            <div className="priceContainer">
              <span className="listingPrice"> {`Rs.${item.listingPrice} `} </span>
              <span className="mrp"> {`Rs.${item.mrp}`} </span>
              <span className="discount"> {` (${item.discount}% OFF)`} </span>
            </div>
          </Card>
        ) : "loading..."}
        <div className="buttonContainer">
          <Button size="large"> <Icon type="heart" /> Wishlist </Button>
          <Button size="large" className="addToBag"> <Icon type="shopping" /> Add to Bag </Button>
        </div>
      </div>
    </div>
  )
}

export default Details