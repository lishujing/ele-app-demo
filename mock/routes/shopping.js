var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/restaurants', function (req, res, next) {
  res.send([
    {
      "name": "效果演示",
      "address": "广东省广州市越秀区中山五路219号华联购物中心F1",
      "id": 1,
      "latitude": 23.12497,
      "longitude": 113.26308,
      "location": [
        113.26308,
        23.12497
      ],
      "phone": "13437850035",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "5a5859a19c2bc57d52df30b3"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "5a5859a19c2bc57d52df30b2"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "5a5859a19c2bc57d52df30b1"
        }
      ],
      "status": 1,
      "recent_order_num": 106,
      "rating_count": 961,
      "rating": 4.7,
      "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "160e91e17fa2164.png",
        "business_license_image": "160e91e0a9f2163.png"
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "164ad0b6a3917599.jpg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "1381.9公里",
      "order_lead_time": "14小时44分钟",
      "description": "sad",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "蜂鸟专送"
      },
      "activities": [],
      "__v": 0
    }])
});

module.exports = router;
