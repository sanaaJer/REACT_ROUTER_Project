import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap-icons/font/bootstrap-icons.css';



export default function MovieCard({title,description,posterURL,rating}) {
  const imageStyle={width:'100%',height:180,borderRadius:6}
  const bodyStyle={margin:'0 10px'}
  const ratingStyle={position:'absolute',bottom:0,boxSizing:'border-box',width:'100%',backgroundColor:'#FFB200',padding:10,color:'black',marginBottom:0}
  const textStyle={display: '-webkit-box',WebkitBoxOrient: 'vertical',WebkitLineClamp: 5,overflow: 'hidden'}
  const cardStyle={ position:'relative',width: '16rem',height:400, border:'solid grey 1px' ,borderRadius:6,backgroundColor:'#181C14',color:'white'}
  
  return (
    <Card  style={cardStyle}>
    <Card.Img variant="top" src={posterURL} style={imageStyle}/>
    <Card.Body style={bodyStyle}>
      <Card.Title><h3>{title}</h3></Card.Title>
      <Card.Text style={textStyle}>{description}
      </Card.Text>
    </Card.Body>
     {/* rating section */}
    <div style={ratingStyle}>
       <i class="bi bi-star-fill"></i><span> {rating}</span>
    </div>
  </Card>
  )

}
