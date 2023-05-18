import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Menu, Dropdown, Button, Icon, Row, Col } from 'antd'
import { collections } from '../../data/collection'
import './index.css'

const { Meta } = Card

const Home = () => {
  const navigate = useNavigate()

  const [filteredList, setFilteredList] = useState(collections)

  const handleFilter = (e)=> {
    console.log('filter ', e)
  }

  const handleSort = (e)=> {
    console.log('sort ', e)
  }
  
  const filterMenu = (
    <Menu onClick={handleFilter}>
      <Menu.Item key="Saree shop"> Saree shop </Menu.Item>
      <Menu.Item key="Sareemall"> Sareemall </Menu.Item>
    </Menu>
  )

  const sortMenu = (
    <Menu onClick={handleSort}>
      <Menu.Item key="priceHighToLow"> Price high to low </Menu.Item>
      <Menu.Item key="priceLowToHigh"> Price low to high </Menu.Item>
      <Menu.Item key="ratingsHighToLow"> Ratings high to low </Menu.Item>
      <Menu.Item key="nameAscending"> Name ascending </Menu.Item>
    </Menu>
  )

  const handleCardClick = (slug)=> navigate(`/${slug}`)

  return (
    <div className="container">
      <div className="utilityContainer">
        <Dropdown
          className="filterContainer"
          overlay={filterMenu}
          overlayClassName="filterOverlay"
          trigger={['click']}
        >
          <Button>
            Filter <Icon type="down"/>
          </Button>
        </Dropdown>
        <Dropdown
          className="sortContainer"
          overlay={sortMenu}
          overlayClassName="sortOverlay"
          trigger={['click']}
        >
          <Button>
            Sort <Icon type="down" />
          </Button>
        </Dropdown>
      </div>

      <Card className="listingContainer">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {filteredList.map((item) => (
            <Col xs={12} sm={12} md={6} lg={4}>
              <Card
                hoverable
                className="productCard"
                onClick={()=> handleCardClick(item.slug)}
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
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  )
}

export default Home