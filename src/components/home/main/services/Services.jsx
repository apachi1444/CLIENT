import React from 'react';
import Service from './service/Service';
import { v4 as uuid } from 'uuid';
import { motion } from "framer-motion";
import './services.css';

function Services({data}) {
  return (
    <motion.div className="services"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {data.map((item)=>(<Service number={item.number} title={item.title} data={item.imgs} key={uuid()}/>))}
    </motion.div>
  )
}
Services.defaultProps={
  data:[
    {
      number: 1, title: 'Real Time Chatting', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    },
    {
      number: 2, title: 'Local & Personalized Browsing', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    },
    {
      number: 3, title: 'Up To Date Offers', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    },
    {
      number: 4, title: 'Right & Suitable Prices', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    },
    {
      number: 5, title: 'Ability To Create Networks', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    },
    {
      number: 6, title: 'Providing A Secure Plateform', imgs:[
        'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg',
        'https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073__340.jpg',
        'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__340.jpg',
        'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796__340.jpg',
        'https://cdn.pixabay.com/photo/2017/11/03/18/27/wintry-2915190__340.png',
        'https://cdn.pixabay.com/photo/2016/11/21/15/09/apartments-1845884__340.jpg',
        'https://cdn.pixabay.com/photo/2016/09/01/10/33/witchs-house-1635770__340.jpg'
      ]
    }
  ]
};
export default Services;